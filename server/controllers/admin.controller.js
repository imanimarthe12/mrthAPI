import conn from '../config/config';
import auth from '../helpers/authenticate';

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