const path = require("path");
const fs = require("fs");

const SKETCH_FILENAME = "index.ts";
const TITLE_PATTERN = /export const title = "(.*)"/;

const getSketchMeta = (slug, src) => {
  const data = fs.readFileSync(src, "utf-8");
  const matches = data.match(TITLE_PATTERN);

  if (!matches) throw new Error(`Exported title is not found in "${src}"`);

  return {
    slug,
    title: matches[1],
  };
};

/**
 * @param {string} dir
 */
module.exports = (dir) => {
  const absDir = path.resolve(__dirname, "../../", dir);
  const items = fs.readdirSync(absDir, { withFileTypes: true });
  const works = items.reduce((result, item) => {
    if (!item.isDirectory()) return;

    const subItems = fs.readdirSync(path.resolve(absDir, item.name), { withFileTypes: true });

    if (!subItems.some((subItem) => subItem.isFile() && subItem.name === SKETCH_FILENAME)) return;

    const meta = getSketchMeta(item.name, path.resolve(absDir, item.name, SKETCH_FILENAME));

    return [...result, meta];
  }, []);

  return works;
};
