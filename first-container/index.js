const express = require('express');
const { getPokemons } = require('./pokeAPI.js');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    getPokemons(151).then((data) => {
        res.status(200).json(data)
    }).catch((error) => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    );
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
}
);
