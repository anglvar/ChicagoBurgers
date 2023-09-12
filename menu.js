"use strict";

window.addEventListener("load", () => {
    // Variables to hold selected values from user
    let cheeseburgersCount;
    let dbcheeseburgersCount;
    let chTenderCount;
    let kMealCount;
    let total;

    let orderForm = this.document.forms.orderForm;

    let cheeseburger = orderForm.elements.cheeseburger;
    let dbcheeseburger = orderForm.elements.dbcheeseburger;
    let chTender =  orderForm.elements.chTender;
    let kMeal =  orderForm.elements.kMeal;
    cheeseburger.focus();

    //  run the calctotal function each time the values change
    for (let i = 0; i < orderForm.elements.length; i++)
        orderForm.elements[i].onchange = calcTotal;
    
    calcTotal();

    // gets all the selected values from form and adds them to display as total 
    function calcTotal(){
        cheeseburgersCount = cheeseburger[cheeseburger.selectedIndex].value;
        dbcheeseburgersCount = dbcheeseburger[dbcheeseburger.selectedIndex].value;
        chTenderCount = dbcheeseburger[chTender.selectedIndex].value;
        kMealCount = dbcheeseburger[kMeal.selectedIndex].value;
    
        total = (cheeseburgersCount * 4) + (dbcheeseburgersCount * 5) + (chTenderCount * 5) + (kMealCount * 4);
    
        orderForm.elements.total.value = total.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }

    document.getElementById("submitButton").onclick = function() {
        // On submitButton click send the selected values to session storage.
        sessionStorage.setItem("cheeseburger", cheeseburgersCount);
        sessionStorage.setItem("dbCheeseburger", dbcheeseburgersCount);
        sessionStorage.setItem("chTender", chTenderCount);
        sessionStorage.setItem("kMeal", kMealCount);
        sessionStorage.setItem("total", total);

        location.href = "orderSummary.html";
    }
})

