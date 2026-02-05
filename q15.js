//employees and salary using aggregate

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: [
          { $gt: ["$salary", 4500] },
          "Grade A",
          "Grade B"
        ]
      }
    }
  }
])

// employees and salary using aggregate with if-else
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gte: ["$salary", 4500] },
          then: "Grade A",
          else: "Grade B"
        }
      }
    }
  }
])


//switch operator

db.employees.aggregate(
    [
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            grade:{
                    $switch:{
                        branches:[{case:{ $gt: ["$salary", 4500] },then:"Grade A"},{case:{ $gt: ["$salary", 4500] },then:"Grade B"}],
                        default:"Grade C",
                    },
                    },
 },
  },
]);


