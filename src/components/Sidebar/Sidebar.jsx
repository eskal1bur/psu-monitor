import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import {statusStyles} from "../../constants/statusConfig.js";

const Sidebar = ({ onSelectItem, devicesStatus, statusStyles }) => {
    const [expandedItems, setExpandedItems] = useState({
        radarSystems: false,
        kmpComponents: false,
    });

    const handleSelect = (title) => {
        console.log("Selected:", title);
        if (onSelectItem) onSelectItem(title);
    };

    const toggleExpand = (itemKey) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey],
        }));
    };

    return (
        <div className="sidebar">
            <SidebarItem
                title="Радиолокационные средства аэродрома"
                isExpanded={expandedItems.radarSystems}
                onClick={() => toggleExpand('radarSystems')}
            >
                <SidebarItem
                    title="Компоненты КМП"
                    isExpanded={expandedItems.kmpComponents}
                    onClick={() => toggleExpand('kmpComponents')}
                >
                    {Object.keys(devicesStatus).map(deviceName => (
                        <SidebarItem
                            key={deviceName}
                            title={deviceName}
                            statusStyles={statusStyles[devicesStatus[deviceName]]}
                            onSelect={handleSelect}
                            isFinalItem={true}
                        />
                    ))}
                </SidebarItem>
            </SidebarItem>
            <div className="exit-button">Выход</div>
        </div>
    );
};

export default Sidebar;