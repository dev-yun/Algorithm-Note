var minDistance = function(word1, word2) {
    if(word1===word2) return 0;
    
    word1 = "#"+word1;
    word2 = "#"+word2;
    const dp = [...Array(word1.length)].map(row => Array(word2.length).fill(0));
    
    for(let i=1; i<word1.length; i++){
        for(let j=1; j<word2.length; j++){
            if(word1[i]===word2[j]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    
    const LCS = dp[word1.length-1][word2.length-1];
    
    return (word1.length-1)-LCS + (word2.length-1)-LCS;
};