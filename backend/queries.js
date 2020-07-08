const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'travel_app',
    password: 'password',
    port: 5432,
})

const readRow = (request, response, tableName) => {
    pool.query(
        `SELECT * FROM ${tableName} WHERE id = $1`,
        [request.params.id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
}

const returnAll = (request, response, tableName) => {
    pool.query(
        `SELECT * FROM ${tableName}`,
        [],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
}

const sightsPerRoute = (request, response, tableName) => {    
    let stops;
    let stop1, stop2, stop3, stop4;
    let secondQuery;
    pool.query(
        `SELECT * FROM routes WHERE id = $1`,
        [request.params.id],
        (error, results) => {
            if (error) {
                throw error
            }
            stops = results.rows[0].stops;
            stop1 = results.rows[0].stop1;
            stop2 = results.rows[0].stop2;
            stop3 = results.rows[0].stop3;
            stop4 = results.rows[0].stop4;
            console.log(stops, stop1, stop2, stop3, stop4)
            if (stops == 2) {
                console.log('2:', stops)
                secondQuery = 'SELECT * FROM sights WHERE (location_id = ' + stop1 + ' OR location_id = '+ stop2 + ')'
            } else if (stops == 3) {
                console.log('3:', stops)
                secondQuery = 'SELECT * FROM sights WHERE (location_id = ' + stop1 + ' OR location_id = ' + stop2 + ' OR location_id = ' + stop3 + ')'
            } else if (stops == 4) {
                console.log('3:', stops)
                secondQuery = 'SELECT * FROM sights WHERE (location_id = ' + stop1 + ' OR location_id = ' + stop2 + ' OR location_id = ' + stop3 + ' OR location_id = ' + stop4 + ')'
            } else {
                secondQuery = 'Cannot pull data'
            }
            pool.query(
                secondQuery, 
                [],
                (error, results) => {
                    if (error) {
                        throw error
                    }
                    response.status(200).json(results.rows)
                })
        })
        
}

module.exports = {
    readRow,
    returnAll,
    sightsPerRoute
}