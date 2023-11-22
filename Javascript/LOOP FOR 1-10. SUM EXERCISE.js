const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let index = 0; index < array.length; index++) {
    const number = array[index];
    console.log("Number:", number);
    sum = sum + number;
    // for first exercise (LET SUM = 1; sum = sum * number;
    console.log("sum of shenanigans:", sum);
}

//for (let index in array) {
//    console.log(sum)
//}

for (const number of array) {
    sum = sum + number;
    console.log(sum)
}