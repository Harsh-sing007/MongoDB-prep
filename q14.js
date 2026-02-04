db.employees.find(
    {},
    {name:1,dept:"$department"}             //displaying dept intsead of department
)


db.users.insertOne({
    name:"Yah",
    age:20,
    address:{addr1:"50 Verdin Ct",city:"New York",state:"NY"},
})