let myname = prompt('Введите имя', 'Имя');

if (isNaN(myname)){
    console.log('Hello', myname);

}

else{
    console.log('Ошибка, не тот тип данных');
}

console.log(typeof(1));
console.log(typeof('a'));