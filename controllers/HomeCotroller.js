import { renderToStaticMarkup } from "react-dom/server";

function sendHomePage(res , element ) {
  const html = renderToStaticMarkup(element);
  res.status(200).send( "<!DOCTYPE html>" + html);
}

module.exports =  sendHomePage ;
