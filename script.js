//buttons and counter text
     
      

    //    function a() {
    //     const counter=document.querySelector('#counter').innerHTML
    //     let value= parseInt(counter) + 1
    //     document.querySelector('#counter').innerHTML=value

           
    //    }
    //    function b() {
    //     const counter=document.querySelector('#counter').innerHTML
    //     let value= parseInt(counter) - 1
    //     document.querySelector('#counter').innerHTML=value

           
    //    }
    //    function c() {
    //     document.querySelector('#counter').innerHTML=0
    //    }

    let b=0;
    function a() {
        b=b+1;
        document.getElementById('counter').innerHTML=b;

           
       }
    
       function u() {
        b=b-1;
        document.getElementById('counter').innerHTML=b;

           
       }
       function c() {
        b=0;
        document.getElementById('counter').innerHTML=b;

           
       }