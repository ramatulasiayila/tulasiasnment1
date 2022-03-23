let arr = [2,3,4,5,6,7,8,9,1,10];
even =[];
odd = [];
arr.forEach((item)=>{
    if(item%2==0){
        even.push(item);
        console.log(even);
}
    else{
        odd.push(item);
        console.log(odd);
}
});