const wordSearch = (letters, word) => {
    //if statement to check if letters is an array
    if (!Array.isArray(letters)) {
      return false;
    }
  
    //if statement to check if letters is empty array
    if (letters.length === 0) {
      return false;
    }
  
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const verticalLetters = transpose(letters);
    // console.log(verticalLetters);
    const verticalJoin = verticalLetters.map((ls) => ls.join(""));
  
    // console.log(verticalJoin);
    // console.log(horizontalJoin);
  
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };
  
  const transpose = (matrix) => {
    //code here
    const newArray = [];
  
    //create new array
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
  
    // push items to new array
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArray[j].push(matrix[i][j]);
      }
    }
  
    return newArray;
  };
  
  // console.log(
  //   wordSearch(
  //     [
  //       ["A", "W", "C", "F", "Q", "U", "A", "L"],
  //       ["S", "E", "I", "N", "F", "E", "L", "D"],
  //       ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  //       ["H", "M", "J", "T", "E", "V", "R", "G"],
  //       ["W", "H", "C", "S", "Y", "E", "R", "L"],
  //       ["B", "F", "R", "E", "N", "E", "Y", "B"],
  //       ["U", "B", "T", "W", "A", "P", "A", "I"],
  //       ["O", "D", "C", "A", "K", "U", "A", "S"],
  //       ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  //     ],
  //     "FRANK"
  //   )
  // );
  
  console.log(wordSearch([], "FRANK"));
  
  // console.log(
  //   transpose([
  //     [1, 2, 3],
  //     [3, 4, 6],
  //   ])
  // );
  
  module.exports = wordSearch;
  