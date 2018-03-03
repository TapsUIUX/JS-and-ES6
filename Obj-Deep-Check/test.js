fac.sanitizeObj = function (obj, value) {
            var tempArray = value.split(".");
            tempArray.shift()
            var tempObj = {}
            // console.log("temp", tempArray);
            var val = null;
            tempArray.forEach(function(el, id, arr) {
                // console.log("OBJ : ",obj,"VALUE : " ,value , "id : ",id ,"el :" ,el, "length :" ,arr.length-1);          
                if (id == 0) {
                    if (!obj.hasOwnProperty(el) || obj[el] === null || obj[el] === "") {
                        val = null;
                        tempArray.splice(0, arr.length);//loop break
                    } else {
                        tempObj = Object.assign({}, obj[el]);
                        //console.log("temp-1",tempObj) 
                    }
                }
                if (id > 0 && id < arr.length - 1) {
                    if (!tempObj.hasOwnProperty(el) || tempObj[el] === null || tempObj[el] === "") {
                        val = null;
                        tempArray.splice(0, arr.length);//loop break
                    } else {
                        tempObj = Object.assign({}, tempObj[el]);
                        // console.log("temp-2",tempObj) 
                    }
                }
                if (id == arr.length - 1) {
                    if (!tempObj.hasOwnProperty(el) || tempObj[el] === null || tempObj[el] === "") {
                        val = null;
                        tempArray.splice(0, arr.length);//loop break
                    } else {
                        //console.log("temp-3",tempObj[el])  
                        val = tempObj[el];
                    }
                }

            })

            return val;
        }
