<p align="center"><img src="https://cdn.discordapp.com/attachments/968592701006180392/970422495280758824/unknown.png" height="200">
</p>

<h1 align="center">Lucid Proxy</h1>

<p align="center">An open-source proxy using the Ultraviolet backend by TN, Lucid's purpose is to end internet censorship.<br><br></p>

## Self Host
[![Deploy to Heroku](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/AstralService/Lucid)
[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/AstralService/Lucid)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AstralService/Lucid)

## Features
- CAPTCHA and hCAPTCHA support
- URL encoding settings to further hide activity when using Lucid
- Configuration all done on the client-side via service-workers
- Speed in comparison to other web proxies that fully proxy content
- Blacklist setting and more for easy hosting
- Security in mind and leak prevention
- Frequent updates to improve site support or fix security issues
- About:Blank cloaking to prevent screen viewing
- Invisible in your history to facilitate harder blocking
- Tab Cloaking to cloak your tab as something else

## Supported Sites
- [Youtube](https://www.youtube.com)
- [CAPTCHA/hCAPTCHA](https://www.captcha.net)
- [Spotify](https://spotify.com)
- [Discord](https://discord.com)
- [Reddit](https://reddit.com)
- [GforceNow](https://www.nvidia.com/en-us/geforce-now/)
- And more!

## Technologies Used
- Service Workers
- HTML, JS, CSS rewriting
- Parse5
- TailwindCSS
- Acorn.js

# Installation and Setup

Installation of Lucid is simple. You can view the BASIC & ADVANCED GUIDES below!

## Basic Guide (Replit, Heroku, Glitch etc.)

```sh
$ git clone https://github.com/AstralService/Lucid.git
$ npm install
$ node .
```
## Advanced Guide (VPS)
```sh
sudo iptables -L
sudo iptables-save > ~/iptables-rules
sudo iptables -P INPUT ACCEPT
sudo iptables -P OUTPUT ACCEPT 
sudo iptables -P FORWARD ACCEPT
sudo iptables -F
sudo iptables --flush

git clone  https://github.com/AstralService/Lucid.git
wget https://cdn.discordapp.com/attachments/964138562197008425/979587424692891660/caddy.sh
wget https://cdn.discordapp.com/attachments/964138562197008425/979587325900242984/Caddyfile (Replace google.com with your domains; Seperated with ,

sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
sudo apt update
sudo apt install caddy

curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt -y install nodejs

npm install pm2 -g

cd Lucid
pm2 start index.js

cd
tmux new -s caddy

chmod +x ./caddy.sh

sudo ./caddy.sh

ctrl + b

d

```


| Configuration | Options and Explanation |
| ------------- | ----------------------- |
| Prefix (Ultraviolet) | The prefix is the prefix that you want users to see. Ex: `https://lucidofficial.xyz/service`. The default prefix for Ultraviolet is `service`. |
| Prefix (Rhodium) | The prefix is the prefix that you want users to see. Ex: `https://lucidofficial.xyz/rhodium`. The default prefix for Rhodium is `rhodium`. |
| Bare   | The bare server is the bare server that you want UV to use. Ex: `https://incog.dev/bare` The default bare is `/bare/`. |

# Authors & Contributers

- [TitaniumNetwork (Creator of Ultraviolet)](https://github.com/titaniumnetwork-dev/Ultraviolet-Node)
- [LudicrousDevelopment (Creator of Rhodium)](https://github.com/LudicrousDevelopment/Rhodium)
- [Pyro (Owner/Founder of Astral Network)](https://github.com/pyroTM)
- [Zeltux (Developer for Astral Network)](https://github.com/ZeltuxDev)
- [Illusions (Developer for Astral Network)](https://github.com/illusionTBA)
- [ssd (Developer for Astral Network)](https://github.com/Avad3)
- [Arctiz (Community Manager for Astral Network)](https://github.com/Arctiz)
