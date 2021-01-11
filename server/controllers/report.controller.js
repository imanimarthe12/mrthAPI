import conn from '../config/config';

class ReportController{
    static async addReport(req, res){
        const {reportNo, date, feesCollected, usedFees } = req.body;
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