use ("socialMediaDB");

// Update bio
db.users.updateOne(
  { userId: "U101" },
  { $set: { bio: "Full Stack Developer" } }
)

// Update caption
db.posts.updateOne(
  { postId: "P101" },
  { $set: { caption: "MongoDB Replica Sets Learning" } }
)

// Update likes count
db.posts.updateOne(
  { postId: "P102" },
  { $set: { likesCount: 500 } }
)

print("Data Updated Successfully")