function solution(s) {
    var answer = s;

    const numList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    if (typeof(parseInt(answer)) === NaN){
        return parseInt(answer);
    }

    numList.forEach((el, idx) => {
        const newArr = answer.split(el);
        answer = newArr.join(idx);
    })

    return parseInt(answer);
}