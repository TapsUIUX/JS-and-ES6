const binaryArrayToNumber = arr => {
  let newArr = arr.reverse();
  return newArr.reduce((acc,el,id)=>{      
    return acc = acc + el* Math.pow(2,id)
  },0)
};
