use ("socialMediaDB");

print("USERS")
printjson(db.users.find().toArray())

print("POSTS")
printjson(db.posts.find().toArray())

print("COMMENTS")
printjson(db.comments.find().toArray())

print("FOLLOWERS")
printjson(db.followers.find().toArray())

print("ACTIVITY LOGS")
printjson(db.activity_logs.find().toArray())