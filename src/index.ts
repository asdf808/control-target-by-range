const range = document.getElementById("range") as HTMLInputElement;
const box = document.querySelector(".box") as HTMLDivElement;

const maxTranslateX = range.clientWidth - box.clientWidth;

range.value = "0";
setBoxStyle(0);

function setBoxStyle(value: number) {
  const percent = value / 100;
  box.style.cssText = `
    border-radius: ${value / 2}%;
    transform: translateX(${maxTranslateX * percent}px);
    background: rgb(${255 * percent}, 255, 0)
  `;
}

range.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  setBoxStyle(target.valueAsNumber);
});
