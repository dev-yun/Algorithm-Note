// prototype 풀이

/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    for(let i = left; i <= right; i++){
        sum += this.nums[i]
    }
    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */


// class 풀이

class NumArray {
    nums;
    
    constructor(nums) {
        this.nums = nums;
    }

    update(index, val){
        this.nums[index] = val;
    }

    sumRange(left, right){
        let sum = 0;
        for (let i = left; i <= right; i += 1){
            sum += this.nums[i];
        }
        return sum;
    }
}