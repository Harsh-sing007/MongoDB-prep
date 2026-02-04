//employees and salary using aggregate

db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
        }
    }
]
)
