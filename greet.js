function greetingWidget() {
  const input = document.querySelector(".input");
  const greetBtn = document.querySelector(".greetBtn");
  const greetingElement = document.querySelector(".greetings");
  const greetCountElement = document.querySelector(".countGreet");
  const errorElement = document.querySelector(".error-message");
  const languageSelection = document.querySelector(".languageSelection");

  let greetCount = localStorage.getItem("greetCount") || 0;
  greetCountElement.innerHTML = greetCount;

  const greetedNames = Greeting();

  function handleGreetButton() {
    const name = input.value.trim();
    const selectedLanguage = document.querySelector("input[name='language']:checked");

    if (name !== "" && selectedLanguage !== null) {
      errorElement.innerHTML = "";

      const selectedLanguageValue = selectedLanguage.value.toLowerCase();
      const greeting = greetedNames.getName(name, selectedLanguageValue);
      greetingElement.innerHTML = greeting;
      greetingElement.style.fontSize = "30px";
      input.value = "";

      greetedNames.addName(name, selectedLanguageValue);

      greetCount = greetedNames.getGreetCount();
      greetCountElement.innerHTML = greetCount;
      localStorage.setItem("greetCount", greetCount);

      selectedLanguage.checked = false;
    } else {
      if (name === "") {
        errorElement.innerHTML="Please enter a name and select a language"
        setTimeout(function () {errorElement.innerHTML = ""}, 2000);
      }
    }
  }

  greetBtn.addEventListener("click", handleGreetButton);

  function resetGreetCounter() {
    greetedNames.resetGreetCount();
    greetCount = greetedNames.getGreetCount();
    greetCountElement.innerHTML = greetCount;
    localStorage.setItem("greetCount", greetCount);
  }

  const reset = document.querySelector(".reset");
  reset.addEventListener("click", resetGreetCounter);

  reset.addEventListener("click", function () {
    localStorage.removeItem("greetCount");
  });

  window.addEventListener("load", function () {
    greetCount = localStorage.getItem("greetCount") || 0;
    greetCountElement.innerHTML = greetCount;
  });
}

greetingWidget();













