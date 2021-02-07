import conn from '../config/config';
import jwtDecode from 'jwt-decode';

class weekPlan{
    static async addPlan(req, res){
        const { date, day, weekNo, month, team, teamLeader } = req.body;
        const post = {
            date: date,
            day: day,
            week_no: weekNo,
            month: month,
            team: team,
            team_leader: teamLeader,
            planId: null
        }
        conn.query('INSERT INTO weekplan SET ?', post, function(error, results, fields){
            if (error) throw error;
            console.log('The solution is:' , results);
            res.status(201).json({
                message: 'Week plan added successful',
                status: '201'
            });
        });
    }

    static async filterDate(req, res){
        const date = req.query.date;
        conn.query('SELECT * FROM weekplan WHERE date = ?', [date], function(error, results, fields) {
            if (error) throw error;
            console.log('The solution: ', results);
            res.status(200).json({
                message: 'Successful filtered',
                status: '200',
                data: results
            });
        });
    }

    static async getAllWeekPlan(req, res){
        conn.query('SELECT * FROM weekplan;', function(error, results, fields) {
            if (error) throw error;
            console.log('The solution: ', results);
            res.status(200).json({
                message: 'Successful fetched',
                status: '200',
                data: results
            });
        });
    }

    static async updatePlan(req, res){
        const { date, day, weekNo, month, team, teamLeader } = req.body;
        const id = req.query.id;
        const post = {
            date: date,
            day: day,
            week_no: weekNo,
            month: month,
            team: team,
            team_leader: teamLeader
        }

        conn.query('UPDATE weekplan SET ? WHERE planId = ?', [post, id], function(error, results, fields){
            if (error) throw error;
            console.log('The solution is:' , results);
            res.status(203).json({
                message: 'Week plan updated successful',
                status: '203'
            });
        });
    }
}

export default weekPlan;