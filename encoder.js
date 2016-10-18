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
