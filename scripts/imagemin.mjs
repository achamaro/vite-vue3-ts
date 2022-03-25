// -------------------------------------------------------------
// [.lintstagedrc.js]
// -------------------------------------------------------------
// module.exports = {
//   "*.{png,jpeg,jpg,gif,svg}": ["node scripts/imagemin.mjs", "git add"]
// }
// -------------------------------------------------------------
// [cli]
// -------------------------------------------------------------
// ls -1 src/assets/images/*/* |xargs node scripts/imagemin.mjs
// -------------------------------------------------------------

import fs from "fs";
import imageminGifsicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const plugins = [
  imageminMozjpeg({
    quality: 80,
  }),
  imageminPngquant({
    speed: 1,
    quality: [0.65, 0.8],
  }),
  imageminGifsicle(),
  imageminSvgo({
    plugins: [
      {
        name: "removeViewBox",
        active: false,
      },
    ],
  }),
];

Promise.all(
  process.argv.slice(2).map((filename) => {
    return plugins
      .reduce((promise, data) => promise.then(data), readFile(filename))
      .then((data) => writeFile(filename, data));
  })
).catch((err) => {
  console.log(err);
  process.exit(1);
});
