import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts = [];
// Odredit koji je staticni folder tj koji ce sadrzavat staticne fileove kao style.css
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


