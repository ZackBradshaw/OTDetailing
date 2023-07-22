import React from 'react';

const CarDetailingFlowChart = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ margin: '20px' }}>
                <span role="img" aria-label="Car Wash">🚿</span>
                <p>Car Wash</p>
            </div>
            <div style={{ margin: '20px' }}>
                <span role="img" aria-label="Interior Cleaning">🧹</span>
                <p>Interior Cleaning</p>
            </div>
            <div style={{ margin: '20px' }}>
                <span role="img" aria-label="Exterior Cleaning">🧽</span>
                <p>Exterior Cleaning</p>
            </div>
            <div style={{ margin: '20px' }}>
                <span role="img" aria-label="Waxing">🕯️</span>
                <p>Waxing</p>
            </div>
            <div style={{ margin: '20px' }}>
                <span role="img" aria-label="Final Inspection">🔍</span>
                <p>Final Inspection</p>
            </div>
        </div>
    );
};

export default CarDetailingFlowChart;
