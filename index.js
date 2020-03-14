// UNCOMMENT THIS WHEN USING CLI
// #!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/*
IDEA
want to build a compiler, something where I can run
`my-compiler code-file` it will run the code in the code file

FEATURES
What should this simple language have?
- data types: integers, strings, objects
- variables: data vars, function vars
- built in operators: + - * / ^ ( ) for arithmetic and strings
*/

console.log("COMPILING");
console.log(process.argv);
// console.log(10 ** 3);
// code = fs.readFileSync(path.join(__dirname, process.argv[2]));
// console.log('code ' + code);

// const digits = new Set();
// for (let i = 0; i < 10; i++) {
//   digits.add(i.toString());
// }

const digits = {}
for (let i = 0; i < 10; i++) {
  digits[i] = i;
};

const parseInteger = (integerString) => {
  const parseDigit = char => digits[char];
  let parsedInteger = 0;
  let power = integerString.length - 1;

  //reads from left to right, so need add biggest numbers first
  for (let char of integerString) {
    parsedInteger += parseDigit(char) * (10 ** power);
    power--;
  }

  return parsedInteger;
}

const getChunk = (string, index, stopSymbols=new Set(), ignoreSymbols=new Set()) {
  let chunk = "";
  while(index < string.length && !stopSymbols.has(string[index])) {
    if (!ignoreSymbols.has(string[index])) {
      chunk += string[index];
    }
    index++;
  };
  return { chunk, index };
}

// Incomplete, doesn't parse number expression
const parseNumExpression = expressionString => {
  const getNumExpressionChunk = (string, index) => getChunk(
      string,
      index,
      operators,
      whitespace
    );
  let index = 0;
  // while (index < string.length) {
  //   const chunk = getNumExpressionChunk()
  // }
}


// console.log(parseNumExpression("12 + 13"));
// console.log(parseNumExpression("12 - 10"));
// console.log(parseNumExpression("12 * 13"));
// console.log(parseNumExpression("12 / 4"));
// console.log(parseNumExpression("12 ^ 13"));
const whitespace = new Set([" "]);
const operators = new Set([
  '+',
  '-',
  '*',
  '/',
  '^',
]);

const memory = {
  digits,
  operators,
};

function parse(code) {

}
