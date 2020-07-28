const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 output: {
   path: path.resolve( __dirname, 'dist' ),
   filename: '[id].[hash].bundle.js',
   publicPath: '/',
 },
 devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3000,
      sockPort: 443,
      disableHostCheck: true,
      hot: false
 },
 "module": {
   "rules": [
     {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader"
       ]
     },
   ]
 },
 plugins: [
   new HtmlWebPackPlugin({
     template: path.resolve( __dirname, 'public/index.html' ),
     filename: 'index.html'
   })
 ]
}