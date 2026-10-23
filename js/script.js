const rocket = document.querySelector('#rocket');
const rocketIcon = document.querySelector('#rocket-icon');
const moveButton = document.querySelector('#move-button');
const colorButton = document.querySelector('#color-button');
const jumpButton = document.querySelector('#jump-button');
const resetButton = document.querySelector('#reset-button');
const status = document.querySelector('#status');

// // ЗАДАНИЕ 1. Кнопка «Переместить»
moveButton.addEventListener('click', () => {
    rocket.classList.toggle('is-moved');
    if (rocket.classList.contains('is-moved')) {
        status.textContent = 'Ракета перемещена';
    } else {
        status.textContent = 'Ракета вернулась на место';
    }
});

// // ЗАДАНИЕ 2. Кнопка «Сменить цвет»
colorButton.addEventListener('click', () => {
    rocket.classList.toggle('is-colored');
    if (rocket.classList.contains('is-colored')) {
        status.textContent = 'Цвет изменен';
    } else {
        status.textContent = 'Цвет возвращен';
    }
});

// // ЗАДАНИЕ 3. Кнопка «Подпрыгнуть»
jumpButton.addEventListener('click', () => {
    rocketIcon.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-45px)' },
        { transform: 'translateY(0)' }
    ], {
        duration: 600,
        easing: 'ease-in-out'
    });

    status.textContent = 'Ракета подпрыгнула';
}); // <-- Скобки закрыты корректно здесь

// // ЗАДАНИЕ 4. Кнопка «Сбросить»
resetButton.addEventListener('click', () => {
    rocket.classList.remove('is-moved', 'is-colored');
    status.textContent = 'Настройки сброшены.';
});
