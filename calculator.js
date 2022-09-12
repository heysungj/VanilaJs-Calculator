let equal = document.querySelector("#equal");
let answerHtml = document.querySelector("h1");
let form = document.querySelector("form");
let answer = 0;
let temp = "";

form.addEventListener("click", (event) => {
  event.preventDefault();
  let value = event.target.id;
  if (value !== "equal") {
    answerHtml.innerHTML = value;
    temp = temp + value;
  }

  //   console.log(temp);
});

// equal to

equal.addEventListener("click", () => {
  answerHtml.innerHTML = eval(temp);
  temp = "";
});
