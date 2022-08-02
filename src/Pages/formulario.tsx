import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import {Header} from "../components/Header"
import { ErrorMessage, Formik, useFormik } from 'formik';
import Input from '../Input';
import {createUserFormSchema} from '../schemas/validation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useNavigate } from 'react-router-dom';


export const GET_CONTRUIES = gql`
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

export function Formul(){
    const {data} = useQuery<{countries:Countries[]}>(GET_CONTRUIES);  
    const[countries, setCountries] = useState();
    const [cpf, setCpf] = useState("");
    const [dateVoo, setDateVoo] = useState(new Date());
    
    const navigate = useNavigate();
    
    const handleClickRouter = () => {
         navigate('/destinos')
    }
    

  {/**VALIDAÇÃO E ERROS */}
      const [showErros,setShowErros] = React.useState(false);
      const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
          name:'',
          email: '',
        },
        validationSchema:createUserFormSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
    
      const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        setShowErros(true);
        handleSubmit(e);
      }

   
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
      flex flex-col"
     onSubmit={onSubmit}
     >
      {/**name */}
      <Input 
      name='name'
      
            label='nome'
            value={values.name}
            onChange={handleChange}
            erro={showErros ? errors.name : ""}     />
      

   {/**email */}
    <Input
      name='email'
      type='email'
      label='Email'
      value={values.email}
      onChange={handleChange}
      erro={showErros ? errors.email : ""}
    />


{/**IDADE */}
     <label className="text-gray-900 mb-1">
       idade
     <input 
     className="bg-gray-700 border border-gray-200"
      type="idade"
      placeholder="digitel sua idade: "
      />
     </label>

{/**CPF */}
<label className="text-gray-900 mb-1">
  CPF 
     <InputMask 
     className='bg-gray-700 border border-gray-200'
     mask='999.999.999-99'
     value={cpf}
     onChange={e => setCpf(e.target.value)}
     placeholder="cpf"
     />
  </label>
    
    {/**DATA DO VOO */}

  <div>
    <Calendar 
    onChange={setDateVoo} 
    value={dateVoo}/>
  </div>

   
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
      
      <button 
      type="submit" 
      className="bg-blue-900"
      onClick={handleClickRouter}>
          cadastrar
      </button>

    </form>

     </div>
 </div>
 
 )   
}

