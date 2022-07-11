import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { client } from '../lib/apollo';


const GET_CONTRUIES = gql`
  query{
  countries{
    name
    code
    currency
  }
}

`;

export interface Countries{
  
   name:string;
   currency:string;
  code:string;
  
}

/*
function CountrySelect() {
    const [country, setCountry] = useState('US');
    const {data, loading, error} = useQuery(GET_CONTRUIES, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
  
    return (
      <select value={country} onChange={event => setCountry(event.target.value)}>
        {data.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    );
  }

*/
//////////seprar//////

export function Formul(){
    const {data} = useQuery<{countries:Countries[]}>(GET_CONTRUIES);  
  
    
    const[countries, setCountries] = useState();
    
    
  return( 
    
      
    <div className="p-8 flex items-center justify-center">
     
     <div className="px-14 py-1 
     bg-slate-200 
     border 
     border-blue-400
     rounded">
         <strong className="p-8 text-gray-700">Insira seus dados</strong>
     
    <form className="
       gap-5
      flex flex-col">
      
      <input 
      className="bg-gray-700 border border-gray-200 "
      type="text"
      placeholder="digitel seu nome: "
      />

     <input 
     className="bg-gray-700 border border-gray-200"
      type="idade"
      placeholder="digitel sua idade: "
      />
      
      {/**SELETOR DE PAÍSES ///////////// */}
      <select 
      value={countries}
      onChange={event => setCountries}
      className='bg-gray-500 rounded'>
        {data?.countries.map(countries =>(
            <option key={countries.code}>
              
               {countries.name}
               {countries.currency}
               {countries.code}
            </option>
        ))}
        
      </select>

      {/*TABELA ///////////////////*/}

{/*
        {data?.countries.map(countries => (
           ))}
        */}
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



      <button 
      type="submit" 
      className="bg-blue-900">
          marca minha viagem
      </button>

    </form>

    

     </div>
 </div>
 
 )   
}
