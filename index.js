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


console.log(process.argv);
code = fs.readFileSync(path.join(__dirname, process.argv[2]));
console.log('code ' + code);

const digits = new Set();
for (let i = 0; i < 10; i++) {
  digits.add(i.toString());
}

const operators = new Set();
operators.add('+');
operators.add('-');
operators.add('*');
operators.add('/');
operators.add('^');



const memory = {
  digits,
  operators,
};

function parse(code) {

}
