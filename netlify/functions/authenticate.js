const {
  authenticate,
} = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const response = await authenticate({
      id: body.username,
      password: body.password,
      repo: "designsystemsinternational/react-admin-github-example",
      token: process.env.GITHUB_TOKEN,
      secret: process.env.SECRET,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    return {
      statusCode: 401,
    };
  }
};

module.exports = {
  handler,
};
