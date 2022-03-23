function fib(N){
    var A = 0;
    var B = 1;
    var C;
    console.log(A);
    console.log(B);
    
    for(var i=0; i <= N;i++)
    {
        C = A + B;
        A = B;
        B = C;
        console.log(C)
        

       
    }
}
fib(5)
