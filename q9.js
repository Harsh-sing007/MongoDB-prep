db.employees.find({
    location:"FL"
})


db.employees.updateOne(
    { email: "mike@gmail.com" },
    { $push: { location: "AZ" } }
)


db.employees.updateOne(
    { email: "mike@gmail.com" },
    { $pop: { location: 1 } }
)


//creating a new field skills and add python as array

