// 주사위가 n개 주어지고 각각의 주사위는 1~k까지의 면을 가지고 있다.
// n개의 주사위로 target 숫자를 만들 수 있는 방법의 개수를 구하여라.
// 방법의 수가 매우 많을 수 있으므로 modulo 10^9 + 7로 반환하여라

// dp문제

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
 var numRollsToTarget = function(n, k, target) {
	const MODULO = Math.pow(10, 9) + 7;

	const dp = Array(target + 1).fill(0)
	dp[0] = 1;

	for (let i = 1; i <= n; i++) {
		for (let j = target; j >= 0; j--) {
			dp[j] = 0;

			for (let p = 1; p <= k; p++) {
				if (j >= p)
					dp[j] = (dp[j] + dp[j - p]) % MODULO;
				else
					break;
			}
		}
        console.log(dp)
	}

	return dp[target];
};