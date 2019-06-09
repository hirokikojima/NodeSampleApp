import * as Express from 'express';
import indexController from './controllers/indexController';

const app = Express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', indexController);

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

export default app;
