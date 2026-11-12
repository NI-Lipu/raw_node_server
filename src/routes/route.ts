import { IncomingMessage, ServerResponse } from "http";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({ message: "This is root route!!" }));
    } else if (url?.startsWith("/products")) {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({ message: "This is Products route!!" }));
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({ message: "This route is not define" }));
    }
};

export default routeHandler;
