/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/


const menuItems = document.getElementsByClassName("menuItem");

console.log(menuItems.length);

for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("change", calcTotal);
}

function calcTotal() {
      console.log("runnn");
      let orderTotal = 0;

      for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].checked) {
                  orderTotal += parseFloat(menuItems[i].value);
            }
      }

      document.getElementById("billTotal").textContent = `$${orderTotal.toFixed(2)}`;
}