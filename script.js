
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#invoice-table tbody");

    const data = [
        { item: 'B450M', modeNo: 'GIGABYTE BRAND B450M-4SLOTS', qty: 4, unitPrice: 40.00, amount: 160.00 },
        { item: 'Z170', modeNo: 'ASUS BRAND Z170-4SLOTS', qty: 3, unitPrice: 42.00, amount: 126.00 },
        { item: 'Z390', modeNo: 'MSI BRAND Z390-4SLOTS', qty: 4, unitPrice: 72.00, amount: 288.00 },
        { item: 'Z590', modeNo: 'MSI BRAND Z590-4SLOTS', qty: 4, unitPrice: 82.00, amount: 328.00 },
        { item: 'B85', modeNo: 'ASUS BRAND B85-4SLOTS', qty: 3, unitPrice: 32.00, amount: 96.00 },
        { item: 'R5 2600', modeNo: 'AMD RYZEN5 2600 CPU', qty: 2, unitPrice: 42.00, amount: 84.00 },
        { item: 'I5 10400F', modeNo: 'INTEL I5 10400F CPU', qty: 2, unitPrice: 92.00, amount: 184.00 },
        { item: 'I5 11400F', modeNo: 'INTEL I5 11400F CPU', qty: 2, unitPrice: 98.00, amount: 196.00 },
        { item: 'USED GTX1660S', modeNo: 'USED GIGABYTE GTX1660S 6GB', qty: 3, unitPrice: 120.00, amount: 360.00 },
        { item: 'USED RTX2060S', modeNo: 'USED ASUS RTX2060S 8GB', qty: 4, unitPrice: 175.00, amount: 700.00 },
        { item: 'GTX 1060', modeNo: 'PCWINMAX NEW GTX1060 5GB', qty: 3, unitPrice: 92.00, amount: 276.00 },
        { item: 'GTX 1060', modeNo: 'PCWINMAX NEW GTX1060 6GB', qty: 3, unitPrice: 102.00, amount: 306.00 },
        { item: 'GTX 1660S', modeNo: 'PCWINMAX NEW GTX1660S 6GB', qty: 2, unitPrice: 113.00, amount: 226.00 },
        { item: 'RTX2060', modeNo: 'PCWINMAX NEW RTX2060S 6GB', qty: 1, unitPrice: 170.00, amount: 170.00 },
        { item: 'DDR4', modeNo: 'DDR4 4GB 3200MHZ HYPER X', qty: 20, unitPrice: 14.00, amount: 280.00 },
        { item: 'DDR4', modeNo: 'DDR4 16GB 2666MHZ HYPER X', qty: 15, unitPrice: 23.00, amount: 345.00 },
        { item: 'DDR4', modeNo: 'DDR4 16GB 3200MHZ HYPER X', qty: 15, unitPrice: 24.00, amount: 360.00 },
        { item: '700W PSU', modeNo: 'OEM BRAND 700W PSU', qty: 2, unitPrice: 36.00, amount: 72.00 },
        { item: '750W PSU', modeNo: 'OEM BRAND 750W PSU', qty: 2, unitPrice: 38.00, amount: 76.00 },
        { item: 'LIQUID COOLER', modeNo: 'DUAL FAN LIQUID COOLER', qty: 2, unitPrice: 42.00, amount: 84.00 }
    ];

    data.forEach(row => {
        const tr = document.createElement("tr");

        for (const prop in row) {
            const td = document.createElement("td");
            td.textContent = row[prop];
            tr.appendChild(td);
        }

        tableBody.appendChild(tr);
    });
});
