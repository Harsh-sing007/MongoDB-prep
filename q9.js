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

db.employees.updateMany({},
    {$push:{skills:"Python"}}
)


  db.employees.updateMany({},
    {$push:{skills:"Java"}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {
        $push:{skills:".Net"}}               
)   

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$addToSet:{skills:"Java"}}         // check duplicate if not their it will add
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},            //<- to remove
    {$pull:{skills:"Python"}}
)


