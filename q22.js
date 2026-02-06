db.employees.find({
    name:"John Smith"
})

db.employees.find({
    name:{$regex:"John"}
})

db.employees.find({
    name:{$regex:"John", $options:"i"}
})