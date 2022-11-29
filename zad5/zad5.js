const fibonacci = n => {
    let array = [0,1];

    for(i=2;i<=n;i++){
        array.push(
           array.at(i-1) + array.at(i-2)
        );
    }

    return array.slice(0, n)
}

console.log(fibonacci(9))