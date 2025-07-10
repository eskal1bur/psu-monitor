import React, {useState} from 'react';
import './normalize.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

function App() {
    const [selectedItem, setSelectedItem] = useState(null);

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