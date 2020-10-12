let nday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

let dday = prompt("Day : "); //input sesuai deklarasi nday//
for (let i=0; i< nday.length; i++) {
  if (dday=== nday[i]) {
    if (i===6){
        console.log(`Tomorrow is ${nday[0]}`);      
    } else {
        console.log(`Tomorrow is ${nday[i+1]}`);
    }
  }
}