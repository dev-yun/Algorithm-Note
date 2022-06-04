function solution(s, n) {
  var answer = "";
  sArr = s.split("")
  sArr = pushAlpabet(sArr, n);

  answer = sArr.join("")
  return answer;
}

const pushAlpabet = (sArr, n) => {
  for(let i = 0; i < sArr.length; i++){
    let asciiNum = sArr[i].charCodeAt();
    if(asciiNum <= 90 && asciiNum >= 65){
      if(asciiNum + n > 90) sArr[i] = String.fromCharCode((asciiNum + n) - 26);
      else sArr[i] = String.fromCharCode(asciiNum + n);
    }
    if(asciiNum <= 122 && asciiNum >= 97){
      if(asciiNum + n > 122) sArr[i] = String.fromCharCode((asciiNum + n) - 26);
      else sArr[i] = String.fromCharCode(asciiNum + n);
    }
  }

  return sArr;
}