<html>
<head>
<script>
function add_field()
{
  var total_text=document.getElementsByClassName("input_text");
  total_text = total_text.length + 1;

  document.getElementById("field_div").innerHTML=document.getElementById("field_div").innerHTML+
  "<p id='input_text"+total_text+"_wrapper'><input type='text' class='input_text' id='input_text" + total_text + "' placeholder='Enter Text'><input type='button' value='Remove' onclick=remove_field('input_text" + total_text + "');></p>";
}

function remove_field(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
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
