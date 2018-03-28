const Connection = require('tedious').Connection;
const fs = require('fs');

const config = {
  userName: 'zevans',
  password: 'Warner2016',
  server: 'newvizprogramming.database.windows.net',
  options: {encrypt: true, database: 'bcampDb'}
};
const connection = new Connection(config);
//initialize registration object from Server

const registrations = {
  assets: [],
  users: []
};

connection.on('connect', function (err) {
  console.log("Connected to Server");
  //insertStatement();
  /*executeStatement("SELECT * FROM Assets_Table\n" +
    "INNER JOIN Users_Table ON Assets_Table.USERID = Users_Table.ID;");*/
  getAssets();
  /*connection.close();*/
});

const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

let request;

function getAssets(callback) {
  request = new Request("SELECT * FROM Assets_Table;", function (err) {
    if (err) {
      console.log(err);
    }
  });
  let result = "";
  let temp = [];
  let json;
  let rowCount;
  request.on('row', function (columns) {
    rowCount++;
    columns.forEach(function (column) {
      result += column.value + " ";
      temp.push(column.value);
    });
    console.log(result);
    registrations.assets.push({
      "id": temp[0],
      "assetId": temp[1],
      "serialNum": temp[2],
      "userId": temp[3],
      "location": temp[4],
      "type": temp[5],
      "productNum": temp[6],
      "ram": temp[7],
      "hdType": temp[8],
      "hdSize": temp[9],
      "cost": temp[10],
      "warranty": temp[11],
      "model": temp[12],
      "brand": temp[13],
      "toner": temp[14]
    });
      json = JSON.stringify(registrations);
    //reinitialize result and temp to empty
      temp = [];
      result = "";
});
  connection.execSql(request);

  request.on('doneProc', function (rowCount) {
    console.log(rowCount + ' rows returned');
    fs.writeFile('registration.json', json);
});

}//end executeStatement

function getUsers() {

}
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

