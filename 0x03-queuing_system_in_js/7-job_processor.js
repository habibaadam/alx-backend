import { createQueue } from "kue";
const queue = createQueue();

const blacklist = ['4153518780', '4153518781'];

const sendNotification = (phoneNumber, message, job, done) => {
  //  track the progress of the job of 0 out of 100
  job.progress(0, 100);
  if (blacklist.includes(phoneNumber)) {
    // set the job as failed
    done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }
  // otherwise track job process at 50%
  job.progress(50, 100);
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  // set the job as completed
  done();
}

// use sendNotification function to send a notification by processing jobs from the queue
queue.process('push_notification_code_2', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
  done();
})
