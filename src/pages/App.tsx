//console.log("env=", process.env.NODE_ENV)
//
export function App() {
  return (
  <html>
    <head>
        <title>welcome</title>
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
