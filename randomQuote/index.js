var quoteArray = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "In a gentle way, you can shake the world. - Mahatma Gandhi",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Unity in diversity is India's strength. - Prime Minister Narendra Modi",
    "Hard work is more important than Harvard. - APJ Abdul Kalam",
    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action. - APJ Abdul Kalam",
    "Education is the most powerful weapon which you can use to change the world. - APJ Abdul Kalam",
    "My message, especially to young people is to have courage to think differently, courage to invent, to travel the unexplored path, courage to discover the impossible and to conquer the problems and succeed. - APJ Abdul Kalam",
    "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck. - APJ Abdul Kalam",
    "If you want to shine like a sun, first burn like a sun. - APJ Abdul Kalam",
    "The power of youth is the common wealth for the entire world. The faces of young people are the faces of our past, our present and our future. No segment in the society can match with the power, idealism, enthusiasm and courage of the young people. - APJ Abdul Kalam",
    "We should not give up and we should not allow the problem to defeat us. - APJ Abdul Kalam",
    "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents. - APJ Abdul Kalam",
    "Freedom is not worth having if it does not include the freedom to make mistakes. - Mahatma Gandhi",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "An ounce of practice is worth more than tons of preaching. - Mahatma Gandhi",
    "The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi",
    "A man is but the product of his thoughts. What he thinks, he becomes. - Mahatma Gandhi",
    "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty. - Mahatma Gandhi",
    "Satisfaction lies in the effort, not in the attainment. Full effort is full victory. - Mahatma Gandhi",
    "The best way to predict your future is to create it. - Dr. APJ Abdul Kalam",
    "Your aspirations are your possibilities. - Dr. APJ Abdul Kalam",
    "Failure will never overtake me if my determination to succeed is strong enough. - Dr. APJ Abdul Kalam",
    "Thinking is progress. Non-thinking is stagnation of the individual, organisation and the country. Thinking leads to action. Knowledge without action is useless and irrelevant. Knowledge with action, converts adversity into prosperity. - Dr. APJ Abdul Kalam",
    "Small aim is a crime; have great aim. - Dr. APJ Abdul Kalam"
  ];

  function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quoteArray.length);
    var quote = quoteArray[randomNumber];

    var quoteElement = document.getElementById("quoteBody");
    quoteElement.innerText = quote;
  }