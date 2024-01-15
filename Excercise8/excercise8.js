/*
  MongoDb collection users with schema

  {
    email: string;
    first_name: string;
    last_name: string;
    roles: string[];
    last_connection_date: Date;
  }

Complete the query, you have a variable that contains a piece of text to search for. Search by exact email, starts with first or 
last name and only users logged in for 6 months

What should be added to the collection so that the query is not slow?
*/

let text = "rafael";
let lastSixMonths = new Date().setMonth(new Date().getMonth() - 6);

db.collections('users').find({
  email: text,
  $or: [
    { first_name: { $regex: `^${text}`, $options: 'i' } },
    { last_name: { $regex: `^${text}`, $options: 'i' } }
  ],
  last_connection_date: { $gte: lastSixMonths }
}
);


/*
In order to make this query not so slow, we could create index on the fields that we use to search.
By default, this index would be in a ascnedent way(alphabetically sorted, as are text). but for the case of last_connection_date,
the best is to sorted in a descendent way, so the last connections would stay on top, improving query performance
*/

db.collection('users').createIndex({ email: 1 });
db.collection('users').createIndex({ first_name: 1 });
db.collection('users').createIndex({ last_name: 1 });
db.collection('users').createIndex({ last_connection_date: -1 });
