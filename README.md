# PickYourDishes project API

## About
This project serves as the backend for a food recipe management application, providing essential services such as database management, API endpoint, and authentication.

### Key Features
Database Migration & Seeding: Utliizes Knex for database shcema migration and seeding. Instruction can be found [here](https://knexjs.org/guide/)
### RESTful API Endpoints:
The backend provides a set of RESTful API endpoints for interacting with the food recipe management system. Below is an overview of the main endpoints:

**Public**
* `GET /public/` - Retrieve a list of all recipes in the database
* `GET /public/:recipeId` - Retrieve a specific recipe with the ID
* `PUT /public/:recipeId` - Upate the like count for a specific reipce with the ID

**Private**
* `GET /user/:userId` - Retrieve a list of all recipes in the database from this userID 
* `POST /user/:userId` - Create a new recipe based on user input, link with the userID in database
* `PUT /user/:userId/:recipeId` - Update a specific recipe with the ID
* `DEL /user/:userId/:recipeId` - Delete a specific recipe with the ID, unlink with the userID in database

**Authentication (wip)**
* `GET /auth/profile ` Retrieve the profile information of the authenticated user.
* `POST /auth/login` - Authenticate a user with a username nad password, and return a JWT token if successful
* `POST /auth/singup` - Create user based on input data, assign userID to database (under development)

implements JWT-based authentication to secure access to certain endpoints. Only authorized users can perform certain tasks, including individualized recipe management.
## How-to

## Redirection
[PickYourDish - Front End](https://github.com/VanK33/PickYourDish)
