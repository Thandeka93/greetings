function Greeting() {
  let names = {};
  let message = "";
  let greetCount = 0;

  function addName(name, language) {
    const lowercaseName = name.toLowerCase(); // Convert name to lowercase
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
    if (Object.keys(names).length === 0) {
      message = "Please enter a name";
    } else {
      message = "Please enter a name and select a language";
    }
    return message;
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
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
      button.checked = false;
    });
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


