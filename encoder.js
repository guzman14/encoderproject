$("#inputArea").keydown(function(e) {
  if(e.keyCode == 13) {
    $("#textArea").append(document.getElementById('inputText').value += " ");
    document.getElementById('inputText').value = "";
}
});
var letters = {
66:"b"
};

  $("#inputArea").keydown(function(e) {
      var inputText = document.getElementById("inputText").value;
   document.getElementById("textArea").innerHTML = inputText;
});

  else if ($("input:checked").val() == "caesar") {

    var ex = document.getElementById('inputText').value;

  var y = ex.length + 1;

  var minus = x - 1;

  for(var x = 0; x < y; x++) {
    var minus = x - 1;
    var z = ex.substring(minus, x);
    console.log(z);
    $("#textArea").append(caeserConvert[z]);
    document.getElementById('inputText').value = "";

  }
  $("#textArea").append(" ");
   }
