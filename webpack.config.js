module.exports = {
    /* ビルドの起点となるファイルの設定 */
    entry: './src/js/index.js',
    /* 出力されるファイルの設定 */
    output: {
        path: '/js', // 出力先のパス
        filename: 'bundle.js' // 出力先のファイル名
    },
    module: {
        /* loaderの設定 */
        rules: [
            {
                test: /\.(js|jsx)$/, // 対象となるファイルの拡張子（正規表現可）
                exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
                loader: 'babel-loader', // 使用するloader
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
