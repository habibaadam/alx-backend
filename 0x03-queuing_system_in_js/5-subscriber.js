import { createClient } from "redis";

const client = createClient();

client.on('error', (ERROR_MESSAGE) =>
  console.log('Redis client not connected to the server', ERROR_MESSAGE));
client.on('connect', () => console.log('Redis client connected to the server'));

// subscribing to a channel
client.subscribe('holberton school channel');

// if the message recieved is 'KILL_SERVER', the client will unsubscribe and quit
// logging a message to console when a message is received
client.on('message', (channel, message) => {
  if (message === 'KILL_SERVER') {
    client.unsubscribe('holberton school channel');
  }
  console.log(message);
})
