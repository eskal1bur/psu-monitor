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
        good: "#4CAF50",     // Зеленый
        warning: "#FFC107",  // Желтый
        critical: "#F44336"  // Красный
    };

    const handleSelectItem = (title) => {
        console.log("App received selection:", title);
        setSelectedItem(title);
    };

    return (
        <div style={{display: 'flex'}}>
            <Sidebar onSelectItem={handleSelectItem}/>
            <MainContent selectedItem={selectedItem}/>
        </div>
    );
}

export default App;