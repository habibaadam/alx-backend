import { createQueue } from "kue";
const queue = createQueue();

const createPushNotificationsJobs = (jobs, queue) => {
  if (!Array.isArray(jobs)) throw new Error('Jobs is not an array');

  jobs.forEach((job => {
    const jobsCreated = queue.create('push_notification_code_3', job).save(function(err) {
      if (!err) {
        console.log(`Notification job created: ${jobsCreated.id}`);
      }
    });
    jobsCreated.on('complete', () => {
      console.log(`Notification job ${jobsCreated.id} completed`);
    });
    jobsCreated.on('failed', () => {
      console.log(`Notification job ${jobsCreated.id} failed`);
    });
    jobsCreated.on('progress', (progress) => {
      console.log(`Notification job ${jobsCreated.id} ${progress}% complete`);
    });
}));
};

module.exports = createPushNotificationsJobs;
