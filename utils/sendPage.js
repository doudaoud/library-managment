import { renderToStaticMarkup } from "react-dom/server";

function sendPage( res, element ) {
    const html = renderToStaticMarkup(element);
    res.status(200).send( "<!DOCTYPE html>" + html);
}

module.exports =  sendPage ;