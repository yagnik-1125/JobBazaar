import express, { application } from"express"
import cors from"cors"
import cookieParser from "cookie-parser";

const app = express();
const FRONTEND_URL = 'https://job-bazaar.vercel.app/';
const WHITELIST = [FRONTEND_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like curl, mobile apps, server-to-server)
    if (!origin) return callback(null, true);
    if (WHITELIST.indexOf(origin) !== -1) return callback(null, true);
    return callback(new Error('CORS policy: This origin is not allowed: ' + origin));
  },
  credentials: true
}));
// app.use(cors({
//     origin: 'https://job-bazaar.vercel.app/', // frontend url
//     credentials: true
// }))

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