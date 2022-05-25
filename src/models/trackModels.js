const mysql = require('mysql2')

class TrackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_User,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
    async getAlbums() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM track')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = new TrackModel()