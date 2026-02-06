db.employees.find({
    name:"John Smith"
})

db.employees.find({
    name:{$regex:"John"}
})

db.employees.find({
    name:{$regex:"John", $options:"i"}
})

//regex is case sensitive by default, we can make it case insensitive using options

db.employees.find({
    name:{$regex:"h$", $options:"i"}
})

db.employees.find({
    name:{$regex:"^M", $options:"i"}
})