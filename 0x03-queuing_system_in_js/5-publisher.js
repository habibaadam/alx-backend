import { createClient } from "redis";

const client = createClient();

client.on('error', (ERROR_MESSAGE) =>
  console.log('Redis client not connected to the server', ERROR_MESSAGE));
client.on('connect', () => console.log('Redis client connected to the server'));

function publishMessage(message, time) {
  // before the message is sent, log the message to the console
  console.log(`About to send ${message}`)
    // after time millisecond, publish the message
  setTimeout(() => {
    client.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
