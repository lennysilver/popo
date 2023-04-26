function countOccurrences(arr, target) {
    const lowerCaseTarget = target.toLowerCase(); 
    let count = 0; 


    for (let i = 0; i < arr.length; i++) {
      const lowerCaseString = arr[i].toLowerCase(); 
      if (lowerCaseString === lowerCaseTarget) { 
        count++; 
      }
    }
  
    return count; 
  }
  const strings = ["apple", "orange", "Banana", "APPLE", "orange", "grape"];
const target = "Apple";
const occurrences = countOccurrences(strings, target);
console.log(occurrences); 

  