import conn from '../config/config';
import auth from '../helpers/authenticate';

class userController {

    static async signIn (req, res){
        const {phoneNumber, password} = req.body;
        conn.query(`SELECT * FROM users WHERE phoneNumber='${phoneNumber}'`, function (error, results, fields) {
            if (error) throw error;
            if (results[0]){
                const compare = auth.checkPassword(password, results[0].password);
                if(compare){
                    res.status(200).json({
                        message: 'Successful logged in',
                        status: 200,
                        token: auth.generateToken(results[0])
                    });
                }else{
                    res.status(401).json({
                        status: 401,
                        errorMessage: 'Wrong credentials'
                    });
                }
            }
                
        });
    }

    static async changePassword(req, res){
        const {password} = req.body;
        const hashedPassowrd = auth.hashPassword(password); 
        const {userid} = req.query;
        conn.query('UPDATE users SET password = ? WHERE user_id = ?', [hashedPassowrd, userid], function(error, results, fields) {
            res.status(201).json({
                message: 'Password Changed Successful'
            })
        })
    }
}

export default userController;