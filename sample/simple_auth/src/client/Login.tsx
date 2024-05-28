import { useState, useEffect } from 'preact/hooks'
import CrudIndex from './Login/CrudIndex';
//
function Page() {
  const [count, setCount] = useState(0);
  //
  useEffect(() => {
    (async () => {
      hiddenNavibar();
    })()
  }, []);
  /**
   *
   * @param
   *
   * @return
   */     
  const hiddenNavibar = function(){
    const elm = document.querySelector(`.app_navi_wrap`);
    if(elm) {elm.classList.remove('d-none');}
    if(elm) {elm.classList.add('d-none');}
  }
  /**
   *
   * @param
   *
   * @return
   */
  const loginProc = async function(){
    try {
      const v =  CrudIndex.login(); 
//console.log("#loginProc.v=", v);
      if(!v){
        alert("error, Login");
        return;
      }
      const name = import.meta.env.VITE_APP_NAME + "_auth";
      localStorage.setItem(name, '1');
      location.href = '/';
    } catch (e) {
      console.error(e);
    }
  }
  //
  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <h1 class="text-4xl text-gray-700 font-bold my-2"
      >Login !</h1>
      <hr class="my-2" />
      <label class="text-2xl font-bold my-2">Email:</label>
      <input type="text" id="email" name="email"
      class="border border-gray-400 rounded-md px-3 py-2 w-full"
      /> 
      <hr class="my-2" />
      <label class="text-2xl font-bold my-2">Password:</label>
      <input type="text" id="password" name="password"
      class="border border-gray-400 rounded-md px-3 py-2 w-full" /> 
      <hr class="my-2" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={()=>loginProc()}>Login
      </button>
    </div>
  </>
  )
}
export default Page;
/*
*/