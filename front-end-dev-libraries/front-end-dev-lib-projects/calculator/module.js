$(document).ready(function () {
    var currentValue = "";
    var currentOperation = "";
    var operators = ["+","-","/","*"];
    var equals = $("#equals").attr("value");

    $("#clear").click(function(){
        currentOperation = "";
        currentValue = "";
        $("#operation").text(currentOperation);
        $("#display").text("0");
    })

    $(".operator").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals){
            currentOperation = currentOperation.split(equals).slice(-1);
        };

        if (currentOperation === ""){
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
        currentValue = operator;
        $("#display").text(currentValue);
    })

    $(".number").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals){
            currentOperation = "";
        };

        let number = $(this).attr("value");
        let lastGroup = currentOperation.split(/\+|\-|\*|\//).slice(-1);
        if (number == 0 && lastGroup[0] === '0'){
            return;
        } else if (lastGroup[0] === '0'){
            currentOperation = currentOperation.slice(0, -1) + number;
            currentValue = number;
        } else {
            currentOperation += number;
            let valueHasOperator = operators.includes(currentValue);
            if (valueHasOperator){
                currentValue = number;
            } else {
                currentValue += number;
            }
        }
        
        $("#operation").text(currentOperation);
        $("#display").text(currentValue);
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
            currentValue = "0" + operator;
        } else {
            currentOperation += operator;
            currentValue += operator;
        }
        $("#operation").text(currentOperation);
        $("#display").text(currentValue);
    })

    $("#equals").click(function(){
        let containsEquals = currentOperation.includes(equals);
        if (containsEquals || (currentOperation === "")){
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
        currentValue = "RESULT";
        $("#operation").text(currentOperation);
        $("#display").text(currentValue);
        currentValue = "";
    })
});