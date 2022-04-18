$(document).ready(function () {
    //var currentValue = 10;
    var currentOperation = "";
    var operators = ["+","-","/","*"];

    $("#clear").click(function(){
        $("#result").text(0);
        currentOperation = "";
        $("#operation").text(currentOperation);
    })

    $(".operator").click(function(){
        if (currentOperation == ""){
            currentOperation = 0;
        }
        let operator = $(this).attr("value");
        let lastEl = currentOperation[currentOperation.length - 1];
        let secondToLastEl = currentOperation[currentOperation.length - 2];
        let lastIsOperator = operators.includes(lastEl);
        let secondToLastIsOperator = operators.includes(secondToLastEl);
        if (lastIsOperator){
            if (secondToLastIsOperator){
                if (operator != '-'){
                    currentOperation = currentOperation.slice(0,- 2) + $(this).attr("value"); 
                }
            } else if (operator == '-') {
                currentOperation += $(this).attr("value");
            } else {
                currentOperation = currentOperation.slice(0,- 1) + $(this).attr("value");
            }
        } else{
            currentOperation += $(this).attr("value");
        }
        $("#operation").text(currentOperation);
    })

    $(".number").click(function(){
        currentOperation += $(this).attr("value");
        $("#operation").text(currentOperation);
    })

    $("#equals").click(function(){
        let lastEl = currentOperation[currentOperation.length - 1];
        let secondToLastEl = currentOperation[currentOperation.length - 2];
        let lastIsOperator = operators.includes(lastEl);
        let secondToLastIsOperator = operators.includes(secondToLastEl);
        if (lastIsOperator && secondToLastIsOperator){
            currentOperation = currentOperation.slice(0,- 2) + $(this).attr("value");
        } else if (lastIsOperator){
            currentOperation = currentOperation.slice(0,- 1) + $(this).attr("value");
        }
        /*
        if (replaceLast){
            currentOperation = currentOperation.slice(0, currentOperation.length - 1) + $(this).attr("value");
        } */
        $("#operation").text(currentOperation);
    })
});