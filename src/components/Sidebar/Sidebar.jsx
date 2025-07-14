import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import {statusStyles} from "../../constants/statusConfig.js";
import {sidebarConfig} from '../../constants/sidebarConfig.js'

const Sidebar = ({ onSelectItem, devicesData }) => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (itemKey) => {
        setExpandedItems(prev => ({ ...prev, [itemKey]: !prev[itemKey] }));
    };

    const renderItems = (items) =>
        items.map(item => (
            <SidebarItem
                key={item.key}
                title={item.title}
                isExpanded={expandedItems[item.key]}
                onClick={() => toggleExpand(item.key)}
                onSelect={item.isFinalItem ? onSelectItem : undefined}
                isFinalItem={item.isFinalItem}
                // Берем статус из объединенных данных
                statusStyles={item.isFinalItem ? statusStyles[devicesData[item.title]?.status] : undefined}
            >
                {item.children && renderItems(item.children)}
            </SidebarItem>
        ));

    return (
        <div className="sidebar">
            {renderItems(sidebarConfig)}
            <div className="exit-button">Выход</div>
        </div>
    );
};

export default Sidebar;