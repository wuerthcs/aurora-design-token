const fs = require("fs");
const theo = require("theo");

const writeFile = (path, fileName, content) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    fs.writeFile(`${path}/${fileName}`, content, err => {
      resolve();
    });
  });
};

const writeTokenFileWithContent = (format, target, content) => {
  return new Promise((resolve, reject) => {
    const parts = format.split(".");
    const ext = parts[parts.length - 1];
    writeFile("./dist", `${target}.${ext}`, content).then(() => resolve());
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
  await generateTokenFile("web", "json");
  await generateTokenFile("web", "sass");
  await generateTokenFile("web", "common.js");
  await generateTokenFile("web", "custom-properties.css");
  await generateTokenFile("android", "android.xml");
  await generateTokenFile("ios", "ios.json");

  await theo
    .convert({
      transform: {
        file: "./tokens/app.yaml",
        type: "web"
      },
      format: {
        type: "html"
      }
    })
    .then(res => writeFile("./public", "index.html", res));
};

main();
