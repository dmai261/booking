const express = require('express');

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('public'));

app.get('', (req, res) => {

});

app.post('', (req, res) => {

});

app.listen(port, () => {
  'Currently listening on port 3004';
});
