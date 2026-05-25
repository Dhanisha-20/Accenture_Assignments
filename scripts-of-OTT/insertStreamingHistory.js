use ("ottDB");

db.streaming_history.insertMany([
  {
    historyId: "H101",
    userId: "U101",
    contentTitle: "Avengers",
    genre: "Action",
    watchDuration: 120,
    watchedAt: new Date()
  },
  {
    historyId: "H102",
    userId: "U102",
    contentTitle: "Friends",
    genre: "Comedy",
    watchDuration: 45,
    watchedAt: new Date()
  },
  {
    historyId: "H103",
    userId: "U103",
    contentTitle: "Interstellar",
    genre: "Sci-Fi",
    watchDuration: 150,
    watchedAt: new Date()
  }
]);
print("Streaming History Inserted Successfully");