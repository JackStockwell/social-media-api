# social-media-api

![Github top language](https://img.shields.io/github/languages/top/JackStockwell/social-media-api)
[![Link to node Js version download](https://img.shields.io/badge/node-v16.18.0-green)](https://nodejs.org/download/release/latest-v16.x/)

## Screenshot

![Screen gif of the APP being used](/screencap.gif)

## Description

A small project involving MongoDB and Moongoose NPM. It allows backend creation of a new user, their 'thoughts'. You can also has add reacations to the their thoughts, which act as comments. Has all 4 CRUD methods.

This is my first back-end RESTful API made using MongoDB and Mongoose package. Using past expereience of using mySQL and Sequelize along with my now several projects of working with express, I was able to create this in good time. It has increased my knowledge of MongoDB and Mongoose. 

A struggle however was the creation of the seed data, as it takes a different approach to mySQL as the objectIDs are generated. However once this was solved it was relatively easy to develop.

I do believe however i could make it more intuitive such as adding a friend also adds you to their list etc.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation 

I would recommend watching my full guide [here](https://drive.google.com/file/d/1u5WADCq0ukM81_ZcOcL1-QbQxYjpcW9w/view) for a more streamlined experience. If not, see below.

### Written Tutorial

You will require [node.js v16.18.0](https://nodejs.org/download/release/latest-v16.x/) in order for this to work.

You will also need to install mongoDB. Installation guide from the official [website](https://www.mongodb.com/try/download/shell)

Once done, continue below.

To run the application, you will need to first clone it to your local client, once cloned open the code is VS Code and open your terminal. 

### NPM

Place the following commands into you CLI.

```bash
npm i
```

You will now have the necessary NPMs needed to run the application.

You'll be taken back to the standard terminal, the below command will seed the database with some starter items.

```sh
npm run seed
```

### Running the application

The below will run the application!

```sh
npm run start
```

You will need an external tool like [Postman](https://www.postman.com/) or Insomnia(https://insomnia.rest/) to interact with the API.

## License

[![GitHub](https://img.shields.io/github/license/JackStockwell/employee-tracker)](https://unlicense.org/)

Infomation on the Unlince can be found [here](https://unlicense.org/)

## Credits

[Mongoose Doc](https://mongoosejs.com/docs/)

[MongoDB official](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)

