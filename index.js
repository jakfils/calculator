/* Variables*/
const buttonOperations = document.querySelectorAll(".buttonOperation");
const buttonClear = document.querySelector(".buttonClear");
let expression = "";
let res = 0;
const resultElt = document.getElementById("resultElt");

/* button clear */
buttonClear.addEventListener("click", (e) => {
  resultElt.textContent = "0";
  expression = "";
});

/*Operations*/
buttonOperations.forEach((buttonOperation) => {
  buttonOperation.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      res = eval(expression);
      res = String(res);
      resultElt.textContent = res.replace(".", ",");
      if (expression !== 0) {
        expression = res;
      } else {
        expression = 0;
      }
    } else if (e.target.value !== "=") {
      expression += e.target.value;
      resultElt.textContent = expression.replace(".", ",");
    }
  });
});
