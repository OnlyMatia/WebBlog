import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts = [];
// Odredit koji je staticni folder tj koji ce sadrzavat staticne fileove kao style.css
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("home.ejs", {posts});
});

app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/create", (req, res) => {
    const title = req.body["title"];
    const content = req.body["content"];
    const postObj = {title:title, content:content};

    posts.push(postObj);
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


