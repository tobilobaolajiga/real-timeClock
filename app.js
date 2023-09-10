const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');
const hr = document.querySelector('.hr');
const min = document.querySelector('.min')

function setTime () {
    const now = new Date ();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90;
    second.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360) + 90;
    minute.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) *360) + 90;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;

    hr.textContent = now.getHours();
    min.textContent = now.getMinutes();
}

setInterval(setTime,1000);