console.log("Enter a Sentence: ")
let inputString = prompt(" ");
let outputString = [];
let splitInput = inputString.split(' ');

for (str of splitInput) {
     let splitOutput = "";

     for (let i = str.length-1; i >= 0; i--) {
         splitOutput += str[i];
    }
    outputString.push(splitOutput);
}
console.log(outputString.join(" "));