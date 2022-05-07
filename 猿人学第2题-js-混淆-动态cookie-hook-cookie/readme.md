hook cookie
    
    // 当 document 设置 cookie 的时候，将进入 debuuger
    Object.defineProperty(document, "cookie", {set:function(){debugger;}})

    Object.defineProperty(document, "cookie", {
        set:function(var){
                console.log(var);
                debugger;
            }
        })
