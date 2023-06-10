const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect("mongodb://127.0.0.1:27017/bank_stand2", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 

const seedUsers = [
    {
        name: 'Manohar',
        email: 'Manohar@gmail.com',
        credits: 100000
    },
    {
        name: 'Preeti',
        email: 'Preeti@gmail.com',
        credits: 70000
    },
    {
        name: 'Murlidhar',
        email: 'Murlidhar@gmail.com',
        credits: 95000
    },
    {
        name: 'Shashikala',
        email: 'Shashikala@gmail.com',
        credits: 86000
    },
    {
        name: 'Ravishankar',
        email: 'Ravishankar@gmail.com',
        credits: 75000
    },
    {
        name: 'Ramkumar',
        email: 'Ramkumar@gmail.com',
        credits: 69000
    },
    {
        name: 'Nageena',
        email: 'Nageena@gmail.com',
        credits: 30000
    },
    {
        name: 'Pankaj',
        email: 'Pankaj@gmail.com',
        credits: 21000
    },
    {
        name: 'Pramod',
        email: 'Pramod@gmail.com',
        credits: 53000
	},
    {
        name: 'Kusum',
        email: 'Kusum@gmail.com',
        credits: 53000
	}
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
