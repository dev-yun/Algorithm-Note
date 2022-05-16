// ANAGRAMS : 두개의 문자열이 주어졌을때, 순서와 상관없이 두개의 문자열에서
  // 문자의 종류와 문자의 개수가 같으면 true, 다르면 false를 반환

  const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    
    let firstStrObject = {};
    let secondStrObjet = {};
  
    strToObj(str1, firstStrObject);
    strToObj(str2, secondStrObjet);
  
    for(let key in firstStrObject){
      // firstStrObject의 key가 secondStrObjet에 들어있지 않을때
      if(!(key in secondStrObjet)) return false;
      // firstStrObject의 value와 secondStrObjet의 value가 같지 않을때
      if(firstStrObject[key] !== secondStrObjet[key]) return false;
    }
  
    return true;
  }
  
  const strToObj = (str, obj) => {
    for(let key of str){
      obj[key] = (obj[key] || 0) +1;
    }
  }