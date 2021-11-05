var list = document.getElementsByTagName("li");

// ADD NEW ITEM TO END OF LIST
var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));
list[3].parentNode.insertBefore(li, list[3].nextSibling);


// ADD NEW ITEM START OF LIST
li = document.createElement("li");
li.appendChild(document.createTextNode("kale"));
list[1].parentNode.insertBefore(li, list[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.getElementsByTagName("li");
for(i = 0; i < list.length; i++){
    list[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var length = list.length;
var groceries = document.getElementsByTagName("h2");
groceries[0].innerText += "   " + length; 