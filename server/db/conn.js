const mongoose=require('mongoose');

//mongodb://localhost:27017/userdata

// mongoose.connect("mongodb://localhost:27017/grievance",
// mongoose.connect("mongodb+srv://shriramuchiha66:2200032943@cluster0.efbivmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
mongoose.connect("mongodb://localhost:27017/resolvance",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected ");
}).catch((err)=>{
    console.log("No Connection to Database");
})