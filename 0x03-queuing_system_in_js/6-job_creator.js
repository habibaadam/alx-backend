import { createQueue } from "kue";
const queue = createQueue();

const job  = queue.create('push_notification_code', {
  phoneNumber: '1234567890',
  message: 'This is the code to verify your account',
}).save(function(err) {
  if (err) {
    console.log('Notification job failed', err);
  }
  console.log(`Notification job created: ${job.id}`);
});


job.on('complete', () => {
  console.log(`Notification job completed`);
});

job.on('failed', () => {
  console.log(`Notification job failed`);
});
