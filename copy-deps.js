const { copyFile } = require("fs").promises;

const copyFontAwesome = () =>
    Promise.all([
        copyFile(
            "./node_modules/@fortawesome/fontawesome-free/LICENSE.txt",
            "./source/sprites/font-awesome/LICENSE.txt"
        ),
        copyFile(
            "./node_modules/@fortawesome/fontawesome-free/sprites/solid.svg",
            "./source/sprites/font-awesome/solid.svg"
        ),
        copyFile(
            "./node_modules/@fortawesome/fontawesome-free/sprites/brands.svg",
            "./source/sprites/font-awesome/brands.svg"
        ),
    ]);

const copyDeps = () => Promise.all([copyFontAwesome()]);

copyDeps()
    .then(() => console.log("Copied deps."))
    .catch((e) => console.error("Error copying deps.", e));
