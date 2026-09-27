let clock = document.querySelector('#clock');
 new Date(2027,0,22).toLocaleString;


let current = setInterval(() => {
    const time = new Date().toLocaleTimeString();
clock.innerHTML = `<span>${time}</span>`
    
}, 1000);


