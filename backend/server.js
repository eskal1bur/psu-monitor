const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});

// Middleware: ДОЛЖНЫ БЫТЬ ПЕРЕД РОУТАМИ!
app.use(cors({
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.get('/devices', (req, res) => {
    res.json(devicesData);
});

app.get('/devices/:id', (req, res) => {
    const device = devicesData[req.params.id];
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.json(device);
});

app.post('/devices/:id/mode', (req, res) => {
    const { mode } = req.body;
    const validModes = ['networkPowered', 'batteryPowered', 'off'];
    if (!validModes.includes(mode)) return res.status(400).json({ error: 'Invalid mode' });

    const deviceId = req.params.id;
    if (!devicesData[deviceId]) return res.status(404).json({ error: 'Device not found' });

    devicesData[deviceId].workMode = mode;
    console.log(`Mode changed for ${deviceId} to ${mode}`);

    io.emit('devicesUpdate', devicesData);

    res.json({ success: true, newMode: mode });
});

// Mock-данные
let devicesData = {
    "ИБП 1": {
        status: "good",  // ключ для получения стилей
        load: 12,
        temperature: 35,

        workMode: "networkPowered",
        inputVoltage: 232,
        outputVoltage: 232,
        inputFrequency: 50,

        batteryStatus: "critical",
        remainingBatteryCapacity: 20,
        batteryVoltage: 26.5

    },
    "ИБП 2": {
        status: "warning",
        load: 15,
        temperature: 42,

        workMode: "networkPowered",
        inputVoltage: 232,
        outputVoltage: 232,
        inputFrequency: 50,

        batteryStatus: "critical",
        remainingBatteryCapacity: 20,
        batteryVoltage: 26.5
    },
    "ИБП 3": {
        status: "critical",
        load: 28,
        temperature: 38,

        workMode: "networkPowered",
        inputVoltage: 232,
        outputVoltage: 232,
        inputFrequency: 50,

        batteryStatus: "critical",
        remainingBatteryCapacity: 20,
        batteryVoltage: 26.5
    },
    "ИБП 4": {
        status: "critical",
        load: 5,
        temperature: 31,

        workMode: "off",
        inputVoltage: 232,
        outputVoltage: 232,
        inputFrequency: 50,

        batteryStatus: "warning",
        remainingBatteryCapacity: 50,
        batteryVoltage: 26.5
    }
};

// Функция для генерации случайных обновлений (mock)
function generateMockUpdate() {
    Object.keys(devicesData).forEach((deviceId) => {
        const device = devicesData[deviceId];

        device.load = Math.floor(Math.random() * 100); // 0-100%
        device.temperature = Math.floor(Math.random() * 10) + 20; // 20-30°C
        device.inputVoltage = 220 + Math.floor(Math.random() * 10 - 5); // 215-225V
        if (Math.random() < 0.1) { // 10% шанс
            device.status = ['good', 'warning', 'critical'][Math.floor(Math.random() * 3)];
        }
    });

    // Пушим обновление всем подключённым клиентам по WebSocket
    io.emit('devicesUpdate', devicesData);
    console.log('Mock update sent:', devicesData);
}

setInterval(generateMockUpdate, 5000);

// WebSocket: Обработка подключений
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Запуск сервера
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});