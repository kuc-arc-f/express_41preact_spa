//console.log("env=", process.env.NODE_ENV)
//
export function App() {
  return (
  <html>
    <head>
        <title>welcome</title>
        <script src="https://cdn.tailwindcss.com"></script>
        {(process.env.NODE_ENV === "production") ? (
            <link href="/public/static/style.css" rel="stylesheet" /> 
        ): (
            <link href="/static/style.css" rel="stylesheet" /> 
        )}
    </head>
      <body>
        <div id="app"></div>
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/main.js"></script>
        ): (
            <script type="module" src="/public/static/main.js"></script> 
        )}             
      </body>
    </html>
  );
}
/* style.css
*/
