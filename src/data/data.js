// Убираем дублирование - создаем единый источник данных
export const initialDevicesData = {
    "ИБП 1": {
        status: "good",  // ключ для получения стилей
        load: 12,
        temperature: 35
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

