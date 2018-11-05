//"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

//When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

//All numbers in the list are positive numbers and the list can be e


function orderWeight(str){
   let groupArr =[];
   let inputArr = str.split(' ');
   let weightArr = inputArr.map(el=>Number(el.split('').reduce((acc,el)=>Number(acc)+Number(el),0)))
   weightArr =  new Set(weightArr);
   weightArr = [...weightArr];
   weightArr.sort((a,b)=>a-b);
   weightArr.forEach(el1 => {
       groupArr.push(
           inputArr.filter(el2=>el2.split('').reduce((acc,el3)=>Number(acc)+Number(el3),0)===el1)
           )
   });

   final=[];
  console.log(weightArr,inputArr,groupArr)
   groupArr.forEach(el=> final=[...final,...el.sort()])
   //    return final;
  // console.log('weightArr : ',final);

   return final.join(' ');
}


//sol2
function orderWeight(s) {
  return s.split(' ').sort((a,b)=>a.split('').reduce((pv,cv)=>pv+ +cv,0)-b.split('').reduce((pv,cv)=>pv+ +cv,0)||(a>b?1:-1)).join(' ');
}

//sol3
function orderWeight(strng) {
  return strng.split(" ").sort(function f(a, b){ 
    return eval(a.split("").join("+")) - eval(b.split("").join("+")) + ([a, b].sort()[1] == a ? 0.1 : -0.1);
  }).join(" ");
}



//sol4
function orderWeight(s) {
  return s.split(' ').sort((a,b) => sum(a) - sum(b) || a.localeCompare(b)).join(' ');
}
function sum(s) { return s.split('').reduce((s,v) => s + +v, 0); }



//sol5
function orderWeight(strng) {
    return strng.split(' ').sort(function(a, b) {
        let v1 = Array.prototype.reduce.call(a, function(i, j) {return ~~i + ~~j})
        let v2 = Array.prototype.reduce.call(b, function(i, j) {return ~~i + ~~j})
        if (v1 > v2) return 1
        if (v1 < v2) return -1
        if (v1 == v2) {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        }
    }).join(' ')
}
