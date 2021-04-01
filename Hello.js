const strings=['a', 'b', 'c', 'd'];

console.log(strings[2]);

strings.push('e');
console.log(strings);
strings.pop();
console.log(strings);

strings.unshift('x');
console.log(strings);

strings.splice(2, 2, 'alien');
console.log(strings);