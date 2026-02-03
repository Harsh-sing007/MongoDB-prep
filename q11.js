db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)



db.employees.aggregate(
    [
        {
            $match: {department: "HR"}                           //Raw data → processing → meaningful output  .PIPELINE
        },
    ]
)



db.employees.aggregate(
    [
        {
            $project: {_id:0,name: 1}                       
        },
    ]
)


db.employees.aggregate(
    [
        {
            $project: {_id:0,department: 0,salary:0}                       
        },
    ]
)