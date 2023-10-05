import mysql2 from "mysql2"
import express from "express"
import cors from "cors"

const app = express()

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());
app.use(cors());

let mysqlConnection = mysql2.createConnection({
    user: "shop",
    password: "password",
    database: "shopdb",
    host: "localhost"
})

//create sign up table for users

app.get("/creat-table", (req, res)=>{
    let message = "table is created"

    let orders = `CREATE TABLE if not exists orders(
        order_id int auto_increment,
        item varchar(255) not null,
        price varchar(255) not null,
        PRIMARY KEY (order_id)
    )`
    
    mysqlConnection.query(orders, (err, results, fields)=>{
        if(err){
            console.log(err)
        }
    })
    
    res.end(message)
})

// insert user information from sign up page

app.post("/insert", (req,res)=>{
    
    const { item, price} = req.body; 
    
    const sqlInsert = `INSERT INTO orders (item, price) VALUES(?, ?)`;
                    mysqlConnection.query(sqlInsert, [item, price], (err, results, fields)=>{
                        console.log(item)
                        console.log(results)
                        res.end("inserted seccessful");
                        if(err){
                            console.log(err)
                        }
                    })
})

app.get("/show", (req, res)=>{
    const sqlSelect = "SELECT * FROM orders"
    mysqlConnection.query(sqlSelect, (err, results)=>{
        // console.log("results : ", results);
        res.send(results)

})
})

app.put("/update", (req, res) => {
	const { newPrice, item } = req.body;
	let updatePrice = `UPDATE users SET price = ? WHERE item = ?`;
	mysqlConnection.query(updatePrice, [newPrice, item], (err, results, fields) => {
		if (err) throw err;
		console.log(results.affectedRows + " record(s) updated");
		res.send(results);
	});
});

app.delete("/delete-order", (req, res) => {
	const { item, price } = req.body;
	let removeOrder = `DELETE FROM orders WHERE item = ? AND price = ?`;

	mysqlConnection.query(removeOrder, [item, price], (err, results) => {
		if (err) throw err;
		console.log(results.affectedRows + " record(s) Deleted");
        res.send(results);
	});
});

app.listen(6900, ()=>{
    console.log('server listen port http://localhost:6900')
})