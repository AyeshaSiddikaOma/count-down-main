let clock = document.querySelector('#clock');
let jonmo =  new Date(2027,0,22);


let current = setInterval(() => {
    const time = new Date();
clock.innerHTML = `<span>${time.toLocaleString()}</span>`

let diff = Number(jonmo)- Number(time);

let baki = document.querySelector('#baki')
baki.innerHTML = Math.floor(diff /1000)

console.log( Math.floor(diff /1000) /86400)



    
}, 1000);




