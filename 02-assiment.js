// Random Number Generator with Delay and Progress Indication:

function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Adjust the range as needed
  }
  
  // Function to display progress messages
  function displayProgress(secondsRemaining) {
    console.log(`Generating random number in ${secondsRemaining} seconds...`);
  }
  
  // Delay in seconds
  const delayInSeconds = 3;
  
  // Countdown function
  function countdown(seconds) {
    const intervalId = setInterval(() => {
      displayProgress(seconds);
  
      seconds--;
  
      if (seconds < 0) {
        clearInterval(intervalId);
  
        // Generate random number after the delay
        const randomNum = generateRandomNumber();
        console.log(`Random number generated: + ${randomNum}`);
      }
    }, 1000);
  }
  
  // Initiating the countdown with the specified delay
  countdown(delayInSeconds);