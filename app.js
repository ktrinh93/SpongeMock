$(document).ready(function() {

  // when the convert button is clicked
  $("#convert").on("click", function() {

    // grabs user's text, formats it to all lowercase
    let userInput = $("#input").val().toLowerCase();
    // sets up new converted string
    let convertedString = "";

    // boolean to control letter case
    let isUpper = true;
    
    // for the whole input
    for(let i = 0; i < userInput.length; i++) {

      // current character in the string
      let currentChar = userInput.charAt(i);

      // if it's an alphabetical letter
      if(isAlpha(currentChar)) {
        // if it should be capitalized
        if(isUpper) {
          // capitalize it
          convertedString += currentChar.toUpperCase();
        }
        // otherwise
        else {
          // just copy it as is (lowercase)
          convertedString += currentChar;
        }

        // flips the boolean to provide alternating cases
        isUpper = !isUpper;
      }
      // if it's punctation or white space
      else {
        // just copy it as is
        convertedString += currentChar;
      }
    }

    // populate the output field with the converted string
    $("#output").val(convertedString);
  });

  // when the copy button is clicked
  $("#copy").on("click", function() {
    // select the text
    $("#output").select();
    // copy it to their clipboard
    document.execCommand("copy");
    // alert them of success
    alert("TeXt SuCcEsSfUlLy CoPiEd");
  });

  // when the clear button is clicked
  $("#clear").on("click", function() {
    // clear both of the text fields
    $("#input").val("");
    $("#output").val("");
  });

  // function to determine whether a character is an alphabetical letter
  var isAlpha = function(ch){
    return /^[A-Z]$/i.test(ch);
  }

});