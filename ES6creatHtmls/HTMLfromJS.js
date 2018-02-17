
  //experiments stuffs
 (function(){
     "use strict";
     var section = document.querySelector(section);
     
     document.body.onload = addElement;

     function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var  Content = `<div style="color:red">hello</div>`
  //document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.innerHTML=(content);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
} 
      
 })()
