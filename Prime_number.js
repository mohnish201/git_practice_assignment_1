let a = 10


let count1 = 0
    for (let i = 1; i<=a.length; i++){
        if (i%a==0){
            count1++
        }
    }
   
    if (count1>2){
        console.log("It is prime")
    }else{
        console.log("It is not prime")
    }