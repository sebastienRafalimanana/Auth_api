require('dotenv').config();

const CONFIG = {
    VERSION: 1,
    BUILD: 1,
    PROD:true,
    URL: 'http://localhost',
    API_PATH: '/api',
    PORT: process.env.PORT || 3000,
    JWT_KEY: "mzjgoqudiofzrt",
    JWT_EXPIRED: 7 * 24 * 60 * 60,
    DB: {
        HOST: 'localhost',
        PORT: '27017',
        DATABASE: 'users'
    },
    //url de la connection de la base de donne
    get_db_connection: function() {
        let string_connection ="";
        if (!this.PROD) {
            string_connection = 'mongodb://' + this.DB.HOST + ':' + this.DB.PORT + '/' + this.DB.DATABASE
        }else{
            /* string_connection = "mongodb+srv://sebastienRafalimanana:ramsey.xy5@webcupdb.an8xn.mongodb.net/test?retryWrites=true&w=majority" */
            string_connection = process.env.MONGODB_URL;
        }
        return string_connection;
        
    },
    //url de la connection de l'application
    get_http_url: function() {
        return 'http://' + this.URL + ":" + this.PORT;
    }
}

module.exports = CONFIG;