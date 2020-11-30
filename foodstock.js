class Foodstock{
    constructor(){

    }

    getfoodStock(){
        foodStock=database.ref('food');
        foosStock.on("value",readStock);
    }


}