import conn from '../config/config';
import auth from '../helpers/authenticate';
import dotEnv from 'dotenv';
dotEnv.config();

class adminController{

    static async addStaff(req, res){
        const { StaffName, PhoneNumber, Position, password } = req.body;
        const hashedPassowrd = auth.hashPassword(password);
        const post = {
            StaffName: StaffName,
            PhoneNumber: PhoneNumber,
            Position: Position
        }
        const userPost = {
            phoneNumber: PhoneNumber,
            password: hashedPassowrd,
            usertype: Position
        }
        conn.query('SELECT * FROM staff WHERE PhoneNumber = ?', [PhoneNumber], function(error, results, fields) {
            if (results[0]) {
                return res.json({ message: 'Another user is using the same phone number'});
            }

            conn.query('INSERT INTO staff SET ?', post, function(error, results, fields){
                if(error) throw error;

                conn.query('INSERT INTO users SET ?', userPost, function(error, results, fields) {
                    if (error) throw error;
                    res.status(201).json({
                        message: "Staff Successful Added",
                        status: 201
                    });
                })
            });
        });
    }

    static async getStaff(req, res){
        conn.query('SELECT * FROM staff;', function(error, results, fields){
            if(error) throw error;
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async addSector(req, res){
        const {sectorName} = req.body;
        const data = {
            sectorName: sectorName,
        }
        conn.query('INSERT INTO sector SET ?', data, function(error, results, fields ){
            if(error){
                return res.json({
                    errorMessage: 'Sector must not be empty'
                })
            };
            res.status(201).json({
                message: "Successful",
                status: 201
            });
        });
    }

    static async addCell(req, res){
        const {cellName} = req.body;
        const data = {
            cellName: cellName,
        }
        conn.query('INSERT INTO cell SET ?', data, function(error, results, fields ){
            if(error){
                return res.json({
                    errorMessage: 'Cell must not be empty'
                })
            };
            res.status(201).json({
                message: "Successful",
                status: 201
            });
        });
    }

    static async addVillage(req, res){
        const {villageName} = req.body;
        const data = {
            villageName: villageName
        }
        conn.query('INSERT INTO village SET ?', data, function(error, results, fields) {
            if(error){
                return res.json({
                    errorMessage: 'Village must not be empty'
                })
            };
            res.status(201).json({
                message: 'Successful',
                status: 201
            })
        })
    }

    static async getSectors(req, res){
        conn.query('SELECT * FROM sector;', function(error, results, fields){
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async getCells(req, res){
        conn.query('SELECT * FROM cell;', function(error, results, fields){
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }

    static async getVillages(req, res){
        conn.query('SELECT * FROM village;', function(error, results, fields){
            res.status(200).json({
                message: "Successful",
                status: 200,
                results: results
            });
        });
    }
}

export default adminController;