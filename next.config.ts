import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: "export",

    basePath: isProd ? "/geneeskunde-visualisaties" : "",
    assetPrefix: isProd ? "/geneeskunde-visualisaties" : "",

    images: {
        unoptimized: true
    }
};

export default nextConfig;
