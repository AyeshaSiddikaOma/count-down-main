let clock = document.querySelector('#clock')
let birth = new Date()


let current = setInterval(() => {
    const time = new Date().toLocaleTimeString();
clock.innerHTML = `<span>${time}</span>`
    
}, 1000);