function buttonFunction(event) {
  event.preventDefault();

  const box = document.getElementById("box");
  box.classList.add("animate-box");

  setTimeout(() => {
    box.classList.remove("animate-box");
  }, 800);
}

document.getElementById("animateButton").addEventListener("click", buttonFunction);