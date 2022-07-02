const {
  authenticate,
} = require("@designsystemsinternational/react-admin-github/api");

const handler = async (event) => {
  const body = JSON.parse(event.body);

  const response = await authenticate({
    username: body.username,
    password: body.password,
    repo: "designsystemsinternational/react-admin-github-example",
    usersFolder: "content/users",
    token: process.env.GITHUB_TOKEN,
    secret: process.env.SECRET,
  });

  if (response.authenticated) {
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } else {
    return {
      statusCode: 401,
    };
  }
};

module.exports = {
  handler,
};
