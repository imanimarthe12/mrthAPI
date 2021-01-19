import conn from '../config/config';
import auth from '../helpers/authenticate';
import nodeMailer from 'nodemailer';
import dotEnv from 'dotenv';
dotEnv.config();

class adminController{
    static async addUser(req, res){
        const { email, firstName, lastName, phoneNumber, password, userType } = req.body;
        const lemail = email.toLowerCase();
        const hashedPassowrd = auth.hashPassword(password);
        const post = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: lemail,
            password: hashedPassowrd,
            user_type: userType
        }
        conn.query('INSERT INTO users SET ?', post, function(error, results, fields){
            if(error) throw error;
            console.log('The solution is: ', results[0]);
            res.status(201).json({
                message: "Successful",
                status: 201
            });
        });

        // let body = {
        //     from: process.env.EMAIL_USER,
        //     to: `${lemail}`,
        //     subject: 'Irondo App registration',
        //     html: `<h1>Irondo App registration</h1>
        //     You have been registered sucessfully your email is <font color='blue'>${lemail}</font> and your password is <font color='blue'>${password}</font> you can use those credentials to login to our account
        //     `
        // }

        // const transporter = nodeMailer.createTransport({
        //     service: 'gmail',
        //     auth:{
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS
        //     }
        // });

        // transporter.verify(function(error, success){
        //     if(error){
        //         console.log(error)
        //     }else{
        //         console.log('Server is ready to take our messages');
        //     }
        // });

        // transporter.sendMail(body, (err, result) => {
        //     if(err){
        //         console.log(err);
        //         return false
        //     }
        //     console.log(result);
        //     console.log('Email Sent');
        // });

    }

    static async getUser(req, res){
        conn.query('SELECT * FROM users;', function(error, results, fields){
            if(error) throw error;
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async deleteUser(req, res){
        const id = req.query.id
        conn.query('DELETE FROM users WHERE user_id = ?', [id], function(error, results, fields ){
            if (error) throw error;
            res.status(202).json({
                message: "Deleted Successful",
                status: 202
            });
        });
    }
}

export default adminController;