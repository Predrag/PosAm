import express, { Express, Request, Response } from 'express';
import wikiRouter from './routers/wiki'

const app: Express = express();
const port = 2222;

app.use('/wiki', wikiRouter)
app.get('/', (req: Request, res: Response) => {
    res.send('{ahoj:"ahoj"');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
