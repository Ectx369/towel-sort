module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    else if (matrix.length === 0) {
        return []
    }
     else {
        for (let index = 0; index < matrix.length; index++) {
            if (index % 2 ) {
              matrix[index] = matrix[index].reverse()
            }
          }
          
          matrix = matrix.join().split(',')
          let intMatrix = matrix.map(Number)
          
          matrix
          return intMatrix
    }
}
