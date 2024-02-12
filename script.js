function calculateCost() {
    const consumption = parseFloat(document.getElementById('consumption').value);
    const tariffType = document.getElementById('tariffType').value;
    const dayRate = parseFloat(document.getElementById('dayRate').value);
    const nightRate = parseFloat(document.getElementById('nightRate').value);
    const usageTime = parseFloat(document.getElementById('usageTime').value);

    let totalCost = 0;
    if (tariffType === 'day') {
        totalCost = consumption * usageTime * dayRate;
    } else if (tariffType === 'night') {
        totalCost = consumption * usageTime * nightRate;
    }

    document.getElementById('result').innerText = `Стоимость использования: ${totalCost.toFixed(2)} рублей`;
}
