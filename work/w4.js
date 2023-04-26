let i;
let num = [1,2,3,4,5]; 


for (i = 2; i <= 6; i++) {

  num[i] = num[i - 2] + num[i - 1];
  console.log(num[i]);
}