

const range = (a,b) => {
    let array = [];
    for(i=Math.ceil(a);i<=b;i++){
        array.push(i);
    }
    return array;
}

console.log(range(3.000001,5))