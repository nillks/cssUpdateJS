let input = document.querySelectorAll("input");
let inputArr = Array.from(input);


function changeInput() {
  switch (this.name) {
    case "color":
      document.documentElement.style.setProperty("--var-color", this.value);
      break;
    case "blur":
      document.documentElement.style.setProperty("--var-blur", `blur(${this.value}px)`);
      break;
    case "padding":
      document.documentElement.style.setProperty("--var-padding", this.value + 'px');
      break;
    default:
      break;
  }
}


inputArr.map((item) => item.addEventListener("change", changeInput));
