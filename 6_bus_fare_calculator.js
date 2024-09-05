/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const fare = 800;

let age = 10;
let isStudent = true;

if(age <= 10){
    console.log('Your ticket is Free')
}

else if(age > 10 && age <= 59 && isStudent == true){
    // 50% DISCOUNT 
    const discount = (fare * 50) /100;
    const discountedPrice = fare - discount;
    console.log(discountedPrice);
}

else if(age >= 60){
    // 15% DISCOUNT 
    const discount = (fare * 15) / 100;
    const discountedPrice = fare - discount;
    console.log(discountedPrice);
}

else{
    console.log(fare);
}

