const redis = require('redis');
import { createClient } from "redis";
const util = require('util');

const client = createClient();

client.on('error', (ERROR_MESSAGE) =>
  console.log('Redis client not connected to the server', ERROR_MESSAGE));
client.on('connect', () => console.log('Redis client connected to the server'));

// Function to set a new value in the Redis client
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display the value of a school
// using promisify to convert callback to promise
async function displaySchoolValue(schoolName) {
  const getAsync = util.promisify(client.get).bind(client);
  try {
    console.log(await getAsync(schoolName));
  } catch (err) {
    console.log(err.message);
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
