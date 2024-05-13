//how many slices of pizza each person will get depending on the number of slices

function sharePizza(slices, people) {
    // Nested function accessing outer variables
    function slicesPerPerson(){
        return slices / people; //how to divide the slices per person based on the number of slices are in the pizza
    }

    let slicesOfPizza = slicesPerPerson(); //calls the inner function of slicesPerPerson
    return (`Each person gets ${slicesOfPizza} slices of pizza; from our ${slices} slice pizza.`) //string that is being returned to tell us how to share it evenly
}

//arguments
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));