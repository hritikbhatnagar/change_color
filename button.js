let d=document.querySelectorAll("button");
for(let x of d)
    {
        x.addEventListener("click",function(e){
            let a=Math.random()*256;
            a=Math.floor(a);
            let b=Math.random()*256;
            b=Math.floor(b);
            let c=Math.random()*256;
            c=Math.floor(c);
            x.style.backgroundColor=`rgb(${a},${b} ,${c})`;   
          
    });
    }