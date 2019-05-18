
//BUDGET CONTROLLER
var budgetController = (function(){

    
 






})();

// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputVal: '.add__value',
        inputBtn: '.add__btn'
    }
    
    
    return {
       getInput: function() {
          return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMstrings.inputDesc).value,
            value: document.querySelector(DOMstrings.inputVal).value
          };
       }, 

       getDOMstrings: function() {
           return DOMstrings
       }
    };
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setUpEventListners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keyup', function(event) {
           if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem(); 
           };
        });
    };
    

    var ctrlAddItem = function() {
             //get the field input data
             var input = UICtrl.getInput();
             console.log(input);
        //add item to budget controller
        //add item to UI controller
        //calculate budget
        //display budget
    };
    return {
        init: function() {
            console.log('App has started');
            setUpEventListners();
        }
    };
    })(budgetController, UIController);

    controller.init();

      
    