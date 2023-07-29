function generate() {
    var input = document.getElementById("numInput");
    var formattedInput = parseInt(input.value);

    if (!isNaN(formattedInput) && formattedInput >= 0) {
      var sequence = [0, 1];

      while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= formattedInput) {
        var nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
      }

      display(sequence);
    } else {
      displayErrorMessage("Please enter a valid non-negative number.");
    }
  }

  function display(sequence) {
    var output = document.getElementById("numOutput");
    output.innerHTML = "<h5>Fibonacci Sequence:</h5>";

    if (sequence.length > 2) {
      var sequenceList = document.createElement("ul");

      sequence.forEach(function(number) {
        var listItem = document.createElement("li");
        listItem.textContent = number;
        sequenceList.appendChild(listItem);
      });

      output.appendChild(sequenceList);
    } else {
      output.innerHTML += "<p>No Fibonacci numbers found within the given limit.</p>";
    }
  }

  function displayErrorMessage(message) {
    var output = document.getElementById("Output");
    output.innerHTML = "<div class='alert alert-danger'>" + message + "</div>";
  }