import conn from '../config/config';


class collectorController{
    static async addCitizen(req, res){
        const { citizenName, idCard, phoneNumber } = req.body;
        const data = {
            citizenName: citizenName,
            idCard: idCard,
            phoneNumber: phoneNumber
        }
        conn.query('SELECT * FROM citizen WHERE phoneNumber = ?', [phoneNumber], function(error, results, fields) {
            if (results[0]) {
                return res.json({ message: 'Another citizen is using the same phone number'});
            }
            conn.query('SELECT * FROM citizen WHERE idCard = ?', [idCard], function (error, results, fields) {
                if (results[0]) {
                    return res.json({ message: 'Another citizen is using the same Id card Number'});
                }
                conn.query('INSERT INTO citizen SET ?', data, function (error, results, fields) {
                    if(error) throw error;
                    res.status(201).json({
                        message: 'Citizen Added Successful'
                    });
                });
            });
        });
    }

    static async addPayment(req, res){
        const { datePayment, paidAmount, paidMonth } = req.body;
        const data = {
            datePayment: datePayment, 
            paidAmount: paidAmount,
            paidMonth: paidMonth
        }

        conn.query('INSERT INTO feesPayment SET ?', data, function (error, results, fields) {
            if(error) throw error;
            res.status(201).json({
                message: 'Successful'
            })
        })
    }

    static async getCitizen(req, res){
        conn.query('SELECT * FROM citizen;', function(error, results, fields){
            if(error) throw error;
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async getPayment(req, res){
        conn.query('SELECT * FROM feesPayment;', function(error, results, fields){
            if(error) throw error;
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }
}

export default collectorController;