/**
 * Created by sophia on 10/19/16.
 */
var input = '',
    answer = '',
    newCalc = false;
$(document).ready(function() {
    $(".numbers").on("click", function() {
        var string = $(this).find('span').attr("id");
        if (parseInt(string, 10) == string || string == "%" || string == "/" || string == "*" || string == "-" || string == "+" || string == ".") {
            /*input += string;
             $(".textbox").val(input);*/
            if (newCalc === false) {
                input += string;
                $(".textbox").val(input);
            } else {
                input = string;
                $(".textbox").val(input);
                newCalc = false;
            }
        } else if (string === "CE") {
            input = input.slice(0, -1);
            $(".textbox").val(input);
        } else if (string === "AC") {
            input = "";
            $(".textbox").val(input);
        } else if (string === "=" || string === "Ans") {
            answer = eval(input);
            $(".textbox").val(answer);
            newCalc = true;
        }
    });
});