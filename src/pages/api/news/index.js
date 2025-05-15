// GET http://localhost:3000/api/news

import { articles } from '../../../database/db';

function handler(req, res) {
    if(req.method === 'GET') {
        // GET http://localhost:3000/api/news
        res.status(200)
        .json(articles)
    }
}

export default handler;