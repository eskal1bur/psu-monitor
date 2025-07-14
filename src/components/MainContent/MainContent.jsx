import React from 'react';
import './MainContent.css';
import { statusStyles } from '../../constants/statusConfig.js';

const MainContent = ({ selectedItem, devicesData }) => {
    if (!selectedItem) return null;

    const device = devicesData[selectedItem];
    if (!device) return null;

    const statusStyle = statusStyles[device.status] || {};

    return (
        <div className="main-content">
            <div className="ups-main-container">
                <h2 className="ups-title">{selectedItem}</h2>
                <div className="ups-container">
                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyle.backgroundColor,
                                    color: statusStyle.titleColor
                                }}
                            >
                                {statusStyle.title}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{device.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{device.temperature}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;