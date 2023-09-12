"use strict";

let items = document.getElementById("items");

// Append a table with the ordered items to the document.
let table = document.createElement("table");
table.id = "summaryTable";
items.appendChild(table);

tableEntry("Cheeseburger", sessionStorage.getItem("cheeseburger"));
tableEntry("Double Cheeseburger", sessionStorage.getItem("dbcheeseburger"));
tableEntry("Chicken Tenders", sessionStorage.getItem("chTender"));
tableEntry("Kid's Meal", sessionStorage.getItem("kMeal"));
totalEntry();

// Inserts the total into the table
function totalEntry() {
    let tr = document.createElement("tr");

    let th = document.createElement("th");
    th.textContent = "Total";
    tr.appendChild(th);

    let td = document.createElement("td");
    let total = sessionStorage.getItem("total")
    td.textContent = "$" + total + ".00";
    tr.appendChild(td);

    table.appendChild(tr);
}

// If an item is ordered the value will be appended to table
function tableEntry(key, val){
    if (val > 0){
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);

        let td = document.createElement("td");
        td.textContent = val;
        tr.appendChild(td);

        table.appendChild(tr);
    }
}
