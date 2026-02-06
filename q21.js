db.createCollection("vendors")
db.vendors.insertOne(
    {
        name:"John",
        age:21
    })
db.vendors.insertOne(
    {
        age:21
    })    
db.vendors.insertOne(
    {
        name:454535,
        age:"gdgfgd"
    })    
// all of this is possible

//what if we had to mandate some rules for insertion?    
db.createCollection("vendors",{})
//{}-> validator
db.createCollection("vendors",{
    validator:
    {
        $jsonSchema:
        {
            bsonType:"object",
            required:["name","age"]
        }
    }
})
// now run above commands to check
db.vendors.drop()
// now create again

db.createCollection("vendors",{
    validator:
    {
        $jsonSchema:
        {
            bsonType:"object",
            required:["name","age"],
            properties:
            {
                name: {bsonType: "string"},
                age:{bsonType: "int"},
            }
        }
    }
})

db.vendors.insertOne(
    {
        name:"Bruce Wayne",
        age:35
    })
// try the above commands again to verify     
db.createCollection("vendors",{
    validator:
    {
        $jsonSchema:
        {
            bsonType:"object",
            required:["name","age"],
            properties:
            {
                name: {bsonType: "string"},
                age:{bsonType:[ "int","null"]}            }
        }
    }
})

//insert 
db.vendors.insertOne(
    {
        name:"Batman",
        age:null
    })
//now
db.createCollection("vendors",{
    validator:
    {
        $jsonSchema:
        {
            bsonType:"object",
            required:["name","age"],
            properties:
            {
                name: {bsonType: "string"},
                age:{bsonType:"int",minimum:18}            }
        }
    }
})    
//we give minimum input value as validator