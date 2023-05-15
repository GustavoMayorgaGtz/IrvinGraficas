var Connection = require('tedious').Connection;
const Request = require('tedious').Request
const TYPES = require('tedious').TYPES;

class SQL {
  constructor() { }

  executeStatement1() {
    var config = {
      server: 'DESKTOP-2VMTS8V\SQLEXPRESS',  //update me
      authentication: {
        type: 'default',
        options: {
          userName: 'NODEJSPROYECTS', //update me
          password: 'Controler1502'  //update me
        }
      },
      options: {
        // If you are on Microsoft Azure, you need encryption:
        // encrypt: true,
        database: 'ReporteElectrico'  //update me
      }
    };
    var connection = new Connection(config);
    connection.on('connect', function (err) {
      // If no error, then good to proceed.
      console.log("Connected");

      //--------------------
      var request = new Request("select * from Usuario", function (err) {
        if (err) {
          console.log(err);
        }
      });
      var result = "";
      request.on('row', function (columns) {
        columns.forEach(function (column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            result += column.value + " ";
          }
        });
        console.log(result);
        result = "";
      });

      request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
      });

      // Close the connection after the final event emitted by the request, after the callback passes
      request.on('requestCompleted', function () {
        // Next SQL statement.
    });
      connection.execSql(request);
      //--------------------

    });

    connection.connect();

  }
}
module.exports = SQL;