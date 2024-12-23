const button = document.getElementById("generateButton");
const button1 = document.getElementById("generateButton1")

  
  function btnUp () {
  const num = parseInt(document.getElementById("rows").value);
  const output = document.getElementById("output"); // Get the output element

  if (!isNaN(num) && num > 0) {
    output.textContent = ""; // Clear previous output
    let pattern = "";

      for (let i = num; i >= 1; i -= 1) {
        let spaces = "";
        let stars = "";

        // Generate spaces using a for loop
        for (let j = 0; j <num - i; j++) {
          spaces += " "; // every row first space
        }

        // Generate stars using a for loop
        for (let k = 0; k < i; k++) {
          stars += "*"+" "; // print star + space
        }

        pattern += spaces + stars + spaces+ "\n"; // Add spaces and stars
      }
      output.textContent = pattern; // Display the pattern on the webpage
      console.log(pattern);
   
    }
   else {
    output.textContent = "Please enter a valid positive number."; // Error message when negative number or  blank
  }
}

  function btnDown () {
  const num = parseInt(document.getElementById("rows").value);
  const output = document.getElementById("output"); // Get the output element

  if (!isNaN(num) && num > 0) {
    output.textContent = ""; // Clear previous output
    let pattern = "";

      for (let i = 1; i<=num; i += 1) {
        let spaces = "";
        let stars = "";

        // Generate spaces using a for loop
        for (let j = 0; j <num - i; j++) {
          spaces += " "; // every row first space
        }

        // Generate stars using a for loop
        for (let k = 0; k < i; k++) {
          stars += "*"+" ";// print star + space
        }

        pattern += spaces + stars +spaces+ "\n"; // Add spaces and stars
      }
      output.textContent = pattern; // Display the pattern on the webpage
      console.log(pattern);
    }
   
  else{
    output.textContent = "Please enter a valid positive number."; // Error message when negative number or  blank
  }
  }

button1.addEventListener("click",btnUp);
button.addEventListener("click", btnDown);


