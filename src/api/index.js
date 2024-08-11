// var express = require('express');
// var router = express.Router();

// const objectId = require('mongodb').ObjectId;

// router.get('/cities', (req, res, next) =>{
//   req.collection.find({})
//   .toArray()
//   .then( results => res.json(results))
//   .catch( error => res.send(error));
// })

// router.post('/city', (req, res, next) =>{
//   const {name, streets } = req.body; // Extract Information from req body
//   if(!streets || !name){
//     return res.status(400).json({
//       message: 'Streest and name are required',
//     });
//   }

//   const payload = { name , streets};
//   req.collection.insertOne(payload)
//     .then(result => res.json(result))
//     .catch(error => res.send(error));
// });

// router.delete('/city/:id', (req, res, next) =>{
//   const {id} = req.params;
//   const _id = ObjectId(id);
//   req.collection.deleteOne({_id})
//     .then( result => res.json(result))
//     .catch(error => res.send(error));
// });

// module.exports = router;

const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes');

const app = express()

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/users', userRoutes);


