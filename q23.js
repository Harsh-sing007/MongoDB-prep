//create folder mongo-replica 
// now create folders  -usa, uk, india inside mongo-replica
//mongod -replSet rs1 --dbpath D:\mongo-replica\usa --port 27018
mongod -replSet rs1 --dbpath "D:\mongo-replica\usa" --port 27018
//mongod -replSet rs1 --dbpath "D:\mongo-replica\uk" --port 27019
//mongod -replSet rs1 --dbpath "D:\mongo-replica\india" --port 27020

// 3 independent servers are running now

// mongosh --port 27018

rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}]
})

// rs.config()
// rs.status()

//new tab
//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"
//use my database
// db.users.insertOne({name:"Harsh",age:20})

//new tab
//mongosh --port 27019
//db.getMongo().setReadPref("secondary")

//db.shutdownServer() - to stop the server
