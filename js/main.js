// Создаем объект для управления CSS переменными
const cssVariablesManager = {
  set: function (name, value) {
    document.documentElement.style.setProperty(`--var-${name}`, value);
  },
};

// Функция для изменения CSS переменных
function changeInput() {
  // Проверяем, что объект this определен и имеет свойства name и value
  if (this && this.name && this.value) {
    switch (this.name) {
      case "color":
        cssVariablesManager.set("color", this.value);
        break;
      case "blur":
        // Проверяем, что введенное значение является числом
        if (!isNaN(parseFloat(this.value))) {
          cssVariablesManager.set("blur", `blur(${this.value}px)`);
        }
        break;
      case "padding":
        // Проверяем, что введенное значение является числом
        if (!isNaN(parseFloat(this.value))) {
          cssVariablesManager.set("padding", `${this.value}px`);
        }
        break;
      default:
        break;
    }
  }
}

// Добавляем один обработчик событий на общего родителя всех элементов ввода
document.addEventListener("change", function (event) {
  if (event.target.tagName === "INPUT") {
    changeInput.call(event.target);
  }
});
