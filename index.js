const express = require('express') //importing express
const cors = require('cors');  //importing cors
const app = express() // create an express app
const port = 5000  //define a port

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Muneeb hey')
})
app.get('/notes', (req, res) => {
  const notesData = [
    {
      text:"Muneeb's Twitch",
      link:"https://twitch.tv/codewithMuneeb"
    },
    {
      text:"Muneeb's Twitch",
      link:"https://twitch.tv/codewithMuneeb"
    },
  ]
  res.json(
    {
      notes:notesData  //good practise is that to send an object
    }
    // notesData for print an array
  );
})

app.listen(port, () => { //run the app on the port
  console.log(`Example app listening at http://localhost:${port}`)
})