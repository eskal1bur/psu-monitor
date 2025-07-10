import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import './styles.css';

const Sidebar = ({ onSelectItem }) => {
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
                    <SidebarItem
                        title="ИБП 1"
                        statusColor="#4CAF50"
                        onSelect={handleSelect}
                        isFinalItem={true} // Помечаем как конечный элемент
                    />
                    <SidebarItem
                        title="ИБП 2"
                        statusColor="#FFC107"
                        onSelect={handleSelect}
                        isFinalItem={true}
                    />
                    <SidebarItem
                        title="ИБП 3"
                        statusColor="#F44336"
                        onSelect={handleSelect}
                        isFinalItem={true}
                    />
                </SidebarItem>
            </SidebarItem>
            <div className="exit-button">Выход</div>
        </div>
    );
};

export default Sidebar;