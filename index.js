function restaurant(name,tableNumber,order){
    let restaurantName = "Canary Foods";
    console.log(restaurantName);
    let menu = ["Fried Chicken","sodas","meat","cock tail"];
    for(let i = 0; i < 30; i++){
        if(menu[i] == order){
            console.log(name);
            console.log(tableNumber);
            console.log(`${order} will be ready in a few!`);
            break;
        }
        else if(menu[i] !== order){
            console.log(name);
            console.log(tableNumber);
            console.log(`${order} not in menu but you can choose from the following: ${menu}`);
            break;
        }
    }
}
console.log (restaurant("Mikisa Priscilla",23,"Fried Chicken"));