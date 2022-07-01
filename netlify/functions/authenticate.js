const {
  authenticate,
} = require("@designsystemsinternational/react-admin-github");

const handler = async (event) => {
  const body = JSON.parse(event.body);
  const response = await authenticate(
    body.username,
    body.password,
    "designsystems.international/react-admin-github-example",
    "content/users",
    process.env.GITHUB_TOKEN
  );
  return response;
};

module.exports = {
  handler,
};
