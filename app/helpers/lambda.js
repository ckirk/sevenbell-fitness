import axios from 'axios';

const postToSlack = () => {
  console.log('Posting To Slack...')

  const channelId = 'C02N53SMC3B' // test channel
  // hot leads channelId C2JL1FZCZ

  const text = 'Test'
  const token = 'xoxb-81039659079-2769568474560-vshgxX3oA4gzIPHIFgo77Qgj'

  axios({
    url: `https://slack.com/api/chat.postMessage`,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      text: text,
      token: token,
      channel: channelId
    }
  }).then((response) => {
    console.log(response);
  })
}

postToSlack()

export default postToSlack;
