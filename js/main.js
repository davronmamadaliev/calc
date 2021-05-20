$(document).ready(function (){
   $(".value").click(function (){
      $("#display").val($("#display").val() + $(this).val())
   });
   $(".clear").click(function (){
      $("#display").val(" ")
   });
   $(".result").click(function (){
       $("#display").val(eval($("#display").val()))
   });
});