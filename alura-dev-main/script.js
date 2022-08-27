const colorSelector = document.querySelector('input[type="color"]');
const backgroundCode = document.querySelector('.background-code');
let inputColor;

colorSelector.addEventListener('change', function(e) {
    inputColor = e.target.value;
    backgroundCode.style.background = inputColor;
})

