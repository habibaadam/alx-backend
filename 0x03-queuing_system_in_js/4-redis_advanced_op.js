const redis = require('redis');
import { createClient } from "redis";

const client = createClient();

client.on('error', (ERROR_MESSAGE) =>
  console.log('Redis client not connected to the server', ERROR_MESSAGE));
client.on('connect', () => console.log('Redis client connected to the server'));

// function for creating a hash
const createHash = () => {
  client.hset('HolbertonSchools', 'Portland', '50', redis.print);
  client.hset('HolbertonSchools', 'Seattle', '80', redis.print);
  client.hset('HolbertonSchools', 'New York', '20', redis.print);
  client.hset('HolbertonSchools', 'Bogota', '20', redis.print);
  client.hset('HolbertonSchools', 'Cali', '40', redis.print);
  client.hset('HolbertonSchools', 'Paris', '2', redis.print);
}

// function for displaying the values of a hash
const displayHash = () => {
  client.hgetall('HolbertonSchools', (err, reply) => {
    if (err) {
      console.log(err.message);
    }
    console.log(reply);
  });
}

createHash();
displayHash();