import mongoose from "mongoose";
import StationModel from "./path-to-StationModel"; // Make sure to provide the correct path

// Connect to MongoDB
mongoose.connect("mongodb://localhost/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a new station document
const newStation = new StationModel({
  name: "Station Name",
  photo: "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96",
  address: "Station Address",
  price: "50", // Example price (assuming it's a string, change accordingly)
  type: ["Type1", "Type2"],
  slot: ["Slot1", "Slot2"],
  bio: "Some station bio description",
});

// Save the new station to the database
newStation.save()
  .then((result) => {
    console.log("Station saved successfully:", result);
  })
  .catch((error) => {
    console.error("Error saving station:", error);
  })
  .finally(() => {
    // Close the Mongoose connection when done
    mongoose.connection.close();
  });
