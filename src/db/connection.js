const { Client } = require('pg')
const client = new Client({
  user: 'dbiujzfhugfscs',
  host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
  database: 'd5tqldpd6tsg6k',
  password: '977134ce803ef8bf8d9bf2f7ec43a0a39d4a0a729715ce0d78ec830fd88eaa74',
  port: 5432,
})
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});