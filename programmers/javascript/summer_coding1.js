function solution(atoms) {
  let mask = 0;
  let usingDay = 0;

  atmos.forEach((e, idx) => {
    let mise = e[0];
    let chomise = e[1];

    console.log(mise, chomise, usingDay);
    // 모두 매우나쁨일때 무조건 +1
    if (mise > 150 && chomise > 75) {
      if (!usingDay) {
        usingDay = 0;
        mask += 1;
      } else {
        usingDay = 0;
      }
      console.log(`1, mask : ${mask}, usingDay : ${usingDay}`);
    }
    // 둘 중 하나라도 나쁨 또는 매우나쁨일때
    else if (mise > 80 || chomise > 35) {
      // 마스크가 사용중이면 usingDay + 1 아니면 새로운 마스크 착용
      if (!usingDay) {
        usingDay += 1;
        mask += 1;
      } else usingDay += 1;

      if (usingDay > 2) {
        usingDay = 0;
      }
      console.log(`2, mask : ${mask}, usingDay : ${usingDay}`);
    } else {
      usingDay && usingDay < 2 ? (usingDay += 1) : (usingDay = 0);
    }
  });

  return mask;
}
