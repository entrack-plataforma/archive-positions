const { Client } = require('pg')

const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

exports.handler = async (event) => {
    await client.connect()
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda2!'),
    };
    return response;
  };
  