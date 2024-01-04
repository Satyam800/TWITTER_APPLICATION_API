
const mongoose= require("mongoose")
const uri =
  "mongodb+srv://satyamchandra7277:Satyam%40800@cluster0.6nguf6t.mongodb.net/Pratice_sanket?retryWrites=true&w=majority";

const connect=  ()=>{
     mongoose.connect(uri);
      
       mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB");
      });
      
      mongoose.connection.on("error", (err) => {
        console.error("Error connecting to MongoDB:", err);
      });
}
module.exports=connect