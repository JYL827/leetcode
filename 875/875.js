// 尝试一下 暴力解法 再优化
/**
 * 
 * @param {number[]} piles 
 * @param {number} H
 * @returns {number} 
 */
var minEatingSpeed = function(piles, H) {
    let lo = 1;
    // 求出最大香蕉数，在某把中
    hi = Math.max(...piles);
    console.log(lo,hi)
    return lo;
}

minEatingSpeed([3,6,7,11],8);