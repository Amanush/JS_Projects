
    function displayTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      if(hours < 10) {
        hours = "0" + hours
        } 
      else{
        hours = "" + hours
    };
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      // Display the time in the "clock" div element
      
      var clockspan = document.getElementById("clockspan")
      clockspan.textContent = hours + ":" + minutes + ":" + seconds;
    }

    // Call the displayTime function every second
    setInterval(displayTime, 1000);

