const { users } = require('../model/model'); // Import the correct model

'use strict';

module.exports = {
  up: (models, mongoose) => {
    return users.insertMany([  // Use the model directly
      {
        "_id": "672c94e9fca60326b10bc8c4",
        "name": "Admin",
        "email": "admin@gmail.com",
        "password": "$2b$10$ELV./ZaYNEEnzWN26ik7be1LP21w5pw9DKBW4XGTDha3Y3OIO4kH6",
        "userType": "Admin",
        "loginCount" : "1"
      }
    ]).then(res => {
      console.log(res.insertedCount);  // Prints "1"
    });
  },

  down: (models, mongoose) => {
    return users.deleteMany({
      _id: {
        $in: [
          "672c94e9fca60326b10bc8c4",
        ]
      }
    }).then(res => {
      console.log(res.deletedCount);  // Prints "1"
    });
  }
};
