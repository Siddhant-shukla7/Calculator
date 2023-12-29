document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.toString().slice(0, -1);
    }

    function appendValue(value) {
        display.value += value;
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
    
    
});
