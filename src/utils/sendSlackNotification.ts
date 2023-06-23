import { IncomingWebhook } from '@slack/webhook';
import { simpleGit as SimpleGit } from 'simple-git';

import { name as projectName, version } from '../../package.json';

const BUILD_ENV = process.env.BUILD_ENV as string;
const PROJECT_URL = process.env.PROJECT_URL;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL || 'test';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

const simpleGit = SimpleGit();

async function sendSlackNotification() {
  const revision = await simpleGit.revparse('HEAD');
  const author = await simpleGit.log({
    maxCount: 1,
  });
  const authorName = author.latest?.author_name || 'Unknown';

  const commitMessages = await simpleGit.log({
    maxCount: 5,
  });
  const combinedMessages = commitMessages.all
    .map((commit) => `${commit.hash.substring(0, 8)} (${commit.author_name}) ${commit.message}`)
    .join('\n');

  const repo =
    'https://github.com' +
      ((await simpleGit.remote(['get-url', 'origin'])) as string).split('github.com')[1] || '';
  console.log('repo:', repo);

  const messageBlocks = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `:rocket: *${projectName} v${version} - Deployed to ${BUILD_ENV}*`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Created by:* ${authorName}`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `\`\`\`${combinedMessages}\`\`\``,
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'View Commit',
          },
          style: 'primary',
          url: `${repo}/commit/${revision}`,
        },
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'View Site',
          },
          style: 'primary',
          url: PROJECT_URL,
        },
      ],
    },
  ];

  webhook
    .send({
      channel: SLACK_CHANNEL,
      blocks: messageBlocks,
      username: 'Deployment Bot',
    })
    .catch((err: Error) => {
      console.log('error:', err);
    });
}

sendSlackNotification();
