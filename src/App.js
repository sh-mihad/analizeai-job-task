import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';
import Accordian from './Component/Accordian';

function App() {

  const {data:userData,refetch} = useQuery({ 
    queryKey: ['userData'],
    queryFn: async ()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
      const userData = await res.json()
      return userData;
    }
  })

  const count = 10;
  const [page,setPage] = useState(0)
  const [size, setSize] = useState(5)

  const pages = Math.ceil(count/size)
  // console.log(page);

  const handlePage =(number)=>{
    setPage(number)
    refetch()
  }


  return (
    <div className="p-14 bg-zinc-50 px-10 h-screen max-w-screen-2xl mx-auto">
     <div className="flex-none ">
   {
     userData?.map(data=><Accordian
     data={data}
     ></Accordian>)
   }
     </div>
     <div>
      {
      userData && [...Array(pages).keys()]?.map(numer=><button
        key={numer}
        className="rounded-3xl p-4 border mr-2"
        onClick={()=>handlePage(numer+1)}
        >{numer+1}</button>)
      }
     </div>
    </div>
  );
}

export default App;
