function solution(s) {
  const sArr = s.split('');
  let pCnt = 0;
  let yCnt = 0;

  sArr.forEach((e) => {
    if (e === 'P' || e === 'p') pCnt++;
    else if (e === 'Y' || e === 'y') yCnt++;
  });

  return pCnt === yCnt ? true : false;
}
