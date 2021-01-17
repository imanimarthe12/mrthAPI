import conn from '../config/config';
import auth from '../helpers/authenticate';

class userController {

    static async signIn (req, res){
        const {email, password} = req.body;
        conn.query(`SELECT * FROM users WHERE email = ${email}`, function (error, results, fields) {
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
}

export default userController;