// 尝试一下 暴力解法 再优化
/**
 * 
 * @param {number[]} piles 
 * @param {number} H
 * @returns {number} 
 */
var minEatingSpeed = function (piles, H) {

    let lo = 1; //最小的数
    let hi = Math.max(...piles)  //求最大香蕉数
    if(piles.length==H){ //如果香蕉堆数量等于时间，则返回最大香蕉数
      return hi
    }
    let time = 0 //计算时间
    for (let i = lo; i <= hi; i++) { //外层循环从最小吃香蕉数开始找
      time = 0 //内循环结束后，重置时间
      for (let j = 0; j < piles.length; j++) { //内层循环，从香蕉堆循环
        time = time + (Math.ceil(piles[j] / i)) //时间累加
        if (time > H) {  //如果累加的时间超过总时间，则直接结束
          break
        }
        if(j == piles.length-1){  //如果到循环结束都没有超时，则返回最小值
          return i
        }
      }
    }
  };
minEatingSpeed([3, 6, 7, 11], 8);