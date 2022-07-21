const proxy = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  return await proxy({
    url: "/.netlify/functions/proxy",
    httpMethod: event.httpMethod,
    httpQuery: event.queryStringParameters,
    httpHeaders: event.headers,
    httpBody: event.body,
    repo: "designsystemsinternational/react-admin-github-example",
    token: process.env.GITHUB_TOKEN,
    secret: process.env.SECRET,
  });
};

module.exports = {
  handler,
};
