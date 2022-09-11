// 주어진 strs 문자열들 중 같은 문자를 포함하는 문자열들을 분류하여 return 하여라

// 모든 문자열을 배열로 변환하고 정렬하여 같은 문자끼리 분류하는 방식으로 풀이
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 모든 문자열을 정렬 ("acb", "cab" => "abc")
  const conversedStrs = strs.map((str) => str.split("").sort().join(""));
  const uniqueStrs = [...new Set(conversedStrs)];
  const output = Array.from({ length: uniqueStrs.length }, () => []);

  // output의 어떤 index에 문자열을 추가할지 결정하는 코드
  conversedStrs.forEach((str, index) => {
    const inputIndex = uniqueStrs.indexOf(str);
    output[inputIndex].push(strs[index]);
  });

  return output;
};
