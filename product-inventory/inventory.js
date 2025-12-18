
//calculating discount
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    //Implement logic
    return price - (price * discountRate);
}

console.log("25% Discount", calculateDiscount(100, 0.25)); // expect 75



//filtering products
function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    //Implement filtering logic
    return products.filter(callback);
}

const products = [
    { name: 'cowboy hat', price: 40 },
    { name: 'running shoes', price: 100 },
    { name: 'dress', price: 60}
]; 

const expensiveProducts = filterProducts(products, product => product.price > 45);
console.log("Products over $45 dollars: ", expensiveProducts); 
//expecting running shoes, dress



function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    //Implement sorting logic
    return inventory.slice().sort((a,b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

const inventory = [
    { name: 'cowboy hat', price: 40 },
    { name: 'running shoes', price: 100 },
    { name: 'dress', price: 60}
];

console.log("Sorted inventory: ", sortInventory(inventory, 'price'));
// expect cowboy hat, dress, running shoes

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
};