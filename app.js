
//BUDGET CONTROLLER
var budgetController = (function(){

})();

// UI CONTROLLER
var UIController = (function(){
// some code
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function() {
             //get the field input data
        //add item to budget controller
        //add item to UI controller
        //calculate budget
        //display budget
        console.log("YO");
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keyup', function(event) {
       if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem(); 
       };
    });

    })(budgetController, UIController);