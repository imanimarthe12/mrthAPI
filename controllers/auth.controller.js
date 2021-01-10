import conn from '../config/config';
import auth from '../helpers/authenticate';

class userController {
    static async signUp (req, res) {
        const { email, firstName, lastName, phoneNumber, password } = req.body;
        const lemail = email.toLowerCase();
        const hashedPassowrd = auth.hashPassword(password);
        const post = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: lemail,
            password: hashedPassowrd
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


    static async signIn (req, res){
        const {phoneNumber, password} = req.body;
        conn.query(`SELECT * FROM users WHERE phone_number = ${phoneNumber}`, function (error, results, fields) {
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