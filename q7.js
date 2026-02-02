//db.employees.updateOne({},{})

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$set:{salary:3500}}
)