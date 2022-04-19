let express = require("express");
let app = express();

app.use('/', express.static('public'));

const port = 7600;

app.listen(port, ()=> {
    console.log(`listening at localhost:${port}`);
})
