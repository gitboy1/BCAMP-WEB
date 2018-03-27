var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

//Create connection to database
var config =
  {
    userName: 'zevans',
    password: 'Warner2016',
    server: 'newvizprogramming.database.windows.net',
    options:
      {
        database: 'bcampDb',
        encrypt: true
      }
  };

var connection = new Connection(config);

//Attempt to connect and execute queries if connection is successful
connection.on('connect', function (err) {
  if (err) {
    console.log(err)
  }
  else {
    queryDatabase()
  }
});

function queryDatabase() {
  console.log('Reading rows from the Table...');
  //Read all rows from each table
  request = new Request(
    "SELECT * FROM Assets_Table\n" +
    "INNER JOIN Users_Table ON Assets_Table.USERID = Users_Table.ID;",
    function (err, rowCount, rows) {
      console.log(rowCount + 'row(s) returned');
      process.exit();
    }
  );

  request.on('row', function (columns) {
    columns.forEach(function (column) {
      var i = 0;
      while(i <= row.length) {
        console.log("%s/t%s",column.value);
        i++;
      }
      /*console.log("%s\t%s", column.metadata.colName, column.value);*/
    });
  });
  connection.execSql(request);
}
