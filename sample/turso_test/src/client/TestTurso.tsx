import { useEffect, useState } from 'preact/hooks';
//import Head from '../components/Head';
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './TestTurso/CrudIndex';
//
let pageItems: any[] = [];
let items: any[] = [];
//
function Page() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  useEffect(() => {
    (async() => {
//      console.log('Count updated:', count);
      getList();
    })()
  }, []);
  //
  const addItem = async function(){
    try{
      await CrudIndex.addItem(); 
      location.reload();
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
  const getList = async function() {
    try{
console.log("#getList");
      const item  = {
        "userId": 0,
      }      
      const json = await HttpCommon.post(item, "/api/turso/get_list");
      pageItems = json.data;
      console.log(json.data);
      setUpdatetime(new Date().toString());
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
      </div>
      <h1 class="text-4xl font-bold">TestTurso.tsx</h1>
      <hr class="my-2" />
      <label>Title:</label>
      <input type="text" id="title" 
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />
      <div class="card">
        <button class="btn-purple my-1" onClick={() => addItem()}>Save
        </button>
      </div>
      <hr />
      {pageItems.map((item: any) => {
        return (
        <div key={item.id}>
          <h3 class="text-3xl font-bold">{item.title}</h3>
          <span>id: {item.id}</span>
          <a href={`/testapishow?id=${item.id}`}>
            <button class="btn-outline-purple ms-2">Show</button>
          </a>
          <hr />
        </div>
        );
      })}
    </div>
  )
}
export default Page;
/*
<a href="/">[ home ]</a>
<hr />
*/