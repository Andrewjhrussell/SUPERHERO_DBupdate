var mysql = require("mysql");
var inquirer = require("inquirer")
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Kingman1",
  database: "SUPERHEROUPDATE_DB"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start()
  });


function createHero(){
 var questions =[
     {
         type:"input",
         name:"superName",
         message:"What is the superheros name?"
     },
     {
        type:"input",
        name:"secretID",
        message:"What is the Secret ID?"
    },
    {
        type:"input",
        name:"superPower",
        message:"What is the super power?"
    }
 ]
 inquirer.prompt(questions).then(function(userResponse){
     console.log(userResponse)
     connection.query("INSERT INTO HEROES(Hero_Name, Secret_ID, Super_Power) VALUES (?,?,?)",[userResponse.superName, userResponse.secretID, userResponse.superPower],
        function (err, res) {
            if(err) throw err
            console.log(res)
            start()
        }
     )
 })
}

function start() {
     connection.query('SELECT * FROM superhero_db.heroes', function(err, heroes){
        if(err) throw err;
        console.table(heroes)
        createHero()
    })
}
