import nodeMailer from 'nodemailer';
import dotEnv from 'dotenv';
import conn from '../config/config';
// import jwtDecode from 'jwt-decode';

dotEnv.config();

class ReportController{
    static async addReport(req, res){
        const {reportNo, date, feesCollected, usedFees, reciepientEmail } = req.body;
        const restAmount = feesCollected - usedFees;
        const post = {
            report_no: reportNo,
            date: date,
            collected_fees: feesCollected,
            used_fees: usedFees,
            rest_amount: restAmount
        }

        conn.query('INSERT INTO report SET ?', post, function(error, results, fields){
            if(error) throw error;
            res.status(201).json({
                message: 'Successul report added',
                status: 201
            });
        });

        let body = {
            from: process.env.EMAIL_USER,
            to: `${reciepientEmail}`,
            subject: 'The Monthly Report of Income and Expenses of Irondo',
            html: `<h1>Reports</h1>
                    <font size='5'><b>Report Number:</b> ${reportNo}</font><p></p>
                    <font size='5'><b>Date:</b> ${date}</font><p></p>
                    <font size='5'><b>Fees Collected:</b> ${feesCollected}</font><p></p>
                    <font size='5'><b>Used Fees:</b> ${usedFees}</font><p></p>
                    <font size='5'><b>Rest Amount:</b> ${restAmount}</font><p></p>`
        }

        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        transporter.verify(function(error, success){
            if(error){
                console.log(error)
            }else{
                console.log('Server is ready to take our messages');
            }
        });

        transporter.sendMail(body, (err, result) => {
            if(err){
                console.log(err);
                return false
            }
            console.log(result);
            console.log('Email Sent');
        });


    }

    static async getAllReports(req, res){
        
        conn.query('SELECT * FROM report', function(error, results, fields){
            if(error) throw error;
            res.status(201).json({
                message: 'Successul report fetched',
                status: 200,
                data: results
            });
        });
    }


    static async getOneReport(req, res){
        const data = req.query.reportNo;
        conn.query('SELECT * FROM report WHERE report_no = ?',[data], function(error, results, fields){
            if(error) throw error;
            res.status(201).json({
                message: 'Successul report fetched',
                status: 200,
                data: results
            });
        });
    }
}

export default ReportController;