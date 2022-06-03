/* Variables*/
const buttonOperations = document.querySelectorAll(".buttonOperation");
const buttonClear = document.querySelector(".buttonClear");
let expression = "";F
    } else if (e.target.value !== "=") {
      expression += e.target.value;
      resultElt.textContent = expression.replace(".", ",");
      console.log(expression.replace("0",""));
    }
  });
});
