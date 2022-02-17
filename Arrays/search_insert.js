/*
https://leetcode.com/problems/search-insert-position/
*/

var searchInsert = function(nums, target) {
    
    let data = new Set();
    
    for(let i=0; i<nums.length;i++){
        if( nums[i] === target){
            return i;
        }
        if(nums[i]>target){
            return i
        }
        if(i===nums.length-1){
            return nums.length;
        }
    }
       
    
};
