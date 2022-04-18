$(document).ready(function () {
    //var currentValue = 10;
    var currentOperation = "";
    var operators = ["+","-","/","*"];
    var equals = $("#equals").attr("value");

    $("#clear").click(function(){
        $("#result").text(0);
        currentOperation = "";
        $("#operation").text(currentOperation);
    })

    $(".operator").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals){
            currentOperation = currentOperation.split(equals).slice(-1);
        };
        /*
        if (currentOperation == ""){
            currentOperation = 0;
        } */
        let operator = $(this).attr("value");
        let lastEl = currentOperation[currentOperation.length - 1];
        let secondToLastEl = currentOperation[currentOperation.length - 2];
        let lastIsOperator = operators.includes(lastEl);
        let secondToLastIsOperator = operators.includes(secondToLastEl);
        if (lastIsOperator){
            if (secondToLastIsOperator){
                if (operator != '-'){
                    currentOperation = currentOperation.slice(0,- 2) + operator; 
                }
            } else if (operator == '-') {
                currentOperation += operator;
            } else {
                currentOperation = currentOperation.slice(0,- 1) + operator;
            }
        } else{
            currentOperation += operator;
        }
        $("#operation").text(currentOperation);
    })

    $(".number").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals){
            currentOperation = "";
        };

        currentOperation += $(this).attr("value");
        $("#operation").text(currentOperation);
    })

    $("#decimal").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals){
            currentOperation = "";
        };
        
        let operator = $(this).attr("value");
        let lastGroup = currentOperation.split(/\+|\-|\*|\//).slice(-1);
        let lastContainsDot = lastGroup[0].includes(operator);
        if (lastContainsDot){
            return;
        }

        let lastEl = currentOperation[currentOperation.length - 1];
        let lastIsOperator = operators.includes(lastEl);
        let lastIsEmpty = (lastEl == undefined);
        if (lastIsOperator || lastIsEmpty){
            currentOperation += ("0" + operator);
        } else {
            currentOperation += operator;
        }
        $("#operation").text(currentOperation);
    })

    $("#equals").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals){
            return;
        };

        let lastEl = currentOperation[currentOperation.length - 1];
        let secondToLastEl = currentOperation[currentOperation.length - 2];
        let lastIsOperator = operators.includes(lastEl);
        let secondToLastIsOperator = operators.includes(secondToLastEl);
        if (lastIsOperator && secondToLastIsOperator){
            currentOperation = currentOperation.slice(0,- 2) + equals + "RESULT";
        } else if (lastIsOperator){
            currentOperation = currentOperation.slice(0,- 1) + equals + "RESULT";
        } else {
            currentOperation += (equals + "RESULT");
        }

        $("#operation").text(currentOperation);
    })
});