//Orders
db.orders.aggregate([
    {
        $project:{
            _id:0,
            empid:1,
            orderValue:1
        }
    }
]

)