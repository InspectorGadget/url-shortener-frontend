# Shortify Frontend

---
## 1. Prerequisites
- [x] Install [npm](https://www.npmjs.com/)
- [x] Install Node.js
- [x] Install Angular CLI
- [x] Clone Repository to local

## 2. Setup (Manually)
```
git clone git@github.com:InspectorGadget/url-shortener-frontend.git shortify-frontend
cd shortify-frontend
npm install
npm install -g @ionic/cli
ionic serve or ng serve
```

## 3. Setup (Docker)
```
docker build -t shortify-frontend .
docker run -p 8080:8100 -d --name shortify-frontend shortify-frontend
```