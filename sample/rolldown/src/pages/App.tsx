//console.log("env=", process.env.NODE_ENV)

import renderLayout from './renderLayout';
//
export default function Page(props: any) { 
  console.log(props);
  const htm = `
  <div>
    <div id="app"></div>
    <input type="hidden" id="cookieAuth" value="${props.coolieAuth}"/>
  </div>
  `;
  return renderLayout({children: htm, title: "Home"});
}

/*
{(process.env.NODE_ENV === "develop") ? (
    <script type="module" src="/static/main.js"></script>
): (
    <script type="module" src="/public/static/main.js"></script> 
)}
*/
