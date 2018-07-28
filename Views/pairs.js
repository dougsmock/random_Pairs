<!DOCTYPE html>
<body>
<form method="post" action="add names">
<button id="removeName" value="remove">Remove</button>
<button id="randomize" value="randomize">Randomize</button>
</form>

<button onclick="addName()">Add name</button>

<script>
var namesArray = [];

function addName() {
    var btn = document.createElement("input");
   btn.setAttribute("type", "text");
   btn.setAttribute("id", "textbox");
   btn.setAttribute("placeholder", "Name");
    document.body.appendChild(btn);
    namesArray.push("");
    return namesArray;
 }

  document.getElementById("textbox").onkeyup = subName(namesArray);


  function subName(namesArray) {
  console.log("You called it.");
  namesArray.splice(0, 1, "Doug Smock")
}






</script>




</body>
</html>


// end of copy here

// code for REMOVE?
/* <script>
function hideOptionPhoto(){


var element = document.getElementById("Photo1");
var child=document.getElementById("Photo");
element.removeChild(child);

}
window.onload = function() {
  hideOptionPhoto();
};
</script> */


// fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits


// Hit the randomize button, shuffle array into twos, output result.




/*
function addTextBox()
{
  var total_text = document.getElementsById("input_text").innerHTML;
  total_text = total_text.length + 1;

  document.getElementById("field_div").innerHTML = document.getElementById("field_div").innerHTML +
  "<p id='input_text" + total_text + "_wrapper'><input type='text' class='input_text' id='input_text" + total_text + "' placeholder='Enter Name'><input type='button' value='Remove' onclick=remove_field('input_text" + total_text + "');></p>";
}
*/







// <button class="remove_box" value="Remove">Remove</button>













/*
<script>

</script>





function enterNames()
{

}






// https://www.w3schools.com/js/js_events_examples.asp
  //names.push
}



function removeField(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
  names.pop; // remove name from end of array????
}
</script>

</head>
<body>
<div id="wrapper">
<div id="field_div">
<input type="button" value="Add TextBox" onclick="add_field();">
</div>
</div>
</body>
</html>

function shuffleNames() {





}




/* is this javascript or something else?
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
} */
