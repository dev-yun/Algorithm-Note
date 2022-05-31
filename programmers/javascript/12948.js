function solution(phone_number) {
  let lastNum = phone_number.slice(-4);
  let replaceNum = phone_number.slice(0, -4);
  const re = /[0-9]/g;

  replaceNum = replaceNum.replace(re, '*');

  return replaceNum + lastNum;
}
