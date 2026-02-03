db.employees.find( 
{email: "brain@gmail.com" }
).explain("executionStats");

 
db.employees.createIndex({email: 1})