import stylePlugin from 'esbuild-style-plugin'
import {build} from "esbuild" 

build({
    entryPoints: [
        "./src/index.js",
        "./src/index.html"
    ],
    loader: {
        ".html": "copy"
    },
    outdir: "dist",
    bundle: true,
    plugins: [
        stylePlugin()
    ]
})
