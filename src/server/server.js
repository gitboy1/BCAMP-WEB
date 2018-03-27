var Connection = require('tedious').Connection;
var config = {
  userName: 'zevans',
  password: 'Warner2016',
  server: 'newvizprogramming.database.windows.net',
  options: {encrypt: true, database: 'bcampDb'}
};

var connection = new Connection(config);
var assets = [];

connection.on('connect', function (err) {
  console.log("Connected to Server");
  //insertStatement();
  /*executeStatement("SELECT * FROM Assets_Table\n" +
    "INNER JOIN Users_Table ON Assets_Table.USERID = Users_Table.ID;");*/
  getAssets();
});

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var request;





function getAssets() {
  request = new Request("SELECT * FROM Assets_Table", function (err) {
    if (err) {
      console.log(err);
    }
  });
  var result = "";
  var temp = [];
  request.on('row', function (columns) {
    columns.forEach(function (column) {
      result += column.value + " ";
      temp.push(column.value);
    });
    //print line
    console.log(result);
    assets.push(temp);
    //reinitialize result to empty
      /*var asset = new Asset(temp);*/
      /*assets.push(asset);*/
      temp = [];
      result = "";
    console.log();
});

request.on('done', function (rowCount, more) {
  console.log(rowCount + ' rows returned');
});
connection.execSql(request);
}//end executeStatement

function insertStatement() {
  request = new Request("INSERT INTO Users_Table (FIRST_NAME,LAST_NAME,USERNAME,EMAIL,LOCATION,OFFICE,DEPARTMENT) " +
    "VALUES ('Test','User', 'taco','test@NewVizProgramming.com','Missouri Western','N/A','CSMP');"
    /*"INSERT Users_Table.User (FIRST_NAME,LAST_NAME,USERNAME,EMAIL,LOCATION,OFFICE,DEPARTMENT) OUTPUT INSERTED.USERNAME" +
    +"VALUES (@FIRST_NAME, @LAST_NAME, @USERNAME, @EMAIL, @LOCATION, @OFFICE, @DEPARTMENT);"*/, function (err) {
      if (err) {
        console.log(err);
      }
    });
  //request.addParameter('FIRST_NAME', TYPES.NVarChar, 'SQL Server Express 2014');
  connection.execSql(request);
}
  function getAllAssets(){
  return assets;
}
