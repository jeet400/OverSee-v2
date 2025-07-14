const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("Gamerhost-official.zip");
const url = "https://www.dropbox.com/scl/fi/qkv0re33v9ulxzujrrivw/Gamerhost-official.zip?rlkey=rbpsfd5949l8wz0i97g77zmlp&st=52zz7vpf&dl=1";

https.get(url, response => {
  response.pipe(file);
  file.on("finish", () => {
    file.close();
    console.log("✅ Download complete.");
  });
});