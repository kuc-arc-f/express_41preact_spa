import { useEffect, useState } from 'preact/hooks';
//import Head from '../components/Head';
import CrudIndex from './TestApi/CrudIndex';
import CrudShow from "./TestApiShow/CrudShow"
//
// let pageItems: any[] = [];
let pageItem: any = {};
let itemId: number = 0;
//
function Page() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  useEffect(() => {
    (async() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id') || "";
        itemId = Number(id);
console.log("itemId=", itemId);
//      console.log('Count updated:', count);
        getItem(itemId);
    })()
    }, []);
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
              window.location.href = '/testapi';
            }
        } catch (e) {
            console.error(e);
        } 
    } 
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
      </div>
      <h1 class="text-4xl font-bold">{pageItem.title}</h1>
      <hr class="my-2" />
      ID: {pageItem.id} , {pageItem.createdAt}
      <hr class="my-2" />
      <div class="card">
        <button onClick={()=>deleteItem()} class="btn-red"
        >delete</button>
      </div>
    </div>
  )
}
export default Page;
/*
<Head />
*/