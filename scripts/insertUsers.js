use ("socialMediaDB");

db.users.insertMany([
{
  userId: "U101",
  username: "dhanisha",
  email: "dhanisha@gmail.com",
  bio: "MCA Student",
  followersCount: 250,
  followingCount: 180,
  createdAt: new Date()
},
{
  userId: "U102",
  username: "arun",
  email: "arun@gmail.com",
  bio: "Photographer",
  followersCount: 500,
  followingCount: 300,
  createdAt: new Date()
},
{
  userId: "U103",
  username: "priya",
  email: "priya@gmail.com",
  bio: "Traveler",
  followersCount: 700,
  followingCount: 450,
  createdAt: new Date()
}
])