import { createQueue } from "kue";
const queue = createQueue();

const sendNotification = (phonenumber, message) => {
  console.log(`Sending notification to ${phonenumber}, with message: ${message}`);
}

// use sendNotification function to send a notification by processing jobs from the queue
queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
