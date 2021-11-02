//const prompt = require('prompt-sync')() 


let a = prompt('Geben Sie Ihre erste Nummer ein');
const b = prompt('Geben Sie Ihren Operator ein. z. B. +,-,*,/');
let c = prompt('Geben Sie Ihre zweite Nummer ein.'); 

let result = null ;
 


if ( a[a.length -1] ===  '%' ) {
  // e ist z.B. "10%"  
  // Aufgabe: mach daraus "10" 
 a = a.substring(0, a.length - 1);
    // danach e mit parseFloat zu Number machen (und wieder in e speichern)
  a = parseFloat(a) 
  // danach geteilt durch 100 (und wieder in e speichern)
 a = a / 100 ;  
  
}
 
if ( c[c.length -1] ===  '%' ) {
  
 c = c.substring(0, c.length - 1);
   
  c = parseFloat(c) 
  
 c = a / 100 * c;  
  
}  

a = parseFloat(a) 
c = parseFloat(c)




switch (b) { 

 case ('+'):
 result = a + c;
 document.write('Ihre Antwort lautet : '+ result);
 break;

 case ('-'):
 result =a-c;
 document.write('Ihre Antwort lautet : '+ result);
 break;

 case ('*'):
 result = a * c;
 document.write('Ihre Antwort lautet : '+ result);
 break;   

 case ('/'):
 result = a / c;
 document.write('Ihre Antwort lautet : '+ result);
 break;

 default:
 document.write('Sie geben ein falsches Symbol ein!');
}
