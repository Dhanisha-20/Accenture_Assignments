use ("socialMediaDB");

// Delete inactive user
db.users.deleteOne({
  userId: "U103"
})

// Delete unwanted comment
db.comments.deleteOne({
  commentId: "C103"
})

// Delete post
db.posts.deleteOne({
  postId: "P103"
})

print("Data Deleted Successfully")