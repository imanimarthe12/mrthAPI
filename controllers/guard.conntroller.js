import jwtDecode from 'jwt-decode';
import conn from '../config/config';

class guardController {
    static async addGuard(req, res) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwtDecode(token);
        const { firstName, lastName, nId, telephone } = req.body;
        const post = {
            nid: nId,
            first_name: firstName,
            last_name: lastName,
            telephone: telephone
        }
        conn.query('INSERT INTO guard SET ?', post, function(error, results, fields){
            if (error) throw error;
            console.log('The solution is:' , results);
            res.status(201).json({
                message: 'Guard added successfully',
                status: '201'
            });
        });
    }

    static async getGuards(req, res){
        conn.query('SELECT * FROM guard;', function (error, results, fields) {
            if (error) throw error;

            console.log(results)
            res.status('200').json({
                message: 'Get all guards',
                status: 200,
                results: results
            });
        });
    }

    static async deleteGuard(req, res){
        const nId = req.query.nid;
        conn.query('DELETE FROM guard WHERE nid = ?', [nId], function (error, results, fields) {
            if (error) throw error;
            res.status(202).json({
                message: 'Guard deleted successful',
                status: '202'
            });
        });
    }
}

export default guardController;
