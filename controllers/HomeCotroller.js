import { renderToStaticMarkup } from "react-dom/server";

function sendHomePage(res, element) {
  const html = renderToStaticMarkup(element);
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management</title>
    <link rel="stylesheet" href="https://unpkg.com/@smastrom/react-rating@1.5.0/style.css" />
</head>
<body>
    ${html}
</body>
</html>`);
}

module.exports = sendHomePage;
