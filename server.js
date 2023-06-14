const express = require("express");
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.number.int()
    }
    return newUser
};

const createCompany = () => {
    const newComp = {
        _id: faker.number.int(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newComp
};

const newFakeUser = createUser();
const newFakeComp = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});
app.get("/api/companies/new", (req, res) => {
    res.json(newFakeComp);
});
app.get("/api/user/company", (req, res) => {
    res.json({ newFakeComp, newFakeUser });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));