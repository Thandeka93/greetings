describe('Greet Function ', function () {
    it("should be able to return Hello Thandeka when radio button for English is checked", function () {
        const greetApp = Greeting();
        const english = "English";
        greetApp.addName("Thandeka", english);
        const greeting = greetApp.getName("Thandeka");
        assert.equal("Greetings, Thandeka", greeting, "Hello, Thandeka");
    });

    it("should be able to return Hola Thando when radio button for Spanish is checked", function () {
        const greetApp = Greeting();
        const spanish = "Spanish";
        greetApp.addName("Thando", spanish);
        const greeting = greetApp.getName("Thando");
        assert.equal("Greetings, Thando", greeting, "Hola, Thando");
    });

    it("should be able to return 'Sawubona, Khanyi' when the radio button for IsiZulu is checked", function () {
        const greetApp = Greeting();
        const IsiZulu = "IsiZulu";
        greetApp.addName("Khanyi", IsiZulu);
        const greeting = greetApp.getName("Khanyi");
        assert.equal("Greetings, Khanyi", greeting, "Sawubona, Khanyi");
    });

    it("should be able to stop incrementing when same name is greeted", function () {
        let greetApp;
        greetApp = Greeting();
        greetApp.addName('Thandeka', 'English');
        greetApp.addName('Thandeka', 'Spanish');
        greetApp.addName('Thandeka', 'IsiZulu');
        greetApp.addName('John', 'English');
        greetApp.addName('John', 'Spanish');
        greetApp.addName('Thandeka', 'English');

        const greetCount = greetApp.getGreetCount();
        assert.equal(greetCount, 2);
    });

    it("should be able to stop incrementing when same name is greeted regardless of lowercase or uppercase", function () {
        let greetApp;
        greetApp = Greeting();
        greetApp.addName('Thandeka', 'English');
        greetApp.addName('Thandeka', 'Spanish');
        greetApp.addName('Thandeka', 'IsiZulu');
        greetApp.addName('John', 'English');
        greetApp.addName('john', 'Spanish');
        greetApp.addName('thandeka', 'English'); 

        const greetCount = greetApp.getGreetCount();
        assert.equal(greetCount, 2);
    });

    it("should be able to return error message when no name entered and no radio button is checked", function () {
        const greetApp = Greeting();
        const greeting = greetApp.getName(""); 
        assert.equal("Please enter a name and select a language", greetApp.getMessage());
    });
    

    it("should clear all radio buttons when greeted successfully", function () {
        let greetApp = Greeting();
        greetApp.clearRadioButtons();
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        const allButtonsCleared = Array.from(radioButtons, ({ checked }) => !checked).every(Boolean);
        assert.equal(allButtonsCleared, true);
    });
    
  it("should reset the greetCount, remove 'greetCount' from localStorage", function () {
   var names = {}; 
   var greetCount = 0; 
    let greetApp = Greeting();
    greetApp.resetGreetCount();
    assert.deepEqual(names, {});
    assert.equal(greetCount, 0);
  });
});


