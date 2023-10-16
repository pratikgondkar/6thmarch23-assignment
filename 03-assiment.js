// Build a feature for Store's Inventory.

const inventory = {
    "item1": 20,
    "item2": 30,
    "item3": 40,
};

function converTorupee(priceInUSD) {
    const exchangeRate = 80;
    return priceInUSD + exchangeRate; 
}

const inventoryInRupee = Object.fromEntries(
    Object.entries(inventory).map(([item, priceInUSD]) => [item, converTorupee(priceInUSD)])
);

console.log("Inventory in indian rupees :", inventoryInRupee);