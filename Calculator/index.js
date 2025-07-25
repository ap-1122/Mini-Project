 let store = "";

    let cal = (value) => {
     let display = document.querySelector("#screen");

  const operators = ['+', '-', '*', '/', '%'];

  // Check if last character is operator and new value is also operator
  if (
    operators.includes(store.slice(-1)) && 
    operators.includes(value)
  ) {

    
    // Replace last operator with new one
    store = store.slice(0, -1) + value;
  } else {
    
    // Append normally
    store += value;
  }

  display.innerHTML = store;
    }

    let res = () => {
      let display = document.querySelector("#screen");
        try {
         store = eval(store).toString();
         display.innerHTML = store;
          } 
        catch {
          display.innerHTML = "Error";
           store = "";
  }

    }

    let sqrt = () => {
      let display = document.querySelector("#screen");
      store = Math.sqrt(eval(store)).toString();
      display.innerHTML = store;
    }

    let clearScreen = () => {
      let display = document.querySelector("#screen");
      store = "";
      display.innerHTML = store;
    }

    let deleteLast = () => {
      let display = document.querySelector("#screen");
      store = store.slice(0, -1);
      display.innerHTML = store;
    }