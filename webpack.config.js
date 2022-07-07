const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { resolve } = require("path");
const { DefinePlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

function basePath(path = "entry") {
    path = path.toLowerCase();
    if ( path !== "entry" && path !== "output" ) throw new TypeError("The path isn`t correct");
    if ( path === "entry" ) return [ __dirname, "development" ];
    if ( path === "output" ) return [ __dirname, "docs" ];
}

const frontendConfig = (env) => {
    return {
        name: "client",
        entry: {
            index: resolve(...basePath(), "frontend/index.ts")
        },
        output: {
            path: resolve(...basePath("output"), "frontend"),
            filename: "[name].js",
            publicPath: "/"
        },
        resolve: {
            extensions: [ ".js", ".ts", ".tsx", ".vue" ],
        },
        module: {
            rules: [
                {
                    test: /\.jsm?$/,
                    use: "babel-loader",
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        "babel-loader",
                        {
                            loader: "ts-loader",
                            options: {
                                appendTsSuffixTo: [ '\\.vue$' ],
                                ignoreDiagnostics: [ 2345 ]
                            }
                        }
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.vue$/,
                    use: [
                        "vue-loader"
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.css$/,
                    use: [
                        env.mode === "development"
                        ? "vue-style-loader"
                        : MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        env.mode === "development"
                        ? "vue-style-loader"
                        : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.(png|gif|jpg)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "images/[name][ext]"
                    },
                    exclude: /[\\/]node_modules[\\/]/
                }
            ]
        },
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vue: {
                        name: "vue",
                        filename: "[name].bundle.js",
                        test: /[\\/]node_modules[\\/]@?vuex?(-\w+)?[\\/]/,
                    }
                }
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "style.css"
            }),
            new DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: true
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: "./logo_icon.png",
                    },
                    {
                        from: "./manifest.json",
                    }
                ]
            })
        ],
        target: "web",
        mode: env.mode
    }
};

const serverConfig = (env) => {
    return {
        name: "server",
        entry: {
            index: resolve(...basePath(), "backend/index.ts")
        },
        output: {
            path: resolve(...basePath("output"), "backend"),
            filename: "[name].js",
            publicPath: "/"
        },
        resolve: {
            extensions: [ ".js", ".ts", ".tsx", ".vue" ],
        },
        module: {
            rules: [
                {
                    test: /\.jsm?$/,
                    use: "babel-loader",
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        "babel-loader",
                        {
                            loader: "ts-loader",
                            options: {
                                appendTsSuffixTo: [ '\\.vue$' ],
                                ignoreDiagnostics: [ 2345, 7006, 2571 ]
                            }
                        }
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.vue$/,
                    use: [
                        "vue-loader"
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.css$/,
                    use: [
                        "vue-style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.s(a|c)ss/,
                    use: [
                        "vue-style-loader",
                        "css-loader",
                        "sass-loader"
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.(png|gif|jpg)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "images/[name][ext]"
                    },
                    exclude: /[\\/]node_modules[\\/]/
                }
            ]
        },
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    express: {
                        name: "express",
                        filename: "[name].bundle.js",
                        test: /[\\/]node_modules[\\/]express[\\/]/,
                    },
                    mongodb: {
                        name: "mongodb",
                        filename: "[name].bundle.js",
                        test: /[\\/]node_modules[\\/]mongodb([\-\w]+)?[\\/]/
                    },
                    mongoose: {
                        name: "mongoose",
                        filename: "[name].bundle.js",
                        test: /[\\/]node_modules[\\/]mongoose[\\/]/
                    }
                }
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            new DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: true
            }),
        ],
        target: "node",
        externals: [ nodeExternals() ],
        mode: env.mode
    }
};

const serviceWorkerConfig = (env) => {
    return {
        name: "serviceWorker",
        entry: {
            serviceWorker: resolve(...basePath(), "service-worker/index.ts")
        },
        output: {
            path: resolve(...basePath("output"), "service-worker"),
            filename: "[name].js",
            publicPath: "/"
        },
        resolve: {
            extensions: [ ".js", ".ts", ".tsx" ],
        },
        module: {
            rules: [
                {
                    test: /\.jsm?$/,
                    use: "babel-loader",
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        "babel-loader",
                        {
                            loader: "ts-loader",
                            options: {
                                appendTsSuffixTo: [ '\\.vue$' ],
                                ignoreDiagnostics: [ 2345 ]
                            }
                        }
                    ],
                    exclude: /[\\/]node_modules[\\/]/
                },
                {
                    test: /\.(png|gif|jpg)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "images/[name][ext]"
                    },
                    exclude: /[\\/]node_modules[\\/]/
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        target: "webworker",
        mode: env.mode
    }
}

module.exports = (env) => [ frontendConfig(env), serverConfig(env), serviceWorkerConfig(env) ];