function sortStrings() {
  let inputBox = document.getElementById("stringIn");
  let strings = inputBox.value.split('\n').filter(str => str.trim() !== ''); // Split input into array of strings
  
  strings.sort(); // Sort the array of strings
  
  let sortedStrings = strings.join('\n'); // Join sorted strings back into a single string
  
  inputBox.value = sortedStrings; // Update the input box with the sorted strings
}
