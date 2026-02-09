const session = db.getMongo().startSession()

session.startTransaction()

var custCollection = session.getDatabase("hdfcbank").customers    

db.custCollection.updateOne({_id:"c1"},{$inc:{balance:-100}})



db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      let: { courseId: "$_id" },
      pipeline: [
        { $match: { $expr: { $eq: ["$courseId", "$$courseId"] } } },
        {$lookup:{
          from:"lessons",
          let:{moduleId:"$_id"},
          pipeline:[
            {$match:{$expr:{$eq:["$moduleId","$$moduleId"]}}}
          ],
          as:"lessons"
        }}
      ],
      as: "modules",
    },
  },
]);