storageRequest=function(req,key,value){

        //check if parameter present else handle
        if (req === undefined){return false }
        if (key === undefined){return false }
        if (value === undefined){ value = null}

        if (req === "set"){
            if (typeof value === 'object'){
                var temp = JSON.stringify(value);
            }else { var temp = (value)?value.toString():"" ;} 
            sessionStorage.setItem(key, value); 
            return true;  
         }else if (req==="get") {
            if(sessionStorage.getItem(key)){
                    return JSON.parse(sessionStorage.getItem(key));       
            }else return null; 
        } else if (req==="remove") {
            if(sessionStorage.getItem(key)){
                sessionStorage.removeItem(key);
                return true;
            } 
        }else return false
         
    }
