use ("socialMediaDB");

db.activity_logs.insertMany([
{
  activityId: "A101",
  userId: "U101",
  activityType: "Login",
  device: "Mobile",
  activityTime: new Date()
},
{
  activityId: "A102",
  userId: "U102",
  activityType: "Post",
  device: "Laptop",
  activityTime: new Date()
},
{
  activityId: "A103",
  userId: "U103",
  activityType: "Like",
  device: "Tablet",
  activityTime: new Date()
}
])