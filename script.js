var products = [
  {name: "etro", price: 19.99, image: "img.jpg"},
  {name: "plaid", price: 16.99, image: "img.jpg"},
  {name: "wool", price: 22.99, image: "img.jpg"}
]

function buildListings(){
  var cont = document.getElementById("target");
  cont.setAttribute("class", "parent");
  
  for(var i=0; i<products.length; i++){
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var t = document.createTextNode(products[i].name);
    var p = document.createElement("p");
    var t2 = document.createTextNode(products[i].price);
    var img = document.createElement("img");
    img.setAttribute("src", products[i].image);
    img.setAttribute("alt", products[i].name);
    
    h3.appendChild(t);
    div.appendChild(h3);
    p.appendChild(t2);
    div.appendChild(p);
    div.appendChild(img);
    cont.appendChild(div);
  }
}

window.onload = function() {
  buildListings();
//  var prac = document.getElementById("practice");
//  
//  var p = document.createElement("p");
//  var t = document.createTextNode("hello there!!");
//  
//  p.appendChild(t);
//  prac.appendChild(p);
  
}