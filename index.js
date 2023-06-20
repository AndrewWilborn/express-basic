import express from "express";
const app = express();

app.use(express.json()) // allows posts to use json

// list of allowed requests
app.get("/test", (req, res) => {
    res.send("hello");
});

const fruits = ['apple', 'banana', 'cherry', 'orange']

app.get("/fruits", (req, res) => {
    res.send(fruits);
});

app.post("/fruits", (req, res) => {
    fruits.push(req.body.fruit);
    res.status(201).send(fruits); //makes things easier but is technically improper
});

// what port to listen to
app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});