function arraysEqual(a, b) {
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }


let checkSubset = (parentArray, subsetArray) => {
   console.log('Parent',parentArray)
   console.log('Subset',subsetArray)
    parentArray.forEach(element => {
        if (arraysEqual(element,subsetArray)) {
           console.log('truer')
            return true
        }
    });
    console.log('false')
    return false
}
export default checkSubset