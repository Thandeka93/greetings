function Greeting() {
  let names = {};
  let message = "";
  let greetCount = 0;

  function addName(name, language) {
    if (!names.hasOwnProperty(name)) {
      names[name] = language;
      greetCount++;
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
      message = "Please select a language";
    }
    return message;
  }

  function getGreetCount() {
    return greetCount;
  }

  function resetGreetCount() {
    names = {};
    greetCount = 0;
    localStorage.removeItem("greetCount");
  }

  return {
    addName,
    getName,
    getMessage,
    getGreetCount,
    resetGreetCount
  };
}

