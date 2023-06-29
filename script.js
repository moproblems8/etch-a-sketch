const container = document.getElementById("container");
const rangeSliderValue = document.getElementById("range-slider");
const rangeSliderTextOutput = document.getElementById("range-value");
const resetButton = document.getElementById("reset-button");
var gridItems;
var sliderValue;

// initialize grid
makeGrid(16, 16);

// change grid size
rangeSliderValue.oninput = function() {

    sliderValue = this.value;
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

    gridItems = document.querySelectorAll('.grid-item');
    changeColor(gridItems);
};

// change color
function changeColor(gridItems) {
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    });
}

// reset grid
resetButton.addEventListener('click', () => {
    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    });
});