use ("ottDB");

db.users.insertMany([
  {
    userId: "U101",
    name: "Arun",
    email: "arun@gmail.com",
    subscription: "Basic",
    country: "India",
    createdAt: new Date()
  },
  {
    userId: "U102",
    name: "Priya",
    email: "priya@gmail.com",
    subscription: "Premium",
    country: "India",
    createdAt: new Date()
  },
  {
    userId: "U103",
    name: "Kiran",
    email: "kiran@gmail.com",
    subscription: "Basic",
    country: "India",
    createdAt: new Date()
    },              
    {                   
    userId: "U104",
    name: "Anjali",
    email: "anjali@gmail.com",
    subscription: "Basic",
    country: "India",
    createdAt: new Date()       
  },    
    {
    userId: "U105",
    name: "Rohit",
    email: "rohit@gmail.com",
    subscription: "Basic",
    country: "India",
    createdAt: new Date()
  }
]);