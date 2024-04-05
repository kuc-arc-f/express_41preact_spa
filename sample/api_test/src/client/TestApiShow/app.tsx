import { useEffect, useState } from 'preact/hooks';
import Head from '../../components/Head';
import HttpCommon from '../lib/HttpCommon';
import CrudShow from "./CrudShow"
//
let pageItems: any[] = [];
let pageItem: any = {};
let itemId: number = 0;
//
export function App() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  useEffect(() => {
    (async() => {
//      console.log('Count updated:', count);
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id') || "";
      itemId = Number(id);
console.log(itemId);
      getItem(itemId);
    })()
  }, []);
  //
  const testProc = function(){
  }
  /**
   *
   * @param
   *
   * @return
   */
  const getItem = async function(id: number) {
    try{
        const item = await CrudShow.get(id);
        pageItem = item;
console.log(pageItem);
        setUpdatetime(new Date().toString());
    } catch (e) {
        console.error(e);
    } 
  }
  /**
   *
   * @param
   *
   * @return
   */
  const deleteItem = async function() {
    try{
        const result = await CrudShow.delete(itemId);
        if(result) {
            window.location.href = '/test';
        }
    } catch (e) {
        console.error(e);
    } 
  } 
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold mt-2">TestShow</h1>
      <hr class="my-2" />
      <h1 class="text-4xl font-bold">{pageItem.title}</h1>
      <p>ID: {pageItem.id}</p>
      <hr class="my-1" />
      <pre>{pageItem.content}</pre>
      <hr class="my-1" />
      <button onClick={()=>deleteItem()} class="btn-red"
      >delete</button>
      <hr class="my-1" />
    </div>
  )
}
/*
    <div class="card">
      <button class="btn-purple" onClick={() => testProc()}>Test
      </button>
    </div>
<hr />
*/