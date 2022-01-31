/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function expandOverFound(position) {
        let start = position;
        let end = position;
        while(nums[start] === target) {
            start--;
        }
        start++;
        while(nums[end] === target) {
            end++;
        }
        end--;
        return [start, end];
    }
    
    function expandOverSearch(begin, end) {
        let start = -1;
        let last = -1
        for (let i = begin; i <= end; i++) {
            if(nums[i] === target) {
                if (start < 0) {
                    start = i;
                }
                last = i;
            }
        }
        return [start, last];
    }
    
    if (nums.length === 0) {
        return [-1,-1];
    }
    const [first] =  nums;
    const last = nums[nums.length-1];
    if (target < first || target > last) {
        return [-1,-1];
    }
    let begin = 0;
    let end = nums.length-1;
    let meanPosition = parseInt((end - begin)/2);
    let found = false;
    let auxMeanPosition = -1;
    while (!found && begin !== end && auxMeanPosition !== meanPosition) {
        auxMeanPosition = meanPosition;
        if (nums[meanPosition] > target) {
            end = meanPosition;
        } else if(nums[meanPosition] < target) {
            begin = meanPosition;
        } else {
            found = true;
        } 
        meanPosition = parseInt((end-begin)/2) + begin;
    }
    return (found)? expandOverFound(meanPosition) : expandOverSearch(begin, end);
};