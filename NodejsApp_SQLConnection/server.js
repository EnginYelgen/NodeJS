/*
// Connection test 1

var sql = require('mssql');

var config = {
    user: 'guest',
    password: '123',
    server: 'ENG\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'NodeJS',
    port: 1433,
    options: {
        //instanceName: 'SQLEXPRESS',
        encrypt: false // Use this if you're on Windows Azure
    }
}

var connection = new sql.Connection(config);

connection.connect(function (err) {
    if (err) {
        console.dir(err);
    }
});

var request = new sql.Request(connection);

var query = 'SELECT * FROM Sample_1';

request.query(query, function (err, recordset) {
    if (err) {
        console.dir(err);
    }
    else {
        console.dir(recordset);
    }
});

connection.close();
*/



// Connection test 2

var sql = require('mssql');

var config = {
    user: 'guest',
    password: '123',
    //server: '178.245.139.4', // You can use 'localhost\\instance' to connect to named instance
    //server: 'localhost\\SQLEXPRESS',
    server: 'localhost',
    //server: 'ENG',
    //server: '178.245.239.18',
    //server: '127.0.0.1',
    //server: '127.0.0.1\\SQLEXPRESS',
    database: 'NodeJS',
    //port: 1433,
    //driver: 'tedious',
    //connectionTimeout: 10000,
    //requestTimeout: 10000,
    options: {
        instanceName: 'SQLEXPRESS',
        encrypt: false // Use this if you're on Windows Azure
    }
    //, pool: {
    //    idleTimeoutMillis: 10000,
    //    max: 100
    //}
    //,debug:
    //{
    //    packet: true,
    //    data: true,
    //    payload: true,
    //    token: true,
    //    log: true
    //}
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

/*
// Connection test 3

var Connection = require('tedious').Connection;

var config = {
    userName: 'guest',
    password: '123',
    //server: '127.0.0.1',
    server: 'localhost',
    // If you're on Windows Azure, you will need this:
    options:
    {
        encrypt: false,
        instanceName: 'SQLEXPRESS',
        database: 'NodeJS'
    }
};

var connection = new Connection(config);

connection.on('connect', function (err) {
    // If no error, then good to go...
    if (err) {
        console.dir(err);
    }
    else {
        executeStatement();
    }
}
);

var Request = require('tedious').Request;

function executeStatement() {
    request = new Request("select 42, 'hello world'", function (err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
    });

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log(column.value);
        });
    });

    connection.execSql(request);
}
*/