const fs = require("fs");
const theo = require("theo");

const writeTokenFileWithContent = (format, content) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(`./dist`)) {
      fs.mkdirSync(`./dist`);
    }
    fs.writeFile(`./dist/tokens.${format}`, content, err => {
      resolve();
    });
  });
};

const generateTokenFile = async (target, type) => {
  const res = await generateToken(target, type);
  return writeTokenFileWithContent(type, res);
};

const generateToken = async (target, type) => {
  return await theo.convert({
    transform: {
      file: "./tokens/app.yaml",
      type: target
    },
    format: {
      type: type
    }
  });
};

const main = async () => {
  await generateTokenFile("web", "json");
  await generateTokenFile("web", "sass");
};

main();
