import React, {useState} from 'react';
import './normalize.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { statusColors, statusTexts, statusStyles } from '../src/constants/statusConfig.js';
function App() {
    const [selectedItem, setSelectedItem] = useState(null);

    const [devicesStatus, setDevicesStatus] = useState({
        "ИБП 1": "good",       // Зеленый
        "ИБП 2": "warning",    // Желтый
        "ИБП 3": "critical"    // Красный
    });

    const handleSelectItem = (title) => {
        console.log("App received selection:", title);
        setSelectedItem(title);
    };

    return (
        <div style={{display: 'flex'}}>
            <Sidebar
                onSelectItem={handleSelectItem}
                devicesStatus={devicesStatus}
                statusStyles={statusStyles}
            />
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <header style={{display:"flex",alignItems:"center", justifyContent:"center" ,backgroundColor:'blue', color:"white", height:'50px', }}>Header</header>
                <MainContent selectedItem={selectedItem} devicesStatus={devicesStatus}/>
            </div>

            <button
                onClick={() => {
                    const statusOrder = ["good", "warning", "critical"];
                    setDevicesStatus(prev => {
                        const currentStatus = prev["ИБП 1"];
                        const currentIndex = statusOrder.indexOf(currentStatus);
                        const nextIndex = (currentIndex + 1) % statusOrder.length;

                        return {
                            ...prev,
                            "ИБП 1": statusOrder[nextIndex]
                        };
                    });
                }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 15px',
                    background: statusStyles[devicesStatus['ИБП 1']].backgroundColor,
                    color: statusStyles[devicesStatus['ИБП 1']].titleColor,
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                {/*{`ИБП 1: ${statusTexts[devicesStatus["ИБП 1"]]}`}*/}
                {`ИБП 1: ${statusStyles[devicesStatus["ИБП 1"]].title}`}
            </button>
        </div>
    );
}

export default App;