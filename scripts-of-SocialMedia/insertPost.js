use ("socialMediaDB");

db.posts.insertMany([
{
  postId: "P101",
  userId: "U101",
  caption: "Learning MongoDB Replication",
  hashtags: ["#mongodb", "#database"],
  likesCount: 120,
  createdAt: new Date()
},
{
  postId: "P102",
  userId: "U102",
  caption: "Nature Photography",
  hashtags: ["#nature", "#photography"],
  likesCount: 340,
  createdAt: new Date()
},
{
  postId: "P103",
  userId: "U103",
  caption: "Travel Diaries",
  hashtags: ["#travel", "#explore"],
  likesCount: 280,
  createdAt: new Date()
}
])