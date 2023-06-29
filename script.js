const container = document.getElementById("container");
const rangeSliderValue = document.getElementById("range-slider");
const rangeSliderTextOutput = document.getElementById("range-value");


function makeGrid(rows, cols) {
    container.innerHTML = "";

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(8, 8);

// range slide

rangeSliderValue.oninput = function() {

    const sliderValue = this.value;
    rangeSliderTextOutput.innerHTML = sliderValue + 'x' + sliderValue;

    makeGrid(sliderValue, sliderValue);
};