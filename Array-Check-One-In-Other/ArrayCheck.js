
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
