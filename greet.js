// function greetingWidget() {
//   const input = document.querySelector(".input");
//   const greetBtn = document.querySelector(".greetBtn");
//   const greetingElement = document.querySelector(".greetings");
//   const greetCountElement = document.querySelector(".countGreet");

//   let greetCount = localStorage.getItem("greetCount") || 0;
//   greetCountElement.innerHTML = greetCount;

//   let greetedNames = {};
//   function handleGreetButton() {
//     const name = input.value.trim();

//     if (name !== "") {
//       const selectedLanguage = document.querySelector("input[name='language']:checked").value;
//       const greeting = getGreeting(selectedLanguage, name);
//       greetingElement.innerHTML = greeting;
//       input.value = "";

//       if (!greetedNames.hasOwnProperty(name)) {
//         greetCount++;
//         greetCountElement.innerHTML = greetCount;
//         greetedNames[name] = true;
//       }

//       localStorage.setItem("greetCount", greetCount);
//     }
//   }

//   greetBtn.addEventListener("click", handleGreetButton);

//   window.addEventListener("load", function () {

//     greetCount = localStorage.getItem("greetCount") || 0;
//     greetCountElement.innerHTML = greetCount;
//   });

//   function getGreeting(language, name) {
//     switch (language) {
//       case "english":
//         return 'Hello, ' + name + '!';

//       case "spanish":
//         return '¡Hola,' + name + '!';

//       case "isizulu":
//         return 'Sawubona,' + name + '!';

//       default:
//         return 'Hello,' + name + '!';
//     }
//   }

//   function resetGreetCounter() {
//     greetCount = 0;
//     greetCountElement.innerHTML = greetCount;
//     localStorage.setItem("greetCount", greetCount);
//     greetedNames = {};
//   }

//   const reset = document.querySelector(".reset");
//   reset.addEventListener("click", resetGreetCounter);
// }

// greetingWidget();

// function greetingWidget() {
//   const input = document.querySelector(".input");
//   const greetBtn = document.querySelector(".greetBtn");
//   const greetingElement = document.querySelector(".greetings");
//   const greetCountElement = document.querySelector(".countGreet");
//   const errorElement = document.querySelector(".error-message");

//   let greetCount = localStorage.getItem("greetCount") || 0;
//   greetCountElement.innerHTML = greetCount;

//   let greetedNames = {};

//   function handleGreetButton() {
//     const name = input.value.trim();

//     if (name !== "") {
//       errorElement.innerHTML = ""; // Clear any previous error message

//       const selectedLanguage = document.querySelector("input[name='language']:checked").value;
//       const greeting = getGreeting(selectedLanguage, name);
//       greetingElement.innerHTML = greeting;
//       input.value = "";

//       if (!greetedNames.hasOwnProperty(name)) {
//         greetCount++;
//         greetCountElement.innerHTML = greetCount;
//         greetedNames[name] = true;
//       }

//       localStorage.setItem("greetCount", greetCount);
//     } else {
//       errorElement.innerHTML = "Please enter a name."; // Display error message
//     }
//   }

//   greetBtn.addEventListener("click", handleGreetButton);

//   window.addEventListener("load", function () {
//     greetCount = localStorage.getItem("greetCount") || 0;
//     greetCountElement.innerHTML = greetCount;
//   });

//   function getGreeting(language, name) {
//     switch (language) {
//       case "english":
//         return 'Hello, ' + name + '!';

//       case "spanish":
//         return '¡Hola,' + name + '!';

//       case "isizulu":
//         return 'Sawubona,' + name + '!';

//       default:
//         return 'Hello,' + name + '!';
//     }
//   }

//   function resetGreetCounter() {
//     greetCount = 0;
//     greetCountElement.innerHTML = greetCount;
//     localStorage.setItem("greetCount", greetCount);
//     greetedNames = {};
//   }

//   const reset = document.querySelector(".reset");
//   reset.addEventListener("click", resetGreetCounter);
// }

// greetingWidget();

function greetingWidget() {
  const input = document.querySelector(".input");
  const greetBtn = document.querySelector(".greetBtn");
  const greetingElement = document.querySelector(".greetings");
  const greetCountElement = document.querySelector(".countGreet");
  const errorElement = document.querySelector(".error-message");
  const languageSelection = document.querySelector("#languageSelection");

  let greetCount = localStorage.getItem("greetCount") || 0;
  greetCountElement.innerHTML = greetCount;

  let greetedNames = {};

  function handleGreetButton() {
    const name = input.value.trim();
    const selectedLanguage = document.querySelector("input[name='language']:checked");

    if (name !== "" && selectedLanguage !== null) {
      errorElement.innerHTML = ""; // Clear any previous error message

      const selectedLanguageValue = selectedLanguage.value;
      const greeting = getGreeting(selectedLanguageValue, name);
      greetingElement.innerHTML = greeting;
      input.value = "";

      if (!greetedNames.hasOwnProperty(name)) {
        greetCount++;
        greetCountElement.innerHTML = greetCount;
        greetedNames[name] = true;
      }

      localStorage.setItem("greetCount", greetCount);
    } else {
      if (name === "") {
        errorElement.innerHTML = "Please enter a name."; // Display name error message
      } else {
        errorElement.innerHTML = "Please select a language."; // Display language error message
      }
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

  function resetGreetCounter() {
    greetCount = 0;
    greetCountElement.innerHTML = greetCount;
    localStorage.setItem("greetCount", greetCount);
    greetedNames = {};
  }

  const reset = document.querySelector(".reset");
  reset.addEventListener("click", resetGreetCounter);
}

greetingWidget();



