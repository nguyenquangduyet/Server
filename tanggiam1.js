var a = 3;
var b =5;
 //thực hiện phép tính 
 // a++ * b-- - --a + b++ //a =3 , b=5
 // 3 * b-- - --a + b++ // a= 4 , b=5
 // 3 * 5 - --a + b++ // a=4,b =4
 // 3 * 5 - 3 + b++ // a=3,b=4
 // 3 * 5 -3 + 4 = 16
 var c = a++ * b-- - --a + b++;
 console.log(c);
 console.log(a++);
 console.log(b--);
 console.log(--a);
 console.log(b++);
