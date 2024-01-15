/*
Exercice: MongoDb aggregate (5 points)
MongoDb collection users with schema

  {
    email: string;
    first_name: string;
    last_name: string;
    roles: string[];
    last_connection_date: Date;
  }

Complete the aggregation so that it sends user emails by role ({_id: 'role', users: [email,...]})

db.collections('users').aggregate(...);
*/

db.collections('users').aggregate([

    { $unwind: "$roles" },

    {
        $group: {
            _id: "$roles",
            users: { $push: "$email" }
        }
    }
]);

