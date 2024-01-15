/*

MongoDb collection users with schema

  {
    email: string;
    first_name: string;
    last_name: string;
    roles: string[];
    last_connection_date: Date;
    addresses: {
        zip: number;
        city: string;
    }[]:
  }

*/
//1.- Update document ObjectId("5cd96d3ed5d3e20029627d4a"), modify only last_connection_date with current date
db.collections('users').updateOne(
    { "_id": ObjectId("5cd96d3ed5d3e20029627d4a") },

    { $set: { "last_connection_date": new Date() } }
);

//2.- Update document ObjectId("5cd96d3ed5d3e20029627d4a"), add a role admin
db.collections('users').updateOne(
    { "_id": ObjectId("5cd96d3ed5d3e20029627d4a") },

    {
        $push: {
            "roles": "admin"
        }
    }

);

//3.- Update document ObjectId("5cd96d3ed5d3e20029627d4a"), modify addresses with zip 75001 and replace city with Paris 1
db.collections('users').updateOne(
    {
        "_id": ObjectId("5cd96d3ed5d3e20029627d4a"),
        "addresses.zip": 75001
    },

    { $set: { "addresses.$.city": "Paris 1" } }
);



