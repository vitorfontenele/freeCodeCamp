$(document).ready(function () {
    var currentValue = 10;
    var currentOperation = "";
    var operators = ["+","-","/","*"];

    $("#clear").click(function(){
        $("#result").text(0);
        currentOperation = "";
    })

    $(".operator").click(function(){
        let lastElOfCurrOp = currentOperation[currentOperation.length - 1];
        let disallowOp = operators.filter(item => item == lastElOfCurrOp).length;
        if (!Boolean(disallowOp)){
            currentOperation += $(this).attr("value");
        }
        $("#operation").text(currentOperation);
    })

    $(".number").click(function(){
        currentOperation += $(this).attr("value");
        $("#operation").text(currentOperation);
    })
});