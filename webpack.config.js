module.export = {
    // ビルドの起点となるファイルの設定 
    entry : 'src/js/app.js',
    // 出力されるファイルの設定
    output:{
        path:'js',//出力先のパス
        filename:'bundle.js'//出力先のファイル名
    },
    modure:{
        // loaderの設定
        loaders:[
            {
                test:/\.{js|jsx}$/, //対象となるファイルの拡張子
                exclude:/node_modules/, // 除外するファイルディレクトリ
                loader:'babel-loader', // 使用するloader
                query:{
                    presets:['ec2015','react']
                }
                
            }
        ]
    }
}