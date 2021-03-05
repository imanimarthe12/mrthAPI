import conn from '../config/config';


class commanderController{
    static async addIncident(req, res){
        const { date, incidentDescription, wayForward } = req.body;
        const data = {
            date: date,
            incidentDescription: incidentDescription,
            wayForward: wayForward,
        }
        conn.query('INSERT INTO incident SET ?', data, function (error, results, fields) {
            if(error) throw error;
            res.status(201).json({
                message: 'Successful'
            })
        })
    }

    static async incident(req, res){
        conn.query('SELECT * FROM incident;', function(error, results, fields){
            if(error) throw error;
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async addPatrolReport(req, res){

        const { day, week, month, date, team } = req.body;
        const data = {
            day: day,
            week: week,
            month: month,
            date: date,
            team: team
        }
        conn.query('INSERT INTO dailyReport SET ?', data , function(error, results, fields){
            if(error) throw error
            res.status(201).json({
                message: "Report Added Successul",
                status: 201,
                results: results
            })
        });
    }

    static async getMonthlyReport(req, res){
        const { month } = req.query;
        conn.query('SELECT * FROM dailyReport WHERE month=?', [month], function(error, results, fields){
            if(error) throw error;
            res.status(201).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }


    static async getWeeklyReport(req, res){
        const { month, week } = req.query;
        conn.query('SELECT * FROM dailyReport WHERE week=? AND month=?', [week, month], function(error, results, fields){
            if(error) throw error;
            res.status(201).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async addGuard (req, res){
        const { guardName, idCard, team } = req.body;
        const data = {
            guardName: guardName,
            team: team,
            idCard: idCard,
        }
        conn.query('INSERT INTO guards SET ?', data, function (error, results, fields) {
            if(error) throw error;
            res.status(201).json({
                message: 'Successful'
            })
        })
    }

    static async getGuards(req, res){
        conn.query('SELECT * FROM guards;', function(error, results, fields) {
            if (error) throw error
            res.status(201).json({
                message:'Successful',
                status: 200,
                results: results
            })
        })
    }

    static async getDaily(req, res){
        conn.query('SELECT * FROM dailyReport;', function(error, results, fields) {
            if (error) throw error
            res.status(201).json({
                message:'Successful',
                status: 200,
                results: results
            })
        })
    }

}

export default commanderController;