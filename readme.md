Start
npm run dev


to create folder 
mkdir  folderName

file in backword directory
type nul > app.js

move directory forword 
cd fileName

move directory backword
cd ..


Database => collection =>
db => Modules (schecma)

API data
http://localhost:3000/mens


~~~~~~~~~~~~~~~~~~~~~~~~~ POST Request using express, mongoose ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
Postman
Step 1 collection -> Make Post request
Step 2 Body -> Raw -> Json

Input
Post request    http://localhost:3000/mens
{
        "ranking":4,
        "name":"kapil",
        "dob": "2 oct 1997",
        "country":"punjab",
        "score":"1600"
}

Output
       {
            "ranking": 4,
            "name": "kapil",
            "dob": "1997-09-02 T18:30:00.000Z",
            "country": "punjab",
            "score": 1600,
            "event": "100m",
            "_id": "64415e725eb3cae68bc391ee",
            "__v": 0
        }



~~~~~~~~~~~~~~~~~~~~~~~~~ Get Request using express, mongoose ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
Postman
Step 1 collection -> Make GET request

Input
GET request    http://localhost:3000/mens


Output
[
    {
        "_id": "64415502fe337359b83ea89e",
        "ranking": 1,
        "name": "Deepak",
        "dob": "1994-09-04T18:30:00.000Z",
        "country": "IND",
        "score": 1477,
        "event": "100m",
        "__v": 0
    },
    {
        "_id": "64415d406dcc2e6e22c3aca7",
        "ranking": 2,
        "name": "Kavya Gauttam",
        "dob": "1997-10-09T18:30:00.000Z",
        "country": "USA",
        "score": 1300,
        "event": "100m",
        "__v": 0
    },
    {
        "_id": "64415df55eb3cae68bc391e6",
        "ranking": 3,
        "name": "bittu",
        "dob": "1997-11-09T18:30:00.000Z",
        "country": "GOA",
        "score": 1500,
        "event": "100m",
        "__v": 0
    },
    {
        "_id": "64415e725eb3cae68bc391ee",
        "ranking": 4,
        "name": "kapil",
        "dob": "1997-10-01T18:30:00.000Z",
        "country": "punjab",
        "score": 1600,
        "event": "100m",
        "__v": 0
    }
]



~~~~~~~~~~~~~~ GET request for individual using express, mongoose ~~~~~~~~~~~~ 
Postman
Step 1 collection -> Make GET request for individual

GET request for individual
http://localhost:3000/mens/64415502fe337359b83ea89e

input
64415502fe337359b83ea89e

output
{
    "_id": "64415502fe337359b83ea89e",
    "ranking": 1,
    "name": "Deepak",
    "dob": "1994-09-04T18:30:00.000Z",
    "country": "IND",
    "score": 1477,
    "event": "100m",
    "__v": 0
}


~~~~~~~~~~ Patch Request for individual update using express, mongoose ~~~~~~~~~~~~~~~~
Postman
Step 1 collection -> Make Patch request
Step 2 Body -> Raw -> Json
Input
{
    "country":"UK"
}

Output
{
    "_id": "64415502fe337359b83ea89e",
    "ranking": 1,
    "name": "Deepak",
    "dob": "1994-09-04T18:30:00.000Z",
    "country": "UK",
    "score": 1477,
    "event": "100m",
    "__v": 0
}