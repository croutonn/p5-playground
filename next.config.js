const getWorks = require("./framework/next/works");

const REPO_NAME = "p5-playground";
const DEBUG = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: DEBUG ? "" : `/${REPO_NAME}`,
  publicRuntimeConfig: {
    works: getWorks("src/works"),
  },
};
