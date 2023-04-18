var pool = require('./connection');

//Obter estudantes
module.exports.getStudents = async function () {


    try {
        const sql = " select * from students ";
        

        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
