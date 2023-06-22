const axios = require('axios');
//?key=${KEY}
const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const { id, name, status, species, gender, origin, image } = response.data;
        res.writeHead(200, { 'Constent-Type': 'application/json'});
        res.end(JSON.stringify({ id, name, status, species, gender, origin, image }));
    })
    .catch((error) => {
        res.writeHead(500, { 'Constent-Type': 'text/plain'});
        res.end(error.message);
    })
};

module.exports = getCharById;