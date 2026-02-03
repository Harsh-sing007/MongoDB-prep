db.employees.find( 
{email: "brain@gmail.com" }
).explain("executionStats");

