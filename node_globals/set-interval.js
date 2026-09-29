const waitInterval = 1000;
let currentTime = 0;

const timerFinished = () => {
  clearInterval(interval);
  console.log("Timer finished");
};

const increaseTime = () => {
  currentTime += waitInterval;
  console.log(`Waiting ${currentTime / 1000} sec`);
  if (currentTime === 5000) timerFinished();
};

const interval = setInterval(increaseTime, waitInterval);
