//db.employees.updateOne({},{})

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$set:{salary:3500}}
)

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$inc:{salary:3500}}    //increment
)

db.employees.updateMany(
    {},
    {$inc:{salary:1000}}    
)  

db.employees.updateMany(
    {},
    {$set:{points:1}}    
)

db.employees.updateOne(
    {
        email:"brain@gmail.com"},
        {$set:{points:10}}
);


db.employees.updateOne(
    {
        email:"abc@gmail.com"},
        {$set:{points:10}},
        {upsert:true}
);

db.employees.find({},{name:1})


db.employees.deleteOne({email:"abc@gmail.com"})

