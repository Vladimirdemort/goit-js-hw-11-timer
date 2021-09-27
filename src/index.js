const refs = {
  timerDays: document.querySelector('span[data-value="days"]'),
  timerHours: document.querySelector('span[data-value="hours"]'),
  timerMins: document.querySelector('span[data-value="mins"]'),
  timerSecs: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer{
    start() {
      const targetDate = new Date(2022, 0, 1).getTime();
      setInterval(() => {
        const currentTime = Date.now();
        const time = targetDate - currentTime;
        const timeComponents = timeConverter(time);
        
        updateClockFace(timeComponents);
      }, 1000);
    
    }
  };


  const timer = new CountdownTimer;

  timer.start()



function timeConverter(time) { 
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return {days, hours, mins, secs}
};

function updateClockFace(timeComponents) {
  refs.timerDays.textContent = `${timeComponents.days}`;
  refs.timerHours.textContent = `${timeComponents.hours}`;
  refs.timerMins.textContent = `${timeComponents.mins}`;
  refs.timerSecs.textContent = `${timeComponents.secs}`;
  
};