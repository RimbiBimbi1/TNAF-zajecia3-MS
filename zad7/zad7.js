const isHappyNumber = a => {
    let result = a;
    let numbers;

    for(let i=0;true;i++) {
        if(result%2 === 0)return false;
        numbers = result.toString().split('');
        result=0;

        numbers.forEach(number => result += (number * number));

        if(result === 1)return true;
    }
    return false;
}

console.log(isHappyNumber(27))