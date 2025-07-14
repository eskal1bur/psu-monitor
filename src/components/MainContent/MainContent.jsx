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
            <div className="main-content__container">
                <h2 className="main-content__title">{selectedItem}</h2>

                <div className="main-content__ups-container">
                    <div className="ups-card">
                        <div className="ups-card__row">
                            <span className="ups-card__label"><b>Состояние ИБП</b></span>
                            <span
                                className="ups-card__status"
                                style={{
                                    backgroundColor: statusStyle.backgroundColor,
                                    color: statusStyle.titleColor
                                }}
                            >
                                {statusStyle.title}
                            </span>
                        </div>

                        <div className="ups-card__row">
                            <span className="ups-card__label">Нагрузка ИБП(%)</span>
                            <span className="ups-card__value">{device.load}</span>
                        </div>

                        <div className="ups-card__row">
                            <span className="ups-card__label">Температура ИБП(C)</span>
                            <span className="ups-card__value">{device.temperature}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;