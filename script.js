const container = document.getElementById("container");
const rangeSliderValue = document.getElementById("range-slider");
const rangeSliderTextOutput = document.getElementById("range-value");

// initialize grid
makeGrid(16, 16);

// change grid size
rangeSliderValue.oninput = function() {

    const sliderValue = this.value;
    rangeSliderTextOutput.innerHTML = sliderValue + 'x' + sliderValue;

    makeGrid(sliderValue, sliderValue);
};

// create grid
function makeGrid(rows, cols) {
    container.innerHTML = "";

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

// change color
