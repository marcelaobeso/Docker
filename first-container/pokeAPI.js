const https = require('https');

async function getPokemons(number) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'pokeapi.co',
            path: `/api/v2/pokemon?limit=${number}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

module.exports = { getPokemons };