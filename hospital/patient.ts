
"use hospital;"


db.patients.insertMany(
    [
        {
            "firstName": "Jhon",
            "lastName": "Cean",
            "age": 31,
            "history": [
                {
                    "disease": "cold",
                    "treatment": "opt"
                }
            ]
        },
        {
            "firstName": "Micheal",
            "lastName": "Jackson",
            "age": 29,
            "history": [
                {
                    "disease": "cold",
                    "treatment": "opt"
                }
            ]
        },
        {
            "firstName": "Michelle",
            "lastName": "Clara",
            "age": 32,
            "history": [
                {
                    "disease": "cold",
                    "treatment": "opt"
                }
            ]
        }
    ]
);

db.patients.find().pretty();

db.patients.updateOne({ age: 32 }, {
    $set:
    {
        "firstName": "Nichole",
        "lastName": "Diana",
        "age": 33,
        "history":
            [
                { "disease": "fever", "treatment": "opt" }
            ]
    }
});

db.patients.find({ age: { $gt: 30 } });

db.patients.deleteMany({ "history.disease": "cold" });

