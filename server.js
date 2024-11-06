const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const { randSequence, genSalt } = require("./utils/salt");
const { newMd5Hash } = require("./utils/hasher/md5");

const indexRouter = require("./apps/home/indexRouter");
const televisionRouter = require("./apps/television/televisionRouter");
const mobilephoneRouter = require("./apps/mobilephones/mobilephoneRouter");

const pool = new Pool({
	user: process.env.DB_USERNAME,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});

const app = express();
// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/televisions", televisionRouter);
app.use("/mobilephones", mobilephoneRouter);

app.get("/computers", async (req, res) => {
	try {
		message = "";
		const result = await pool.query("SELECT * FROM Computers");
		res.render("category", { products: result.rows });
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}
});

// app.get("/mobilephones", async (req, res) => {
// 	try {
// 		message = "";

// 		const result = await pool.query("SELECT * FROM mobilephones");
// 		res.render("category", { products: result.rows });
// 	} catch (err) {
// 		console.error(err);
// 		res.send("Error " + err);
// 	}
// });

// app.get("/televisions", async (req, res) => {
// 	try {
// 		message = "";
// 		const result = await pool.query("SELECT * FROM Televisions");
// 		res.render("category", { products: result.rows });
// 	} catch (err) {
// 		console.error(err);
// 		res.send("Error " + err);
// 	}
// });

// app.get("/", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM MobilePhones");
//     res.render("index", { products: result.rows });
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// });

// app.get("/", async (req, res) => {
// 	try {
// 		const featuredProductsResult = await pool.query(
// 			"SELECT * FROM MobilePhones LIMIT 4"
// 		);
// 		const computersResult = await pool.query(
// 			"SELECT * FROM Computers"
// 		);
// 		const televisionsResult = await pool.query(
// 			"SELECT * FROM Televisions"
// 		);

// 		const products = {
// 			featuredProducts: featuredProductsResult.rows,
// 			computers: computersResult.rows,
// 			televisions: televisionsResult.rows,
// 		};

// 		res.render("index", { products });
// 	} catch (err) {
// 		console.error(err);
// 		res.send("Error " + err);
// 	}
// });


app.post("/register", async (req, res) => {
	const { name, email, password, passwordConfirm, agree } = req.body;
	if (!agree) {
		message = "Bạn cần đồng ý với các Điều khoản và Điều kiện.";
		return res.render("register", { message });
	}

	if (password !== passwordConfirm) {
		message = "Mật khẩu không khớp.";
		return res.render("register", { message });
	}

	const userCheck = await pool.query(
		"SELECT * FROM users WHERE email = $1",
		[email]
	);
	if (userCheck.rows.length > 0) {
		message =
			"Email này đã được đăng ký. Vui lòng sử dụng email khác.";
		return res.render("register", { message });
	}

	const salt = genSalt(50);
	const md5 = newMd5Hash();
	const hashedPassword = md5.hash(password + salt);

	const query =
		"INSERT INTO users (email, password, salt) VALUES ($1, $2, $3)";
	const values = [email, hashedPassword, salt];

	await pool.query(query, values);
	console.log("Đã ghi dữ liệu vào cơ sở dữ liệu.");
	message = "Đăng ký thành công!";
	return res.render("register", { message });

	// console.log("Tên:", name);
	// console.log("Email:", email);
	// console.log("Mật khẩu:", hashedPassword);
	// res.send("Đăng ký thành công!");
});

app.get("/register", (req, res) => {
	res.render("register");
});

// Start the server
const HOST = process.env.SERVER_HOST || "localhost";
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, HOST, () => {
	console.log(`Server is running at http://${HOST}:${PORT}`);
});
