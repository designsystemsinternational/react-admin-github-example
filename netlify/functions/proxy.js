const proxy = require("@designsystemsinternational/react-admin-github/src/node");

const handler = async (event) => {
  const response = await proxy({
    url: "/.netlify/functions/proxy",
    repo: "designsystemsinternational/react-admin-github-example",
    httpMethod: event.httpMethod,
    httpQuery: event.queryStringParameters,
    httpHeaders: event.headers,
    httpBody: event.body,
    token: process.env.GITHUB_TOKEN,
    secret: process.env.SECRET,
  });
  return response;
};

module.exports = {
  handler,
};
