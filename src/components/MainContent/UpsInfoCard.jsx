import React from 'react';
import './styles.css';

const UpsInfoCard = ({ data }) => {
    return (
        <div className="ups-card">
            <div className="card-row">
                <span className="card-label">Состояние ИБП</span>
                <span className="card-status" style={{ backgroundColor: '#28A34B' }}>
          {data.status}
        </span>
            </div>

            <div className="card-row">
                <span className="card-label">Нагрузка ИБП(%)</span>
                <span className="card-value">{data.load}</span>
            </div>

            <div className="card-row">
                <span className="card-label">Температура ИБП(C)</span>
                <span className="card-value">{data.temperature}</span>
            </div>
        </div>
    );
};

export default UpsInfoCard;