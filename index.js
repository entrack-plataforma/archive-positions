const { Client } = require('pg')



exports.handler = async (event) => {
  const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: {
      rejectUnauthorized: false,
    }
});
    await client.connect()
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda2!'),
    };
    await client.end()
    return response;
  };
  