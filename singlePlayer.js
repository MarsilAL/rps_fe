import { callSingleEndpoint } from "./callSingleEndpoint";

/// Call Endpoint

function handelSubmitSingle(event) {

  const PlayerAnswer = $("#playerAnswer").val();
  
  callSingleEndpoint(PlayerAnswer);
}


$(document).ready(function(){

    $("#SubmitBtn").click(handelSubmitSingle);

});