const sum = (array) => {
    let result=0;

    array.forEach(element => result+=element);

    return result;
}

console.log(sum([7,3,1,2]))