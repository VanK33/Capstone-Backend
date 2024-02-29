# PickYourDishes project API
Welcome to the PickYourDishes project API! This repository houses the backend of my capstone project, a food recipe management application designed to streamline the process of discovering, organizing, and sharing culinary creations. It's where all the heavy lifting takes place, including database management, API endpoint handling, and authentication. Feel free to explore and contribute to this evolving project!

## Table of Contents
- [About](#about)
- [Key Features](#key-features)
- [How-to](#how-to)
- [API Documentation](#api-documentation)
- [Task List](#task-list)
- [Redirection](#redirection)

## About
This project serves as the backend for a food recipe management application, providing essential services such as database management, API endpoint, and authentication.

### Key Features
Database Migration & Seeding: Utliizes Knex for database shcema migration and seeding. Instruction can be found [here](https://knexjs.org/guide/)
### RESTful API Endpoints:
The backend provides a set of RESTful API endpoints for interacting with the food recipe management system. Below is an overview of the main endpoints:

**Public**
* `GET /public/` - Retrieve a list of all recipes in the database, including their associated details.
* `GET /public/:recipeId` - Retrieves the details of a specific recipe.
* `PUT /public/:recipeId` - Increments the like count for a specific recipe.

**Private**
* `GET /user/:userId` - Retrieves all recipes created by a specific user.
* `POST /user/:userId` - Create a new recipe based on user input, link with the userID in database
* `PUT /user/:userId/:recipeId` - Update a specific recipe with the ID
* `DEL /user/:userId/:recipeId` - Delete a specific recipe with the ID, unlink with the userID in database

**Authentication (wip)**
* `GET /auth/profile ` Retrieve the profile information of the authenticated user.
* `POST /auth/login` - Authenticate a user with a username nad password, and return a JWT token if successful
* `POST /auth/singup` - Create user based on input data, assign userID to database (under development)
implements JWT-based authentication to secure access to certain endpoints. Only authorized users can perform certain tasks, including individualized recipe management.

For detailed information on each endpoint, including request parameters and response formats, please refer to the [API Documentation Section](#api-documentation)


## How-to
**Project Initialization**
1. Clone the repository
```
git clone https://github.com/VanK33/PickYourDish-api.git
```
2. Install dependencies
```
cd PickYourDish-api
npm install
```
3. Set up the database:
```
npx knex migrate:latest
npx knex seed:run
```
4. Environment Setup:
create a .env file in the root directory with the following variables:
```
PORT=5050
DB_HOST=127.0.0.1
DB_NAME=mydatabase
DB_USER=myuser
DB_PASSWORD=mypassword
```
  NOTE: an .env.example is included in the root directory for your references

5. Start the server:
```
npm run start
npm run dev
```
  (optional) the dev mode provides nodemon monitoring support for development

## API Documentation
Base URL : until the backend is deployed, the base URL will be DB_HOST:PORT running locally
```
http://127.0.0.1:5050/
```

## Endpoints ##
#### Public ####

**Get Recipe List**
1. Method: `GET`
  * Endpoint: `/public`
  * Description: Retrieve a list of all recipes in the database, including their associated details.
  * Response: An array of recipe objects with their details.

**Get Recipe Details**
2. Method: `GET`
  * Endpoint: `/public/:recipeId`
  * Description: Retrieves the details of a specific recipe.
  * Parameters:
    * recipeId (path): The ID of the recipe whose details are being requested.
  * Response: A recipe object with its associated details.

**Edit Recipe Like**
3. Method: `PUT`
  * Endpoint: `/public/:recipeId`
  * Description: Increments the like count for a specific recipe.
  * Parameters:
    * recipeId (path): The ID of the recipe to be liked.
  * Response: The updated recipe object with the incremented like count.


#### Private ####
**Get User Recipes**
1. Method: `GET`
  * Endpoint: `/users/:userId`
  * Description: Retrieves all recipes created by a specific user.
  * Parameters:
    * userId (path): The ID of the user whose recipes are being requested.
  * Response: An array of recipes with their details.

**Add Recipe**
2. Method: `POST`
  * Endpoint: `/users/:userId`
  * Description: Adds a new recipe to the database.
  * Parameters:
    * userId (path): The ID of the user adding the recipe.
    * Request Body: JSON object containing the recipe details.
  * Response: A success message indicating the recipe was uploaded successfully.

**Update Recipe**
3. Method: `PUT`
  * Endpoint: `/users/:userId/:recipeId`
  * Description: Updates an existing recipe.
  * Parameters:
    * userId (path): The ID of the user updating the recipe.
    * recipeId (path): The ID of the recipe being updated.
    * Request Body: JSON object containing the updated recipe details.
  * Response: A success message indicating the recipe was updated successfully.

**Delete Recipe**
4. Method: `DELETE`
  * Endpoint: `/users/:userId/:recipeId`
  * Description: Deletes an existing recipe.
  * Parameters:
    * userId (path): The ID of the user deleting the recipe.
    * recipeId (path): The ID of the recipe being deleted.
  * Response: A success message indicating the recipe was deleted.

#### Authentication (wip) ####

**Sign Up**
  * Method: POST
  * Endpoint: `/signup`
  * Description: Registers a new user with a username, password, and contributor name.
  * Request Body:
    * contributor_name (string): The name of the contributor.
    * username (string): The username for the new user.
    * password (string): The password for the new user.
  * Response: A message indicating successful registration and a success flag.

**Log In**
  * Method: `POST`
  * Endpoint: `/login`
  * Description: Authenticates a user and provides a token for accessing protected routes.
  * Request Body:
    * username (string): The username of the user.
    * password (string): The password of the user.
  * Response: A token for the authenticated user.

**Get Profile**
  * Method: `GET`
  * Endpoint: `/profile`
  * Description: Retrieves the profile information of the authenticated user.
  * Headers:
    * Authorization: Bearer token obtained from the login endpoint.
  * Response: An object containing the user's profile information, including ID, username, and contributor name.


## Task List
- [ ] Complete this section, fill the to-do list


## Redirection
[PickYourDish - Front End](https://github.com/VanK33/PickYourDish)
