use ("socialMediaDB");

db.followers.insertMany([
{
  followId: "F101",
  followerId: "U101",
  followingId: "U102",
  followedAt: new Date()
},
{
  followId: "F102",
  followerId: "U102",
  followingId: "U103",
  followedAt: new Date()
},
{
  followId: "F103",
  followerId: "U103",
  followingId: "U101",
  followedAt: new Date()
}
])