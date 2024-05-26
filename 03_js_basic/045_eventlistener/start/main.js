const h1Element = document.querySelector("h1");

const buttonElement = document.querySelector("button");

const helloFn = (e) => {
  console.log(e.target.textContent);
  console.log("hello");
}

buttonElement.addEventListener("click", helloFn)


// logとlogの違いを理解する必要がある