# Posh Plants Web Store
Created using MERN stack

## Initial Setup
The following shows you how to scaffolding the project after cloning the repo:

**Dependencies**

Run `$ npm install` at project root directory to install necessary dependencies for frontend, then also run it in /frontend directory to install frontend dependencies.

**Env**

This app requires an `.env` file to run.
Create one in project root directory, paste in the template below and modify values wrapped using `/ /`.

```
NODE_ENV = development

PORT = 5000

MONGO_URI = /Mongodb address/

JWT_SECRET = /Json web token secret/
```

If the port is somehow occupied, change it to any other available port.

## Scripts
**Start dev server (frontend and backend)**

Run at root folder: 
`$ npm run dev`

**Seperate scripts**

Backend server: 
`$ npm run server`

Frontend view: 
`$ npm run client`

