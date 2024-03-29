const express= require("express")
const cors=require("cors")
const router = require("./routes")
const app = express()
const dotenv= require("dotenv")
dotenv.config();
const PORT= process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT,()=>{console.log("server is running at port 5000")})

