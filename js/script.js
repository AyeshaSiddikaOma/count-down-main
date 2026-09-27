let clock = document.querySelector('#clock');
let jonmo =  new Date(2027,0,22);


let current = setInterval(() => {
    const time = new Date();
clock.innerHTML = `<span>${time.toLocaleString()}</span>`

let diff = Number(jonmo)- Number(time);


// MiliSecond
let baki = document.querySelector('#baki')
baki.innerHTML = Math.floor(diff /1000)


// days
let days = Math.floor(diff /1000) /86400
let day =  document.querySelector('#days')
day.innerHTML = (days)


// hour
let due =  Math.floor(diff /1000)-10022400;
let hour = due/1440

console.log(hour)




    
}, 1000);




