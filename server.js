const express = require("express");
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use( express.json()); //needs to be above the other code blocks, allows us to use json
app.use( express.urlencoded({extended:true}));//needs to be above other code blocks, allows us to use url encoded data
// req is shorthand for request
// res is shorthand for response

// ---------------------user code block------------------------------------
const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};
    
const newUserEntry = createUser();
console.log(newUserEntry);


//---------------company code block------------------------------
const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker .location.state(),
            zipcode: faker.location.zipCode(),
            country:faker.location.country()
        }

    };
    return newCompany;
};
    
const newCompanyEntry = createCompany();
console.log(newCompanyEntry);



//-------------begining of practice code following wk 4 s 2 w caden----------------------------
// const user = [
//     {id:1,firstName:'Thomas',lastName:'vonCount',phoneNumber: 4846662012,email:'tom@bomb.com',password:""}
// ]

app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get("/api/companies/new", (req, res)=>{
    const company = createCompany();
    res.json(company);
})

app.get("/api/user/company", (req, res)=>{
    const user = createUser();
    const company = createCompany();
    const userCompany={
        user: user,
        company: company,
    };
    res.json(userCompany);
})



console.log("Yeah, dune!")
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );