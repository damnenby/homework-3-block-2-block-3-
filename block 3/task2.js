// 1.
const vegArr = ["Капуста", "Репа", "Редиска", "Морковка"];

console.log(vegArr.join(' | '));


// 2.
let names = 'Вася;Петя;Вова;Олег';

const newArr = names.split(';');

console.log(newArr);


// 3.
let myname = 'Василий';

function hello2(name='гость'){
    console.log('Привет, ', name);
}

hello2();
hello2(myname);


// 4.
const fruits = ["яблоко", "ананас", "груша"];

const fruitsInUpperCase = fruits.map(function(item){
    return item.toUpperCase();
})

console.log(fruitsInUpperCase);


// 5.
function addOneForAll(...items){
    const result = [];
    for(const i of items){
        result.push(i+1);
    }
    return result;
}

const val = addOneForAll(1,2,3,4);
console.log(val);

// 6.
function getSum(...items){
    let mysum = 0;
    for(i of items){
        mysum+=i;
    }
    return mysum;
}

const val1 = getSum(1, 2, 3, 4);
console.log(val1);


// 7.
const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const numberArray = arr.filter(item => typeof(item) == 'number');

console.log(numberArray);

// 8.
function arrayTesting(arr){
    for(const item of arr){
        if(item == 1){
            return('Нашли true значение');
        }
    }
    return('Ничего нет');
}

const haveTrueValue = arrayTesting([0, false, null, 1]);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]);

console.log(haveTrueValue);
console.log(dontHaveTrueValue);