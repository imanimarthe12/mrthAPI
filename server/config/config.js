import mysql from 'mysql';
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'patrol'
});

export default connection;
