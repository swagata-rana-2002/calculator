var concatinate = "";
            var operation = "";
            var lastOperator = "";
    
            function updateDisplay() {
                document.getElementById("display").innerHTML = concatinate || "0";
            }
    
            function displayClear() {
                concatinate = "";
                operation = "";
                lastOperator = "";
                updateDisplay();
            }
    
            function del() {
                if (concatinate.length > 0) {
                    concatinate = concatinate.slice(0, -1);
                }
                updateDisplay();
            }
    
            function appendNumber(number) {
                concatinate += number;
                updateDisplay();
            }
    
            function appendDot() {
                if (!concatinate.includes('.')) {
                    concatinate += '.';
                    updateDisplay();
                }
            }
    
            function setOperation(op) {
                if (concatinate === "") return; // Prevent setting an operation with empty input
                if (lastOperator) {
                    calculateResult(); // Compute the previous operation first
                }
                operation = op;
                lastOperator = op;
                concatinate += " " + op + " ";
                updateDisplay();
            }
    
            function toggleNegate() {
                if (concatinate.length > 0) {
                    if (concatinate.charAt(0) === '-') {
                        concatinate = concatinate.substring(1);
                    } else {
                        concatinate = '-' + concatinate;
                    }
                    updateDisplay();
                }
            }
    
            function calculateResult() {
                try {
                    var result = eval(concatinate.replace(/x/g, '*').replace(/÷/g, '/')); // Using eval for simplicity
                    concatinate = result.toString();
                    updateDisplay();
                    lastOperator = "";
                } catch (error) {
                    concatinate = "Error";
                    updateDisplay();
                    lastOperator = "";
                }
            }
            