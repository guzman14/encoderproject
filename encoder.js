$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

$("#inputArea").keydown(function(e) {
  if(e.keyCode == 13) {
  if ($("input:checked").val() == "echo") {

        $("#textArea").append(document.getElementById('inputText').value += " ");
        document.getElementById('inputText').value = "";

    }

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

  else if ($("input:checked").val() == "heiro") {

     var ex = document.getElementById('inputText').value;

     var y = ex.length + 1;

     var minus = x - 1;

     for(var x = 0; x < y; x++) {
       var minus = x - 1;
       var q = ex.substring(minus, x);
       var z = q.toLowerCase();
       $("#textArea").append(heiroConvert[z]);
 document.getElementById('inputText').value = "";
     }
     $("#textArea").append(" ");
     }
     };
   });
   $("#translationInputArea").keydown(function(e) {
     if(e.keyCode == 13) {
       var ex = document.getElementById('translationInputText').value;

       var y = ex.length + 1;

       var minus = x - 1;
       for(var x = 0; x < y; x++) {
         var minus = x - 1;
         var q = ex.substring(minus, x);
