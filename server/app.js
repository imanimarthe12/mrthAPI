import express from "express";
import bodyParser from "body-parser";
import morgan from "express";
import cors from "cors";
import authRoutes from './routes/auth.route';
import guardRoutes from './routes/guard.route';
import weekRoutes from './routes/weekplan.route';
import reportRoutes from './routes/report.route';
import adminRoutes from './routes/admin.route';
import conn from './config/config';

const app = express();
const port = process.env.PORT || 5000;


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

conn.connect();

app.use('/api', authRoutes);
app.use('/api', guardRoutes);
app.use('/api', weekRoutes);
app.use('/api', reportRoutes);
app.use('/api', adminRoutes);

app.get('/',cors(), (req, res) => {
    res
        .type('json')
        .status(200)
        .json({
            status: 200,
            message: "Welcome to Irondo Web App API"
        });
});

app.use((req, res) => {
    res
        .type('json')
        .status(404)
        .json({
            status: 404,
            errorMessage: "404 Page not "
        })
})

app.listen(port, console.log("The app is running at localhost with the port:" + port));
export default app;
