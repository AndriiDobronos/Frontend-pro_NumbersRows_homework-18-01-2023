"use strict";
//Отримати від користувача 3 рядки та вивести їх
//у довільному порядку однією командою (конкатенація);

function firstString1(){
    let firstString1 = prompt('Input first string ')
    while (!firstString1?.trim()) {
        firstString1 = prompt('You have not inputted the first string, repeat please')
    }
    return firstString1
}
const firstString =  firstString1()
function secondString1(){
    let secondString1 = prompt('Input second string ')
    while (!secondString1?.trim()) {
        secondString1 = prompt('You have not inputted the second string, repeat please')
    }
    return secondString1
}
const secondString =  secondString1()
function thirdString1(){
    let thirdString1 = prompt('Input third string ')
    while (!thirdString1?.trim()) {
        thirdString1 = prompt('You have not inputted the third string, repeat please')
    }
    return thirdString1
}
const thirdString =  thirdString1()
const randomNum = Math.random()*6
let result
if (randomNum > 0 && randomNum < 1) {
    result = `${firstString}\n ${secondString}\n ${thirdString}`
}
else if (randomNum > 1 && randomNum < 2) {
    result = `${secondString}\n ${firstString}\n ${thirdString}`
}
else if(randomNum > 2 && randomNum < 3) {
    result = `${thirdString}\n ${firstString}\n ${secondString}`
}
else if (randomNum > 3 && randomNum < 4) {
    result = `${firstString}\n ${thirdString}\n ${secondString}`
}
else if (randomNum > 4 && randomNum < 5) {
    result = `${secondString}\n ${thirdString}\n ${firstString}`
}
else {
    result = `${thirdString}\n ${secondString}\n ${firstString}`
}
const definition = `Array of rows in random oder :\n`
alert(definition.concat(` ${result}`))
/**********************************************************/
//Розбити за цифрами п'ятизначне число і вивести
// у вихідному порядку через пробіл.
const nums = "12345"
const num = Array.from(nums)
const numSplit = num.join(' ')
alert(numSplit)



