var ObjCreator = function(a,b){
  if(a){this.a = a}else {this.a = 0};
  if(a){this.b = b}else {this.b=0};
  this.getTotal= function(){
    arrArg= Array.from(arguments);
    var sum = arrArg.reduce((res,el,id,ar)=>(res = res +el));
    return sum = this.a + this.b +sum ;
  }};
  
 var total = new ObjCreator ;
console.log(total.getTotal(5,7));

obj3 = {a:4,b:21}

console.log(total.getTotal.call(obj3,null,null));
