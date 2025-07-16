import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import './normalize.css'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { statusStyles } from '../src/constants/statusConfig.js';
import { initialDevicesData } from './data/data.js';

const SOCKET_URL = 'http://localhost:3001'; // URL сервера
const API_URL = 'http://localhost:3001';

function App() {
    const [selectedItem, setSelectedItem] = useState(null);

    const [devicesData, setDevicesData] = useState(initialDevicesData);
    const handleSelectItem = (title) => {
        setSelectedItem(title);
    };

    useEffect(() => {
        // Подключение к WebSocket
        const socket = io(SOCKET_URL);
        socket.on('devicesUpdate', (updatedData) => {
            setDevicesData(updatedData);
            console.log('Received update from server:', updatedData);
        });

        // Начальная загрузка данных по API
        axios.get(`${API_URL}/devices`)
            .then((response) => setDevicesData(response.data))
            .catch((error) => console.error('Error fetching devices:', error));

        return () => socket.disconnect(); // Cleanup
    }, []);

    const toggleDeviceStatus = () => {
        const statusOrder = ["good", "warning", "critical"];

        setDevicesData(prev => {
            const currentStatus = prev["ИБП 1"].status;
            const currentIndex = statusOrder.indexOf(currentStatus);
            const nextIndex = (currentIndex + 1) % statusOrder.length;

            return {
                ...prev,
                "ИБП 1": {
                    ...prev["ИБП 1"],
                    status: statusOrder[nextIndex]
                }
            };
        });
    };

    const currentStatus = devicesData["ИБП 1"]?.status;
    const statusStyle = statusStyles[currentStatus] || {};

    return (
        <div style={{display: 'flex'}}>
            <Sidebar
                onSelectItem={handleSelectItem}
                devicesData={devicesData}
            />
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <header className="app__header">Header</header>
                <MainContent selectedItem={selectedItem} devicesData={devicesData} setDevicesData={setDevicesData}/>
            </div>

            <button
                onClick={toggleDeviceStatus}
                className="app__status-button"
                style={{
                    background: statusStyle.backgroundColor,
                    color: statusStyle.titleColor,
                }}
            >
                {`ИБП 1: ${statusStyle.title}`}
            </button>
        </div>
    );
}

export default App;