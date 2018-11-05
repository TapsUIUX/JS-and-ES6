
// 153=1^3+5^3+3^3
function narcissistic( value ) {
 return value.toString() ==value.toString().split('').reduce((acc,el)=> (acc=acc+Math.pow(el,value.toString().length)) ,0)
}
