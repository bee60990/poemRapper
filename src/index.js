function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello World",
    autoStart: true,
    delay: 4,
    cursor: " ",
  });
}

let poemElememet = document.querySelector("#dialog");
poemElememet.addEventListener("submit", generatePoem);
