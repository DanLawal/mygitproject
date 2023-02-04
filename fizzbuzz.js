let n = 0;
while (n <=14) { n += 1;
if (n % 3 === 0 && n % 5 !== 0) {
console.log("Fizz");
}else if (n % 5 === 0 && n % 3 !== 0) {
    console.log("Buzz");
} else if (n % 3 !== 0 && n % 5 !== 0) {
    console.log(n);
} else if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz")
};
}'works well'