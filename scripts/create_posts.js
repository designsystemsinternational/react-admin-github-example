const fs = require("fs");

for (let i = 0; i < 50; i++) {
  fs.writeFileSync(
    `content/posts/post-number-${i}.json`,
    JSON.stringify(
      {
        title: `Post Number ${i}`,
        body: "This is a post that I really like",
      },
      null,
      2
    )
  );
}
