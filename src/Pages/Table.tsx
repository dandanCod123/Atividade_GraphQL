import { useQuery } from "@apollo/client";

import { useNavigate } from "react-router-dom";
import {Countries, GET_CONTRUIES} from './formulario';





export function TableCountries(){
    const {data} = useQuery<{countries:Countries[]}>(GET_CONTRUIES);  
    
    const navigate = useNavigate();
    
    const handleClickVoltar = () => {
         navigate('/')
    }
  return(
      <div className=" px-44 py-2 justify-center">
          <table className='bg-blue-700'>
           <thead>
             <tr className='bg-blue-400'>
               <th className='bg-blue-300 border border-black'>NOME</th>
               <th className='bg-violet-500 border border-black'>CODE</th>
               <th className='bg-sky-400 border border-black'>CURRENCY</th>
             </tr>
           </thead>
           

           {data?.countries.map(countries => (
         <tr key={countries.code}>

           <th 
           className='
           flex justify-center 
           bg-blue-300 border 
           border-black'>
             {countries.name}
             </th>

           <th 
           className='
           bg-violet-500 
           border border-black'>
             {countries.code}
             </th>

           <th className='
           bg-sky-400 
           border border-black'>
             {countries.currency}
             </th>

           </tr>
       ))}
       
          </table>

    <button type="submit" 
      className="bg-blue-600 flex  justify-center rounded py-1 px-5 "
      onClick={handleClickVoltar}> 
          Voltar
      </button>

      </div>

    
  );
}