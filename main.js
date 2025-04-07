// Task 1
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

function resizeImage() {
    const value = slider.value;
    image.style.width = `${value * 3}px`;

    const debouncedResize = debounce(resizeImage, 100);

    slider.addEventListener('input', debouncedResize);
}



// Task 2
const box = document.getElementById('box');

function moveBox(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    box.style.left = `${mouseX}px`;
    box.style.top = `${mouseY}px`;
}

const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener('mousemove', debouncedMove);
