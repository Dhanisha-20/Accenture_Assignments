db.users.updateOne(
    {userId: "U101"},
    {
        $set: {subscription: "Premium"}
    }
);
print("Data Updated Successfully"); 