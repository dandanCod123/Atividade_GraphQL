import * as yup from 'yup';

export const createUserFormSchema = yup.object().shape({
    name: yup.string()
    .max(30,'nome com no maximo 30 letras')
    .min(3,"necessita no minimo 3 letras")
    .required('nome obrigatorio'),
    
    
    email: yup.string()
    .email('insira um email valido')
    .max(50,'maximo de 50 caracteres')
    .required('email obrigatorio'),
  })