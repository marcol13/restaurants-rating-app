<div align="center">

  <a href="https://github.com/akai-org/planer-podrozy">

# Restaurant Rating App

  </a>

  <p align="center">
    A simple application to rate your experience with restaurants!
    <br />
    <i>Project for Advanced Internet Applications</i>
    <br/>
    <b>Date of completion: 📆 01.05.2022 📆</b>
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

## Demo

### Main page
![image](https://github.com/marcol13/restaurants-rating-app/assets/56632321/be7856e1-8617-407e-8474-429e42bb7781)

### Adding new restaurant
![image](https://github.com/marcol13/restaurants-rating-app/assets/56632321/b9e766c8-a235-4f59-bb38-fb7a80e0d56c)

### Sorting and filtering
![image](https://github.com/marcol13/restaurants-rating-app/assets/56632321/55fe8c06-4889-4aaa-80a7-5ce4bd896ed9)

### Editing data
![image](https://github.com/marcol13/restaurants-rating-app/assets/56632321/9cc4b427-9457-458e-a606-2f450d82922f)


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
4. Start backend project: `npm start`
5. Go to ui project directory: `cd ../ui`
6. Install frontend dependencies: `npm install`
7. Run project: `npm run dev`

### With Docker

In order to run the project in a docker container, you must run a `docker daemon` on your computer and then type command:

```
docker compose up 
```

By default, docker will run two containers on your computer:
- Frontend on port 4173
- Backend on port 8002
