//user management system
//user admin
db.createUser(
    {
        user:"admin",
        pwd:"admin",
        roles:[{role:"root",db:"admin"}]
    }
)
//to login in mongo db use this ::dont write this Inside mondosh
//mongosh --username admin -authenticationDatabase admin

//to log in as a user
//mongosh --username -authenticationDatabase lpu29
db.createUser(
    {
        user:"user",
        pwd:"user",
        roles:[{role:"read",db:"lpu29"}]
    }
)

db.createUser(
    {
        user:"user1",
        pwd:"user1",
        roles:[{role:"read",db:"lpu29"}]
    }
)

//db.getUsers() <-----------from admin we can use it to check on user and there permisiton
//db.dropUser("user") <----------to remove the user 
//mongodb://user1:user1@localhost:27017/lpu29 <----------we can use this to connect in compass as a user1
//connection string 
//mongosh "mongodb://user1:user1@localhost:27017/lpu29" <------------------after connectiong in compass we can use this command in cmd to connect