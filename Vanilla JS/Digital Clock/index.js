
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
      
    if(minutes <10){
      minutes = "0" + minutes
    }
    else{
      minutes = "" + minutes
    }
    if(seconds <10){
      seconds = "0" + seconds
    }
    else{
      seconds = "" + seconds
    }
      
      var clockspan = document.getElementById("clockspan")
      clockspan.textContent = hours + ":" + minutes + ":" + seconds;
    }

   
    setInterval(displayTime, 1000);

