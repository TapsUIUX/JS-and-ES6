
//Author Taps

let Aarray = [ ];
let Barray = [ ];
var status = 0;
var check = function(Aarray,Barray){	 
	Aarray.forEach(function(el,idx,arr){	 
		Barray.forEach(function(el2,idx2,arr2){	 
			if (el == el2){
				status = Number(status)+Number(1);			 
			} 	 
		});		
		 
	}) 

	if(status == Aarray.length){		
		return true ;
	}else 
	{ return false ;}
	
}
 

console.log(check([5,8,1,8 ],[1,2,5,8,30]));




 arr1 = [1,7,3];
  arr2 = [1,2,3,4];
function check(arr1,arr2){
   var stat = 1;
   arr1.forEach( (el,id,arr)=>{     
   if (  arr2.some((el2,id2,ar2)=>(el2==el)) == false )
   { stat = 0 ;}  }) //forEach-ends ;
  if (stat==0){return false;}else {return true}
  }//check-ends

 console.log(check(arr1,arr2))
