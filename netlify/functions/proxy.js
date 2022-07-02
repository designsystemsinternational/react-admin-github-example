const { proxy } = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  try {
    const response = await proxy({
      repo: "designsystemsinternational/react-admin-github-example",
      httpMethod: event.httpMethod,
      query: event.queryStringParameters,
      headers: event.headers,
      token: process.env.GITHUB_TOKEN,
      secret: process.env.SECRET,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    return {
      statusCode: e.status,
      body: JSON.stringify({ error: e.message }),
    };
  }
};

module.exports = {
  handler,
};
