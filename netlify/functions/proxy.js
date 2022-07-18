const proxy = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  const { statusCode, body } = await proxy({
    httpMethod: event.httpMethod,
    httpQuery: event.queryStringParameters,
    httpHeaders: event.headers,
    httpBody: event.body,
    repo: "designsystemsinternational/react-admin-github-example",
    token: process.env.GITHUB_TOKEN,
    secret: process.env.SECRET,
  });
  console.log(statusCode, body);
  return {
    statusCode,
    body: JSON.stringify(body),
  };
};

module.exports = {
  handler,
};
