db.createUser({
    user: "user",
    pwd: "secretPassword",
    roles: [ { role: "dbOwner", db: "stepin" } ]
  })
  
  db.users.insert({
    name: "user"
  })