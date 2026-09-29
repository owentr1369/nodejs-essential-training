const waitTime = 3000;
console.log(`Setting a ${waitTime} second delay`);
const timerFinished = () => console.log("Done");

setTimeout(timerFinished, waitTime);
