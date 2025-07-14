import {initialDevicesData} from "../data/data.js";

export const sidebarConfig = [
    {
        title: "Радиолокационные средства аэродрома",
        key: "radarSystems",
        children: [
            {
                title: "Компоненты КМП",
                key: "kmpComponents",
                children: Object.keys(initialDevicesData).map(deviceName => ({
                    title: deviceName,
                    key: deviceName,
                    isFinalItem: true,
                })),
            },
        ],
    },
];