let numbers = [1,2,3,4,5];


const evn = (numbers) =>{
    let sum = 0;
    for(let count=0; count <  numbers.length; count++){

        if(numbers[count]%2==0){
           
             sum = sum + numbers[count] ;
        }
    }
   return sum;

}
console.log(evn(numbers))


