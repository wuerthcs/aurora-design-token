const fs = require("fs");
const theo = require("theo");

const writeTokenFileWithContent = (format, target, content) => {
  return new Promise((resolve, reject) => {
    const parts = format.split(".");
    const ext = parts[parts.length - 1];
    if (!fs.existsSync(`./dist`)) {
      fs.mkdirSync(`./dist`);
    }
    fs.writeFile(`./dist/${target}.${ext}`, content, err => {
      resolve();
    });
  });
};

const generateTokenFile = async (target, type) => {
  const res = await generateToken(target, type);
  return writeTokenFileWithContent(type, target, res);
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
  await generateTokenFile("android", "android.xml");
  await generateTokenFile("ios", "ios.json");
};

main();
