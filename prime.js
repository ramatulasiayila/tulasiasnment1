let i,c = 0;
let n = 9;
for(let i=1; i <= n;i++){

    if(n % i == 0){
        c++;
    }

}
if(c==2){
    console.log("prime number")
}
else{
    console.log("not prime number")
}

