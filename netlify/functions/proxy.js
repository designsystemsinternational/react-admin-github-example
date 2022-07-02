const { proxy } = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  try {
    const response = await proxy({
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
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.log("ERROR", e);
    return {
      statusCode: e.status,
      body: JSON.stringify({ error: e.message }),
    };
  }
};

module.exports = {
  handler,
};
