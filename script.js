const changingWord = document.querySelector(".changing-word");

if (changingWord) {
  const words = changingWord.dataset.words.split(",");
  let activeWordIndex = 0;

  window.setInterval(() => {
    changingWord.classList.add("is-changing");

    window.setTimeout(() => {
      activeWordIndex = (activeWordIndex + 1) % words.length;
      changingWord.textContent = words[activeWordIndex];
      changingWord.classList.remove("is-changing");
    }, 180);
  }, 1800);
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
