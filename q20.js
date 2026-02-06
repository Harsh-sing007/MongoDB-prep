db.employees.insertOne(
    {
        name:"monica"
    })
db.employees.aggregate(
   [
    
        {$project:{_id:0,name:1}},
        {$sort:{name:1}},
    ], {collation:{locale:"en",strength:2}},
)
//we display case sensitive data using collation
