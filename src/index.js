function generatePoem(event) {
  event.preventDefault();

  let apiKey = "9530ba64d5fta9c45b62cdbab1131eoe";
  let context = "Generate a short, nice poem";
  let prompt = document.querySelector("#instructions").value;
  let apiCall = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiCall).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: " ",
  });
}

let poemElememet = document.querySelector("#dialog");
poemElememet.addEventListener("submit", generatePoem);
