const express = require('express')
const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(sql)
connection.end

app.get('/', (req, res) => {  
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  res.write('<h1>Full Cycle Rocks!</h1>')
    
  const faker = require('faker')
  const connection = mysql.createConnection(config)
  const sql = `insert into people(name) values('`+ faker.name.findName().replace("'", "''") + `');`
  connection.query(sql)

  connection.query("select * from people", function (err, rows, fields) {
    for (i = 0; i < rows.length; i++) {
      res.write('- ' + rows[i].name + '<br/>')
    }

    connection.end
    res.end()
  });
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})
