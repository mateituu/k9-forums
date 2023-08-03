# K9 Forums

![AGPL License](https://img.shields.io/badge/License-AGPL_V3.0-blue)
![Language](https://img.shields.io/badge/Language-TypeScript-red)

<div align="center">
    <img src="./assets/showcase/home.png" width="500" />
</div>

<div align="center">
    <img src="./assets/showcase/post.png" width="500" />
</div>

## About

K9 Forums is a free and open-source forum software built with NestJS and NextJS, using TypeScript. K9 Forums is meant to be simple solution to forums while offer ease-of-use and configurability.

## Credits
- Thank you to <a href="https://github.com/uiwjs">uiwjs</a> for react-markdown preview and editor

## Installation

This project is WIP and not finished. Run at your own risk.

*Docker support is being worked on*

```bash
git clone https://github.com/CKAY-9/k9-forums.git



### Backend setup ###
cd backend
npm install

# env setup
export DATABASE_URL=postgres://my_postgres_login

# running
npm run build
npm run start



### Frontend setup ###
cd frontend
npm install

# env setup
export NEXT_PUBLIC_API_URL=http://localhost:3001
export NEXT_PUBLIC_CDN_URL=http://localhost:5000

# running
npm run build
npm run start



### CDN setup ###
cd cdn

# python setup
py -3 -m venv .venv
.venv\Scripts\activate
pip install flask
pip install markupsafe
pip install werkzeug
pip install -U flask-cors

# running
flask --app main run

### WebSocket Server ###
# not avaliable

```
    