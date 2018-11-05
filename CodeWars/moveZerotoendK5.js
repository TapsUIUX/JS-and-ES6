//Test Passed: Value == '["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]'

var moveZeros = function (arr) {
    return [...arr.filter(el=>!(el==0 && typeof(el)=='number')),...arr.filter(el=>el==0 && typeof(el)=='number')]
}
