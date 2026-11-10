var express = require("express");
var cors = require("cors");

var app = express();

// allow requests from the front-end (different origin)
app.use(cors());

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

// respond to any request with the lessons as JSON
app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.json(lessons);
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});
