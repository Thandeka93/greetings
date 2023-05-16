function greetingWidget() {
  const input = document.querySelector(".input");
  const greetBtn = document.querySelector(".greetBtn");
  const greetingElement = document.querySelector(".greetings");
  const greetCountElement = document.querySelector(".countGreet");

  let greetCount = localStorage.getItem("greetCount") || 0;
  greetCountElement.innerHTML = greetCount;

  const greetedNames = {};
  function handleGreetButton() {
    const name = input.value.trim();

    if (name !== "") {
      const selectedLanguage = document.querySelector("input[name='language']:checked").value;
      const greeting = getGreeting(selectedLanguage, name);
      greetingElement.innerHTML = greeting;
      input.value = "";

      if (!greetedNames.hasOwnProperty(name)) {
        greetCount++;
        greetCountElement.innerHTML = greetCount;
        greetedNames[name] = true;
      }

      localStorage.setItem("greetCount", greetCount);
    }
  }

  greetBtn.addEventListener("click", handleGreetButton);

  window.addEventListener("load", function () {

    greetCount = localStorage.getItem("greetCount") || 0;
    greetCountElement.innerHTML = greetCount;
  });

  function getGreeting(language, name) {
    switch (language) {
      case "english":
        return 'Hello, ' + name + '!';

      case "spanish":
        return '¡Hola,' + name + '!';

      case "isizulu":
        return 'Sawubona,' + name + '!';

      default:
        return 'Hello,' + name + '!';
    }
  }

  function resetGreetCount() {
    greetCount = 0;
    greetCountElement.innerHTML = greetCount;
    localStorage.setItem("greetCount", greetCount);
    greetedNames = {};
  }

  const reset = document.querySelector(".reset");
  reset.addEventListener("click", resetGreetCount);
}

greetingWidget();

