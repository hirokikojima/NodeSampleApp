import * as Express from 'express';

const app = Express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get(
    '/',
    (req: Express.Request, res: Express.Response) => {
        // return res.send('Hello world.');
        return res.render('index.ejs');
    });

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

export default app;
