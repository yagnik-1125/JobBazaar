import express, { application } from"express"
import cors from"cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // frontend url
    credentials: true
}))

app.use(express.json())//limit is used when haivyload 
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())//browser ma CRUD operation carva

import userRoutes from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js"
import jobRoute from "./routes/job.routes.js"
import applicationRoute from "./routes/application.routes.js"



app.use("/api/v2/user",userRoutes);
app.use("/api/v2/company",companyRoute);
app.use('/api/v2/jobs', jobRoute);
app.use('/api/v2/applications', applicationRoute);


export { app }