import express, {Request, Response} from 'express'


const wikiRouter = express.Router()
// Home page route.
wikiRouter.get("/", function (req:Request, res: Response) {
    res.send("Wiki home page");
});

// About page route.
wikiRouter.get("/about", function (req, res) {
    res.send("About this wiki");
});

export default wikiRouter;
