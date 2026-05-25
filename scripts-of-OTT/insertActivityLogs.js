use ("ottDB") ;

db.activity_logs.insertMany([
  {
    logId: "L101",
    userId: "U101",
    action: "Login",
    device: "Mobile",
    timestamp: new Date()
  },
  {
    logId: "L102",
    userId: "U102",
    action: "Watch",
    device: "Smart TV",
    timestamp: new Date()
  },
  {
    logId: "L103",
    userId: "U103",
    action: "Logout",
    device: "Laptop",
    timestamp: new Date()
  }
]);
print("Activity Logs Inserted Successfully");