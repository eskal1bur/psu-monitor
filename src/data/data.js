// Убираем дублирование - создаем единый источник данных
export const initialDevicesData = {
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
        temperature: 42
    },
    "ИБП 3": {
        status: "critical",
        load: 28,
        temperature: 38
    },
    "ИБП 4": {
        status: "critical",
        load: 5,
        temperature: 31
    }
};

