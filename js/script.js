"use strict";

// Элементы уже найдены. Их НЕ нужно искать повторно.
const rocket = document.querySelector("#rocket");
const rocketIcon = document.querySelector("#rocket-icon");
const moveButton = document.querySelector("#move-button");
const colorButton = document.querySelector("#color-button");
const jumpButton = document.querySelector("#jump-button");
const resetButton = document.querySelector("#reset-button");
const status = document.querySelector(".status");
// ЗАДАНИЕ 1. Кнопка «Переместить».
moveButton.addEventListener("click", () => {
  rocket.classList.toggle("is-moved");
  status.textContent = "ракета передвинулась";
  // TODO 1: переключите у rocket класс "is-moved" методом classList.toggle().
  // TODO 2: измените текст status через textContent.
});

// ЗАДАНИЕ 2. Кнопка «Сменить цвет».
colorButton.addEventListener("click", () => {
  rocket.classList.toggle("is-colored");
  status.textContent = "ракета покрашена";
  // TODO 3: переключите у rocket класс "is-colored".
  // TODO 4: измените текст status.
});

// ЗАДАНИЕ 3. Кнопка «Подпрыгнуть».
jumpButton.addEventListener("click", () => {
  rocketIcon.animate(
    [
      { transform: "translateY(0)", opacity: 1},
      { transform: "translateY(-70px)", opacity: 0.5}, 
      { transform: "translateY(0)", opacity: 1 },
    ],
    { 
      duration: 900, 
      easing: "ease-in-out" 
    }
  );
  status.textContent= "ракета подпрыгнула";
  // TODO 5: вызовите rocketIcon.animate() с тремя кадрами:
  //   { transform: "translateY(0)" }
  //   { transform: "translateY(-45px)" }
  //   { transform: "translateY(0)" }
  // Параметры: { duration: 600, easing: "ease-in-out" }.
  // TODO 6: измените текст status.
});

// ЗАДАНИЕ 4. Кнопка «Сбросить».
resetButton.addEventListener("click", () => {
  rocket.classList.remove("is-moved", "is-colored");
  status.textcontent = "Настройки сброшены"
  // TODO 7: удалите у rocket оба класса через classList.remove().
  // TODO 8: измените текст status на "Настройки сброшены.".
});
