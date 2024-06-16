const mongoose = require("mongoose");
const dbConnect = () => {
	mongoose
		.connect('mongodb+srv://rohitrc2005:uq9UBQZnr8FkPjpE@cluster0.iup8sox.mongodb.net/bankdb')
		.then(() => console.log("DB CONNECTION SUCCESS"))
		.catch((err) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(err.message);
			process.exit(1);
		});
};
module.exports = dbConnect;