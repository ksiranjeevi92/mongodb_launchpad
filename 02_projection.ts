const db: any = {};

db.passengers.find({}, { name: 1, _id: 0 }).pretty();