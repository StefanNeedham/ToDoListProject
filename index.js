import express from "express";

const app = express();
const port = 3000;

const date = new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'});

const todayList = [];
const workList = [];
// document.addEventListener("checked", ()=>{
//     console.log("Check event test success!");
// });

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {    
    res.render("index.ejs", {listHeader: date, list: todayList, route: "/"});
});

app.post("/", (req, res) => {
    (req.body.newItem.length > 0)?(todayList.push(req.body.newItem)):(null);
    res.render("index.ejs", {listHeader: date, list: todayList, route: "/"});
});

app.get("/work", (req, res) => {
    res.render("index.ejs", {listHeader: "Work List", list: workList, route: "/work"});
});

app.post("/work", (req, res) => {
    (req.body.newItem.length > 0)?(workList.push(req.body.newItem)):(null);
res.render("index.ejs", {listHeader: "Work List", list: workList, route: "/work"});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});