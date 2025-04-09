const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.static("public"));

const expressions = ["😊", "😳", "😈", "🥺", "😍", "😴", "🤪", "😎"];

app.get("/metamong", (req,res) => {
    const randomFace = expression[Math.floor(Math.random() * expressions.length)];
    res.json({face: randomFace});
});

app.listen(PORT, () => {
    console.log(`running good on localhost!`)
})
