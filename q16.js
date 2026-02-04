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

//Another query how will join it 

db.orders.aggregate([
    {
        $lookup:{
            from:"employees",
            localField:"empid",
            foreignField:"_id",
            as:"users"

        }
    }
])

//join
db.employees.aggregate([
    {
        $lookup:{
            from:"orders",
            localField:"_id",
            foreignField:"empid",
            as:"orders"
    }}
])


db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders"
    }
  },
  { $unwind: "$orders" },
  { $project: {
      _id: 0,
      orders: 1
    }
  }
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",
        let:{uid:"_id"},
        pipeline:[
            {$match:
                {$expr:{$eq:["$_id","$$uid"]}}}
            ],
            as:"orders"
    }}
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",
        let:{uid:"_id"},
        pipeline:[
            {$match:
                {$expr:{$eq:["$_id","$$uid"]}}}
            ],
            as:"orders"
    }},
    {
        $project:{
            name:1,
            product:"$orders.product",
            orderValue:"$orders.orderValue"
        }
    }
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",
        let:{uid:"_id"},
        pipeline:[
            {$match:
                {$expr:{$eq:["$_id","$$uid"]}}}
            ],
            as:"orders"
    }},
    {$unwind:"$orders"},
    {
        $project:{
            name:1,
            product:"$orders.product",
            orderValue:"$orders.orderValue"
        }
    }
])



db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            let: { uid: "$_id" },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ["$empid", "$$uid"] }
                    }
                },
                {
                    $project:{
                        _id:0,
                        empid:0,
                        products:1,
                        quantity:1
                    }
                }
            ],
            as: "orders"
        }
    }
]
)


