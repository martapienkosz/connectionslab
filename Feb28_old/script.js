let express = require('express');
let app = express();

let campusCats = {
    laalo : {
      colour : "orange",
      hangout : "D2",
      age: 3
    },
    grumpy : {
      colour : "black",
      hangout : "C2", 
      age : 7
    },
    snow : {
      colour : "white",
      hangout : "A5",
      age: 5
    }
  }


app.use("/", express.static('public'));

app.get("/about", (req,res) => {
    res.send("this page is about me")
})

app.get("/cats", (req,res) => {
    let minAge = req.query.ageGreaterThan;
    olderCampusCats = {};

    for (catName in campusCats) {
        let cat = campusCats[catName];
        if (cat.age >= minAge) {
            olderCampusCats[catName] = cat;
        }
    }

    if(minAge) {
        res.json(olderCampusCats);
    } else {
        res.json(campusCats);
    }
})

app.get("/cats/:cat", (req,res) => {
    console.log(req.params.cat);
    let name = req.params.cat;
    if(!campusCats[name]) {
        res.json({error : "data not available"})
    } else {
        res.json(campusCats[name]);
    }
    console.log(campusCats[name]);
})

app.listen(8000, () => {
    console.log("the server is up and running")
})

