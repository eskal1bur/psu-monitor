import React, {useState} from 'react';
import './normalize.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
function App() {
    const [selectedItem, setSelectedItem] = useState(null);

    const [devicesStatus, setDevicesStatus] = useState({
        "ИБП 1": "good",       // Зеленый
        "ИБП 2": "warning",    // Желтый
        "ИБП 3": "critical"    // Красный
    });

    // Цвета для разных статусов
    const statusColors = {
        good: "#28A34B",     // Зеленый
        warning: "#FFEC17",  // Желтый
        critical: "#D70000"  // Красный
    };

    const handleSelectItem = (title) => {
        console.log("App received selection:", title);
        setSelectedItem(title);
    };

    // Функция для теста смены статусов
    const changeStatuses = () => {
        setDevicesStatus({
            "ИБП 1": "good",
            "ИБП 2": "warning",
            "ИБП 3": "good" // Меняем только этот статус
        });
    };

    return (
        <div style={{display: 'flex'}}>
            <Sidebar
                onSelectItem={handleSelectItem}
                devicesStatus={devicesStatus}
                statusColors={statusColors}
            />
            <MainContent selectedItem={selectedItem}/>
            <button
                onClick={() => setDevicesStatus(prev => {
                    const currentStatus = prev["ИБП 1"];
                    const statusOrder = ["good", "warning", "critical"];
                    const currentIndex = statusOrder.indexOf(currentStatus);
                    const nextIndex = (currentIndex + 1) % statusOrder.length;

                    return {
                        ...prev,
                        "ИБП 1": statusOrder[nextIndex]
                    };
                })}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px',
                    background: '#ce1d1d',
                    zIndex: 1000
                }}
            >
                Переключить ИБП 3
            </button>
        </div>
    );
}

export default App;