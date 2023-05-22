function Greeting() {
  let names = {};
  let message = "";
  let greetCount = 0;

  function addName(name, language) {
    const lowercaseName = name.toLowerCase();
    if (!names.hasOwnProperty(lowercaseName)) {
      names[lowercaseName] = language;
      greetCount++;
      clearRadioButtons();
    }
  }

  function getName(name, language) {
    if (language === "english") {
      return "Hello, " + name;
    } else if (language === "spanish") {
      return "Hola, " + name;
    } else if (language === "isizulu") {
      return "Sawubona, " + name;
    }

    return "Greetings, " + name;
  }

  function getMessage() {
    if (message === "") {
      return "Please enter a name and select a language";
    }
    return "";
  }

  function getGreetCount() {
    return greetCount;
  }

  function resetGreetCount() {
    names = {};
    greetCount = 0;
    clearRadioButtons();
    localStorage.removeItem("greetCount");
  }

  function clearRadioButtons() {
    const radioButtons = document.querySelectorAll('.radio-button');
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  }

  return {
    addName,
    getName,
    getMessage,
    getGreetCount,
    resetGreetCount,
    clearRadioButtons,

  };
}
