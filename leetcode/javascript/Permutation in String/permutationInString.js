// s1과 s2이 존재하고 s2가 s1의 순열을 포함하는 경우 true, 아니라면 false
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map = new Map();
  for (let i = 0; i < s1.length; i++) map.set(s1[i], map.get(s1[i]) + 1 || 1);

  for (let start = 0, end = s1.length - 1; end < s2.length; start++, end++) {
    if (!map.has(s2[start]) || !map.has(s2[end])) continue;

    let i = start;
    do {
      map.set(s2[i], map.get(s2[i]) - 1);
      i++;
    } while (i <= end && map.get(s2[i]));

    if (i > end) return true;

    for (let j = start; j < i; j++) map.set(s2[j], map.get(s2[j]) + 1);
  }

  return false;
};
