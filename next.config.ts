import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const GITHUB_USERNAME = "emmavandewalle";
const REPO_NAME = "geneeskunde-visualisaties";

const nextConfig: NextConfig = {
    output: "export",

    basePath: isProd ? `/${REPO_NAME}` : "",
    assetPrefix: isProd ? `https://github.io/${GITHUB_USERNAME}/${REPO_NAME}` : "",

    images: {
        unoptimized: true
    }
};

export default nextConfig;
