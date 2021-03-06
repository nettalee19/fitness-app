const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const path = require('path');

const usersRoute = require('./routes/users.routes');
const activitiesRoute = require('./routes/activities.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoute)
app.use('/activities', activitiesRoute)
// app.use('/',(req,res)=>{
//   res.send({success : 'Bank API'})
  
// })



const server = 'mongodb+srv://nettalee19:dM_HqsyqT9K8LK.@cluster0.u9jns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
               
// Connect to db with mongoose
//mongoose.connect('mongodb://localhost/fitness-app', {
mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database connected")
})

const port = 8000;

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});