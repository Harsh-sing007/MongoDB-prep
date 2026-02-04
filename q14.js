db.employees.find(
    {},
    {name:1,dept:"$department"}             //displaying dept intsead of department
)


db.users.insertOne({
    name:"Yah",
    age:20,
    address:{addr1:"50 Verdin Ct",city:"New York",state:"NY"},
})

db.users.insertOne({
    name:"Ria",
    age:20,
    address:{addr1:"25 Dr Lane",city:"JAX",state:"FL"},
})

db.users.insertOne({
    name:"diya",
    age:21,
    address:{addr1:"100 Main St",city:"Miami",state:"FL"},
})


db.users.find({},{
    name:1,
     age:1,
     "address.city":1})                     //displaying city from address field


db.users.find({},{
    name:1,
     age:1,
     city:"$address.city",                //displaying city and state from address field with new field names 

     state:"$address.state"
}
)                  

 //Add Skills array for all users and populate java, Python

db.users.updateMany(
    {},
    {
        $push:{Skills:["Java","Python"]}
    }
)

db.users.updateMany(
    {},
    {
        $set:{Skills:["Java","Python"]}
    }
)

db.users.updateOne(
  { name: "Ria" },
  { $addToSet: { Skills: ".NET" } }
)


db.users.find({},{
    _id:0,
    name:1,
    Skills:1
})                     //displaying name and Skills array

db.users.aggregate({$project:{_id:0,name:1,Skills:1}})    


db.users.aggregate([
    {$project:
   {
    _id:0, 
    name:1, 
    Skills:1
}
},
{$unwind:"$Skills"}
])   
