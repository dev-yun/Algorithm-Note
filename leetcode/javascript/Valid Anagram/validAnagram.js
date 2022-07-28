/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // return s.split("").sort().join("") === t.split("").sort().join("") 
    // return s.split("").sort().toString() === t.split("").sort().toString()
    return JSON.stringify(s.split("").sort()) === JSON.stringify(t.split("").sort())
};