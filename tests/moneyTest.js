import { formatCurrency } from "../scripts/utils/money.js";
//grouping this test suite and naming it
console.log('text suite: formatCurrency');
//basic test cases
console.log('converts cents to dollers');
if( formatCurrency(2095)==='20.95'){
    console.log('passed')
}
else{
    console.log('failed');
}

//edge test cases
console.log('works with 0')
if(formatCurrency(0)==='0.00'){
console.log('passed')
}else{
    console.log('failed');
}
console.log('rounds up to the nearest cent')
//testing to see if the number is rounded
if(formatCurrency(2000.5)==='20.01'){
    console.log('pass');
}else{
    console.log('failed');
}