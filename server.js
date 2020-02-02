import { resolve } from 'path';
import express, { static } from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);

app.use(
    WebpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
    })
);

app.use(WebpackDevMiddleware(compiler));
app.use(static(resolve(__dirname, 'dist')));
app.get('*', function(req, res){
    res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
