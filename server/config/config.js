import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bef353953bfb3a',
    password: '33e6e91a',
    database: 'heroku_acda310e3aec3d0'
});

export default connection;
