let colorSeq = {};

(function () {
  const startButton = document.querySelector(".start-button");
  fetch("./seq_collections.json")
    .then((res) => res.json())
    .then((res) => {
      colorSeq = res;
      const length = colorsLengthInput.value;
      const sequence = colorSeq[length];
      const colors = sequence[Math.floor(Math.random() * sequence.length)];
      colorsInput.value = colors.replace(/ /g, "•");
      startButton.classList.remove("disabled");
    });
  const colorsLengthInput = document.getElementById("colors-length");
  const colorsInput = document.getElementById("colors");
  colorsLengthInput.addEventListener("change", (e) => {
    const length = e.target.value;
    const sequence = colorSeq[length];
    const colors = sequence[Math.floor(Math.random() * sequence.length)];
    colorsInput.value = colors.replace(/ /g, "•");
  });

  const randomColorButton = document.getElementById("random-color");
  randomColorButton.addEventListener("click", () => {
    const length = colorsLengthInput.value;
    const sequence = colorSeq[length];
    const colors = sequence[Math.floor(Math.random() * sequence.length)];
    colorsInput.value = colors.replace(/ /g, "•");
  });
})();

function randomColor() {
  const colorsLengthInput = document.getElementById("colors-length");
  const colorsInput = document.getElementById("colors");
  const length = colorsLengthInput.value;
  const sequence = colorSeq[length];
  const colors = sequence[Math.floor(Math.random() * sequence.length)];
  colorsInput.value = colors.replace(/ /g, "•");
}
