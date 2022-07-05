const { proxy } = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  const { statusCode, body } = await proxy({
    repo: "designsystemsinternational/react-admin-github-example",
    httpMethod: event.httpMethod,
    query: event.queryStringParameters,
    headers: event.headers,
    body: event.body,
    token: process.env.GITHUB_TOKEN,
    secret: process.env.SECRET,
    resourceIds: {
      posts: "title",
    },
  });
  console.log("proxy", statusCode, body);
  return {
    statusCode,
    body: JSON.stringify(body),
  };
};

module.exports = {
  handler,
};
