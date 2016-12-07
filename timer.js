var currentTime = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;
};

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

// Interval function fired when button is clicked!
var alert1;
var alert2;
var alert3;
function breakOut() {
    alert1 = setInterval(firstBreak, 1000 * 60 * 20);
    alert2 = setInterval(secondBreak, 1000 * 60 * 30);
    alert3 = setInterval(thirdBreak, 1000 * 60 * 120);
};


// look into distance every 20min for 20sec
function firstBreak() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  };
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('BREAK TIME!', {
      icon: 'http://images.clipartpanda.com/animated-googly-eyes-dTr5bXpT9.png',
      body: "Look into the distance for 20 seconds.",
    });
  };
};

// blink for 30sec every 30min
function secondBreak() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  };
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('BREAK TIME!', {
      icon: 'http://images.clipartpanda.com/animated-googly-eyes-dTr5bXpT9.png',
      body: "Blink fast for 30 seconds.",
    });
  };
};

// rest 15 min every 2 hours
function thirdBreak() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  };
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('BREAK TIME!', {
      icon: 'http://images.clipartpanda.com/animated-googly-eyes-dTr5bXpT9.png',
      body: "Enjoy a 15 minute break from work :)",
    });
  };
};




