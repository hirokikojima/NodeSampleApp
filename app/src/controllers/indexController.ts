import * as express from 'express';
import axios from 'axios';

export default(req: express.Request, res: express.Response) => {
    // 郵便番号から住所を取得する
    axios.get(`https://api.zipaddress.net/?zipcode=${req.query.zipcode}`)
        .then((response) => {
            return res.render('index.ejs', response.data);
        })
        .catch((error) => {
            res.status(500).send('Internal Server Error.');
        });
};
