import React from 'react';
import './styles.css';

const MainContent = ({ selectedItem }) => {
    // Пример данных
    const upsData = {
        "ИБП 1": {
            status: "ХОРОШО",
            load: 12,
            temperature: 35
        },
        "ИБП 2": {
            status: "НОРМА",
            load: 12,
            temperature: 35
        }
    };

    if (!selectedItem) return null; // Просто не рендерим ничего

    return (
        <div className="main-content">
            <h2 className="ups-title">{selectedItem}</h2>
            <div className="ups-container">
                <div className="ups-card">
                    <div className="card-row">
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
                        <span className="card-label">Состояние ИБП</span>
                        <span className="card-status" style={{backgroundColor: '#28A34B'}}>
              {upsData[selectedItem]?.status}
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
    );
};

export default MainContent;