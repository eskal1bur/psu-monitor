import React from 'react';
import './styles.css';
import { statusColors, statusTexts, statusStyles } from '../../constants/statusConfig.js';

const MainContent = ({ selectedItem, devicesStatus }) => {
    // Пример данных
    const upsData = {
        "ИБП 1": {
            status: "ХОРОШО", // Не используется
            load: 12,
            temperature: 35
        },
        "ИБП 2": {
            status: "УХУДШЕНИЕ", // Не используется
            load: 12,
            temperature: 35
        }
    };

    // const statusTexts = {
    //     good: "ХОРОШО",
    //     warning: "УХУДШЕНИЕ",
    //     critical: "ОПАСНОСТЬ"
    // };
    //
    // // Цвета для разных статусов
    // const statusColors = {
    //     good: "#28A34B",     // Зеленый
    //     warning: "#FFEC17",  // Желтый
    //     critical: "#D70000"  // Красный
    // };

    if (!selectedItem) return null; // Просто не рендерим ничего

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
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>

                    <div className="ups-card">
                        <div className="card-row">
                            <span className="card-label"><b>Состояние ИБП</b></span>
                            <span
                                className="card-status"
                                style={{
                                    backgroundColor: statusStyles[devicesStatus[selectedItem]].color,
                                    color: statusStyles[devicesStatus[selectedItem]].textColor
                                }}
                            >
                                {statusStyles[devicesStatus[selectedItem]].text}
                            </span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Нагрузка ИБП(%)</span>
                            <span className="card-value">{upsData[selectedItem]?.load}</span>
                        </div>
                        <div className="card-row">
                            <span className="card-label">Температура ИБП(C)</span>
                            <span className="card-value">{upsData[selectedItem]?.temperature}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MainContent;