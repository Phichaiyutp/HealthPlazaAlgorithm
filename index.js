const longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        const c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== c) {
                return prefix;
            }
        }
        prefix += c;
    }
    
    return prefix;
};


const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); 

const strs3 = ["interstellar", "intermediate", "international"];
console.log(longestCommonPrefix(strs3)); 
