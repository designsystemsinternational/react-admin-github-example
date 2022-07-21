const proxy = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  return await proxy({
    url: "/.netlify/functions/proxy",
    repo: "designsystemsinternational/react-admin-github-example",
    httpMethod: event.httpMethod,
    httpQuery: event.queryStringParameters,
    httpHeaders: event.headers,
    httpBody: event.body,
    token: process.env.GITHUB_TOKEN,
    secret: process.env.SECRET,
  });
};

module.exports = {
  handler,
};
