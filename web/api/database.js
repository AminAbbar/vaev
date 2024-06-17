const mysql = require('mysql2');

exports.connect = function(){
	const connection = mysql.createConnection({
		host: "mysql.db.bot-hosting.net",
		user: "u91316_xjwZbSniHc",
		password: "IG1c@Z1oWZ2rsuH8YsG=x@ct",
		database: "s91316_testingAmin",
		port: 3306  // MySQL default port
		
		
		
		//host: "localhost",
		//user: "root",
		//password: "passwordd.7979",
		//database: "testingAmin",
		});

	connection.connect(function(err) {
		if(err) throw err;
		console.log('[testingAmin] database connected');
	});

	return connection;
}
