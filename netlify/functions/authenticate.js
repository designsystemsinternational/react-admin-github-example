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
  return response;
};

module.exports = {
  handler,
};
