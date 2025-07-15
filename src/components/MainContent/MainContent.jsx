import React from 'react';
import './MainContent.css';
import { statusStyles } from '../../constants/statusConfig.js';
import { powerStatusStyles } from '../../constants/workModeStatusConfig.js';

const MainContent = ({ selectedItem, devicesData }) => {
    if (!selectedItem) return null;

    const device = devicesData[selectedItem];
    if (!device) return null;

    const statusStyle = statusStyles[device.status] || {};
    const batteryStatusStyle = statusStyles[device.batteryStatus] || {};
    const powerStatusStyle = powerStatusStyles[device.workMode] || {};

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

                    <div className="ups-card">
                        <div className="ups-card__row">
                            <span className="ups-card__label"><b>Режим работы</b>
                            </span>
                            <span
                                className="ups-card__status_simple-text tooltip-container"
                                style={{
                                    color: powerStatusStyle.titleColor,
                                }}
                            >
                                {powerStatusStyle.title}
                                <span className="tooltip-icon">?</span>
                                <div className="tooltip">
                                    <p><strong>Возможные режимы:</strong></p>
                                    <ul>
                                        <li style={{color: powerStatusStyles.networkPowered.titleColor}}>
                                            {powerStatusStyles.networkPowered.title}
                                        </li>
                                        <li style={{color: powerStatusStyles.batteryPowered.titleColor}}>
                                            {powerStatusStyles.batteryPowered.title}
                                        </li>
                                        <li style={{color: powerStatusStyles.off.titleColor}}>
                                            {powerStatusStyles.off.title}
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                        <div className="ups-card__row">
                            <span className="ups-card__label">Входное напряжение(В)</span>
                            <span className="ups-card__value">{device.inputVoltage}</span>
                        </div>
                        <div className="ups-card__row">
                            <span className="ups-card__label">Выходное напряжение(В)</span>
                            <span className="ups-card__value">{device.outputVoltage}</span>
                        </div>
                        <div className="ups-card__row">
                            <span className="ups-card__label">Входная частота(Hz)</span>
                            <span className="ups-card__value">{device.inputFrequency}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="ups-card__row">
                            <span className="ups-card__label"><b>Состояние батарей</b></span>
                            <span
                                className="ups-card__status"
                                style={{
                                    backgroundColor: batteryStatusStyle.backgroundColor,
                                    color: batteryStatusStyle.titleColor
                                }}
                            >
                                {batteryStatusStyle.title}
                            </span>
                        </div>
                        <div className="ups-card__row">
                            <span className="ups-card__label">Оставшаяся ёмкость батарей(%)</span>
                            <span className="ups-card__value">{device.remainingBatteryCapacity}</span>
                        </div>
                        <div className="ups-card__row">
                            <span className="ups-card__label">Напряжение АКБ(В)</span>
                            <span className="ups-card__value">{device.batteryVoltage}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainContent;