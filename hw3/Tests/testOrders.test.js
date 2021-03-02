const express = require("express"); //import express
const routes = require('./../routes/orders');
const request = require("supertest");

const cheeseapp = express();//new instance
cheeseapp.use("/states", routes);

//External Citation:
//I used Source: https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
//for describe function

describe('testing_routes', () => {
    it("GET /orders was successful", async () => {
        const { body } = await request(cheeseapp).get("/states");
        expect(body).toEqual({error:null,
            data:[
            {topping:"cherry",quantity:"2"},
            {topping:"plain",quantity:"6"},
            {topping:"chocolate",quantity:"3"}
        ]
        });
    });

});