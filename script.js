// shopping-cart-calculator

let prices = [200, 450, 120, 700, 350];
let count=0;
let total_price=0;
for(let i=0;i<prices.length;i++){
    count++;
    total_price +=prices[i];

}
console.log("Total items =",count)
console.log("Total price =",total_price)
let discount=total_price * 0.10;
let final_price=total_price - discount;
console.log("Final price after discount =",final_price)

