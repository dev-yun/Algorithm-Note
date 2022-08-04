// 4면이 거울로 이뤄진 방에서 왼쪽 아래에서 빛이 발사된다.
// 이때 빛은 q/p의 각도로 발사된다.
// 오른쪽 아래(0), 오른쪽 위(1), 왼쪽 위(2)중 가장 먼저 닿는 receptor의 번호를 구하여라.

// 한면의 길이는 p이고 1 <= q <= p <= 1000의 범위를 갖는다.

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
 var mirrorReflection = function(p, q) {
    while(p % 2 === 0 && q % 2 === 0){
        p = p/2;
        q = q/2;
    }
    
    if(p%2 === 0) return 2;
    
    if(q%2 === 0) return 0;
    
    return 1;
};
