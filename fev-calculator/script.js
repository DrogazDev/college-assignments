$(document).ready(function() {
    var firstValue = null;
    var operator = null; 
    $(".button").click(function() {
        var button = $(this).attr("id");
        var screen = $('.display');
        var input = $('.hidden-display');
        
        if (!isNaN(parseInt(button))) {
            input.val(input.val() + button);
            if (operator != null) {
                screen.val(firstValue + " " + operator + " " + input.val());
                secondValue = parseFloat(input.val());
            } else {
                screen.val(input.val());
            }
        } else if (button == "+" || button == "-" || button == "*" || button == "/") {
            console.log(button);
            screen.val(input.val() + " " + button + " ");
            operator = button;
            firstValue = parseFloat(input.val());
            input.val("");    
        } else if (button == "equals") {
            if (firstValue != null) {
                var secondValue = parseFloat(input.val());
                if (operator == "+") {
                    input.val(firstValue + secondValue);
                    screen.val(firstValue + " + " + secondValue + " = " + input.val());
                } else if (operator == "-") {
                    input.val(firstValue - secondValue);
                    screen.val(firstValue + " - " + secondValue + " = " + input.val());
                } else if (operator == "*") {
                    input.val(firstValue * secondValue);
                    screen.val(firstValue + " * " + secondValue + " = " + input.val());
                } else if (operator == "/") {
                    input.val(firstValue / secondValue);
                    screen.val(firstValue + " / " + secondValue + " = " + input.val());
                }

                console.log(input.val)
            }
        } else if (button == "clear") {
            console.log("clear")
            input.val("");
            firstValue = null;
            operator = null;
        } else if (button == "decimal") {
            input.val(input.val() + ".");
            if (operator != null) {
                screen.val(firstValue + " " + operator + " " + input.val());
            } else {
                screen.val(input.val());
            }
        }
    });
});
