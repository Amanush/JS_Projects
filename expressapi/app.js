const express = require('express');
const app = express();
const PORT = 3000; 
const fs = require('fs')

app.use(express.json());

// Middleware to log requests to the console
app.use(function(req, res, next) {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Following code will server the response JSON data
app.get('/api/data', function(req, res)  {
  const jsonData = {
    message: 'Hello, this is the JSON data!',
    timestamp: new Date().toISOString(),
  };
  res.json(jsonData);
});

// Following code will send post request 
app.post('/api/echo',function (req, res)  {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty.' });
  }

  res.json(req.body);
});


// post request and save it to json file on disk
app.post('/api/save', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty.' });
  }

  // Save the data to a JSON file
  const dataToSave = JSON.stringify(req.body, null, 2);
  fs.writeFile('savedData.json', dataToSave, function (err)  {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).json({ error: 'Error saving data.' });
    }
    console.log('Data saved successfully.');
    // Send the data back as the response
    res.json(req.body);
  });
});

// one can use this command to send post request
//curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "age": 30}' http://localhost:3000/api/echo

//send json response through get

app.get('/api/save',function(req,res){
	fs.readFile('savedData.json','utf-8',function(err,data){
		if(err){
			throw err;
			res.send(err)
		}else{
			res.json(data)
		}
})
})

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

