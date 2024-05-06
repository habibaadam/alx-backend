const redis = require('redis');
import { createClient } from "redis";

const client = createClient();

client.on('error', (ERROR_MESSAGE) =>
  console.log('Redis client not connected to the server', ERROR_MESSAGE));
client.on('connect', () => console.log('Redis client connected to the server'));

// Function to set a new value in the Redis client
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display the value of a school
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.log(err.message);
    }
    console.log(reply);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
