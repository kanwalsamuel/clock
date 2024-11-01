function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var hourHand = document.getElementById('hour-hand');
    var minuteHand = document.getElementById('minute-hand');
    var secondHand = document.getElementById('second-hand');
    // Calculate the rotation for each hand
    var hourRotation = (hours % 12) * 30 + (minutes / 60) * 30; // 360° / 12 hours = 30° per hour
    var minuteRotation = minutes * 6; // 360° / 60 minutes = 6° per minute
    var secondRotation = seconds * 6; // 360° / 60 seconds = 6° per second
    // Apply the rotation to each hand
    hourHand.style.transform = "rotate(".concat(hourRotation, "deg)");
    minuteHand.style.transform = "rotate(".concat(minuteRotation, "deg)");
    secondHand.style.transform = "rotate(".concat(secondRotation, "deg)");
}
// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time immediately
