let express = require("express");
let app = express();

const port = 7400;

// storing API
let medals = {
    N : {
        name: "Norway",
        gold : 16,
        silver : 8,
        bronze: 13
    },
    
    D : {
        name: "Germany",
        gold : 12,
        silver : 10,
        bronze: 5
    },

    C : {
        name: "People's Republic of China",
        gold : 9,
        silver : 4,
        bronze: 2
    },

    USA : {
        name: "USA",
        gold : 8,
        silver : 10,
        bronze: 7
    },

    S : {
        name: "Sweden",
        gold : 8,
        silver : 5,
        bronze: 5
    },

    NL : {
        name: "Netherlands",
        gold : 8,
        silver : 5,
        bronze: 4
    },

    A : {
        name: "Austria",
        gold : 7,
        silver : 7,
        bronze: 4
    },

    CH : {
        name: "Switzerland",
        gold : 7,
        silver : 2,
        bronze: 5
    },

    RUS : {
        name: "Russian Olympic Committee",
        gold : 6,
        silver : 12,
        bronze: 14
    },

    F : {
        name: "France",
        gold : 5,
        silver : 7,
        bronze: 2
    }
}

app.use('/', express.static('public'));

// checking if the query is working
app.get('/medals', (req,res)=> {
    console.log(req.query.country);

    let countryQuery = req.query.country;
    for (countryName in medals) {
        if (countryName == countryQuery) {
            console.log("target");
        }
    }

    res.json(medals);
})

app.listen(port, ()=> {
    console.log(`listening at localhost:${port}`);
})
