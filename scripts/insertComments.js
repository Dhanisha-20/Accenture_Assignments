use ("socialMediaDB");

db.comments.insertMany([
{
  commentId: "C101",
  postId: "P101",
  userId: "U102",
  commentText: "Great learning!",
  commentedAt: new Date()
},
{
  commentId: "C102",
  postId: "P102",
  userId: "U103",
  commentText: "Amazing picture!",
  commentedAt: new Date()
},
{
  commentId: "C103",
  postId: "P103",
  userId: "U101",
  commentText: "Wonderful place!",
  commentedAt: new Date()
}
])