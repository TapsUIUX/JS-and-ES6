const binaryArrayToNumber = arr => {
  let newArr = arr.reverse();
  return newArr.reduce((acc,el,id)=>{      
    return acc = acc + el* Math.pow(2,id)
  },0)
};

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}
