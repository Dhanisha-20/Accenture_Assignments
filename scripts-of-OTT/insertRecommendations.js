use ("ottDB");

db.recommendations.insertMany([
  {
    recommendationId: "R101",
    userId: "U101",
    recommendedTitle: "Iron Man",
    genre: "Action",
    score: 9
  },
  {
    recommendationId: "R102",
    userId: "U102",
    recommendedTitle: "Brooklyn Nine-Nine",
    genre: "Comedy",
    score: 8
  },
  {
    recommendationId: "R103",
    userId: "U103",
    recommendedTitle: "Gravity",
    genre: "Sci-Fi",
    score: 9
  }
]);
print("Recommendations Inserted Successfully");