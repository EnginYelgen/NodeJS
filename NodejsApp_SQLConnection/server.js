var sql = require('mssql');

var config = {
    user: 'guest',
    password: '123',
    server: 'localhost',
    database: 'NodeJS',
    options: {
        instanceName: 'SQLEXPRESS',
        encrypt: false // Use this if you're on Windows Azure
    }
}

var connection = new sql.Connection(config, function (err) {
    // ... error checks

    if (err) {
        console.dir(err);
    }
    else {

        // Query

        var request = new sql.Request(connection); // or: var request = connection.request();
        request.query('select 1 as number', function (err, recordset) {
            // ... error checks
            if (err) {
                console.dir(err);
            }
            else {
                console.dir(recordset);
            }
        });

        // Stored Procedure

        //var request = new sql.Request(connection);
        //request.input('input_parameter', sql.Int, 10);
        //request.output('output_parameter', sql.VarChar(50));
        //request.execute('procedure_name', function (err, recordsets, returnValue) {
        //    // ... error checks

        //    console.dir(recordsets);
        //});
    }
});
