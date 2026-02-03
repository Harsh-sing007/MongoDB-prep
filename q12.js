db.employees.aggregate(
    [
        {$match: {department: "HR"}},
        {$project: {name:1,email:1}},
        {$sort: {name:1}},
        { $limit: 3},
        {$skip: 1}
    ]
);


db.employees.aggregate(
[
   {$group:{_id:"$department",total:{$sum:"$salary"}}}
]
);