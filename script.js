
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!display.value.trim()) return;

        if (!/^[0-9+\-*/%.()\s]+$/.test(display.value)) {
            throw new Error("Invalid expression");
        }

        const result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = Number(result.toPrecision(12)).toString();

    } catch {
        display.value = "Error";
    }
}
