# OverSee-v2

**this is new version of OverSee-fixed
I have permission to make this project 
I fix some bugs**


## Installation

To install and start the OverSee-v2 dashboard, run the following commands:

```bash
wget -O Gamerhost-official.zip "https://www.dropbox.com/scl/fi/qkv0re33v9ulxzujrrivw/Gamerhost-official.zip?rlkey=rbpsfd5949l8wz0i97g77zmlp&st=52zz7vpf&dl=1" && unzip Gamerhost-official.zip```markdown
install node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

start

```bash
cd oversee-fixed && npm install && npm run seed && npm run createUser && node .

if not work

```bash
npm rebuild

if these doesn't work

```bash
rm -rf node_modules package-lock.json
npm install
