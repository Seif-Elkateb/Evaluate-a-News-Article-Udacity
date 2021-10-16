# Evaluate a News Article with Natural Language Processing
## Overview

This project allows users to perform Natural Language Processing (NLP) on articles or blog posts  from other websites with the help of the [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis).

The user enters the link of the blog post or article and MeaningCloud API perform sentiment analysis on the contents of that article and send back the result to the user.


## Build Tools used on the project

* Webpack
* Babel
* [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis)
* Javascript
* Node
* Express
* Google Workbox 
* Jest 

## Instructions  :memo:

### Project Setup :computer:
1. Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all 
dependencies. 

2. Make sure you have Node and Npm installed

```
node -v 
npm -v
```
3. Move to the project directory and type Npm install 

```
cd project_directory
npm install
```
4. This will install Devlopment dependencies including babel,jest, webpack plugins and loaders in addition to Production dependencies like Express and middleware

5. Get Api key from [MeaningCloud](https://www.meaningcloud.com/)

6. Create a file called .env in the project root directory

7. Create a variable called key and set it equal to your private unique key like this :
```
key=***********************
```
8.  At this point you have finished configuring everything and ready to run the project

### Running the Project :star:

1. Enter the following script to start the webpack dev server and it should run at port 8080 
```
npm run dev
```
2. Enter the following script to run the webpack production mode and create the dist folder that express server will point to 
```
npm run prod
```
3. After that run the Express server at port at port 8081 by typing this script
```
npm run start 
```
4. the server will be ready to accept requests at port 8081 and the main page can be accessed on localhost:8080




