var express = require("express");
var cors = require("cors");
var path = require("path");

var app = express();

// allow requests from the front-end (different origin)
app.use(cors());

// read JSON sent in request bodies (e.g. new orders) into request.body
app.use(express.json());

var lessons = [
    { id: 1001, subject: "Maths",            location: "Hendon",        price: 100, availability: 5, image: "images/maths.svg",     alt: "Maths" },
    { id: 1002, subject: "English",          location: "Colindale",     price: 80,  availability: 5, image: "images/english.svg",   alt: "English" },
    { id: 1003, subject: "Science",          location: "Brent Cross",   price: 90,  availability: 5, image: "images/science.svg",   alt: "Science" },
    { id: 1004, subject: "Computer Science", location: "Golders Green", price: 120, availability: 5, image: "images/computing.svg", alt: "Computer Science" },
    { id: 1005, subject: "Art",              location: "Finchley",      price: 70,  availability: 5, image: "images/art.svg",       alt: "Art" },
    { id: 1006, subject: "Music",            location: "Mill Hill",     price: 85,  availability: 5, image: "images/music.svg",     alt: "Music" },
    { id: 1007, subject: "Drama",            location: "Edgware",       price: 75,  availability: 5, image: "images/drama.svg",     alt: "Drama" },
    { id: 1008, subject: "Football",         location: "Barnet",        price: 60,  availability: 5, image: "images/football.svg",  alt: "Football" },
    { id: 1009, subject: "Swimming",         location: "Wembley",       price: 95,  availability: 5, image: "images/swimming.svg",  alt: "Swimming" },
    { id: 1010, subject: "Chess",            location: "Kilburn",       price: 65,  availability: 5, image: "images/chess.svg",     alt: "Chess" }
];

// LOGGER middleware: prints every incoming request (time, method, url) to the console
app.use(function(request, response, next) {
    console.log(new Date().toISOString() + " " + request.method + " " + request.url);
    next();
});

// STATIC FILE middleware: /images/maths.svg returns the file from the images folder
var imagePath = path.resolve(__dirname, "images");
app.use("/images", express.static(imagePath));

// if express.static did not find the image, it calls next() and we end up here
app.use("/images", function(request, response) {
    response.status(404).send("Image not found: " + request.url);
});

// GET /lessons: returns all lessons as JSON
app.get("/lessons", function(request, response) {
    response.json(lessons);
});

// POST /orders: receives a new order from the front-end and logs it
app.post("/orders", function(request, response) {
    var order = request.body;
    console.log("New order from " + order.name + " (" + order.phone + "):");
    console.log(order.lessons);
    response.json({ message: "Order received" });
});

// any other request: 404
app.use(function(request, response) {
    response.status(404).send("Page not found");
});

// Render sets PORT itself; locally we fall back to 3000
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App started on port " + port);
});
