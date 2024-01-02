<div align="center">

  <a href="https://github.com/akai-org/planer-podrozy">

# Restaurant Rating App

  </a>

  <p align="center">
    A simple application to rate your experience with restaurants!
    <br />
    <i>Project for Advanced Internet Applications</i>
    <b>Date of that project: 🗓 01.05.2022 🗓</b>
  </p>

</div>

## About The Project

The Restaurant Rate App is a simple and intuitive application designed to simplify the process of discovering, adding, and rating restaurants. Whether you're a foodie looking to share your favorite dining spots or a traveler in search of local gems, this app has you covered.

## Features

- Add new restaurants to the database
- Rate and review restaurant
- Search for restaurants by name
- Sort results by name and average rating
- View restaurant details including ratings and reviews
- Add image for restaurant info
- Edit and delete restaurant ratings and reviews

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

## Getting Started

If you have Docker, you can use the tutorial described <a href="#with-docker">here</a>. 

### Without Docker

To get started with the restaurant rating app, follow these steps:

1. Clone the repository: `git clone https://github.com/marcol13/restaurants-rating-app`
2. Go to `api` directory: `cd api`
3. Install the dependencies: `npm install`
4. Create `.env` file like `.env.example`
5. Start backend project: `npm start`
6. Go to project root directory: `cd ..`
7. Install frontend dependencies: `npm install`
8. Create `.env` file like `.env.example`
9. Run project: `npm run dev`

### With Docker

In order to run the project in a docker container you must run a `docker daemon` on your computer and then type command:

```
docker compose up 
```

By default, docker will run two containers on you computer:
- Frontent on port 4173
- Backend on port 8002