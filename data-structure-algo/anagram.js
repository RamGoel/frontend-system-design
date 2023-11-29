// BruteForce Approach
function checkAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}


//Optimized
function checkAnagramOptimized(s, t) {
    if (s.length !== t.length) return false;
    
    let mp1 = {};
    let mp2 = {};

    for (let i = 0; i < s.length; i++) {
        if (mp1[s[i]]) {
            mp1[s[i]] += 1;
        } else {
            mp1[s[i]] = 1;
        }

        if (mp2[t[i]]) {
            mp2[t[i]] += 1;
        } else {
            mp2[t[i]] = 1;
        }
    }


    for (let key in mp1) {
        if (mp1[key] !== mp2[key]) return false;
    }

    return true;
}


console.log(checkAnagramOptimized('anaram', 'nagaram'))