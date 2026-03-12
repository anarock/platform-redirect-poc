const express = require("express");
const app = express();

app.get("/file", (req, res) => {
    const redirectURL = "https://picsum.photos/800/600";
    console.log("Redirecting to image");
    res.redirect(302, redirectURL);
});

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})