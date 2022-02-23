function repeatingCharacter(nums){
    
    let data = new Set();
    data.add(nums[0])
    for(let i =1; i<nums.length; i++){
        if(data.has(nums[i])){
            return nums[i];
                   
        }
        data.add(nums[i]);
    }
    
}
