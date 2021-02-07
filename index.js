const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const port = 3003;

const upload = multer({ dest: "uploads/" });

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => response.send("Hello World!"));

app.get("/upload", (req, res) =>
  res.sendFile(path.join(__dirname, "public/upload.html"))
);

app.post("/upload", upload.single("file"), function (req, res) {
  res.send(req.file.originalname + "ファイルのアップロードが完了しました。");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
