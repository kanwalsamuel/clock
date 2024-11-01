function updateClock(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour-hand') as HTMLElement;
    const minuteHand = document.getElementById('minute-hand') as HTMLElement;
    const secondHand = document.getElementById('second-hand') as HTMLElement;

    // Calculate the rotation for each hand
    const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30; // 360° / 12 hours = 30° per hour
    const minuteRotation = minutes * 6; // 360° / 60 minutes = 6° per minute
    const secondRotation = seconds * 6; // 360° / 60 seconds = 6° per second

    // Apply the rotation to each hand
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();  // Initial call to set the time immediately
