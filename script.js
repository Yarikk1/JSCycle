//№1
// let i = 0
// let sum = 0
// while (i < 1000) {
//   i++
//   sum += i
// }
// console.log(sum)

//№2
// let n = Math.floor(Math.random() * (31 - 2) + 2)
// let fac = 1
// while (n > 1) {
//   fac *= n
//   n--
// }
// console.log(fac)

//№3
// let currentAge = 10
// let age = 11
// let price = 60000
// let priceM = 1000
// let priceF = 1200
// let n = 0

// while (n <= price) {
//   age++
//   if (age >= 11) {
//     n += priceM + priceF
//     priceF += 1200
//   } else {
//     n += priceM
//   }
// }
// console.log(age - currentAge)

//№4
// let word = 'потоппп'
// let pWord = 'наворован'

// function Palindrom(word) {
//   let pArr = []

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[word.length - i - 1]) {
//       pArr.push([word[word.length - i - 1]])
//     }
//   }

//   if (pArr.length == word.length) {
//     console.log(`Слово ${word} является палиндромом`)
//   } else {
//     console.log(`Слово ${word} не является палиндромом`)
//   }
// }

// Palindrom(word)

//№5
// let ranNum = Math.floor(Math.random() * 101);
// let result;
// let flag = true;

// while (flag) {
//   result = prompt('Угадайте число:');

//   if (result == ranNum) {
//     console.log(`Вы выиграли! Загаданное число: ${ranNum}`);
//     flag = false;
//   } else if (result > ranNum - 5 && result < ranNum + 5) {
//     console.log('Горячо');
//   } else if (result > ranNum - 10 && result < ranNum + 10) {
//     console.log('Тепло');
//   } else {
//     console.log('Холодно');
//   }
// }

