import {Header} from './components/Header';
import {Countries} from './Pages/formulario'

import { client } from './lib/apollo';
import { useState } from 'react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';


function App() {
  const [data, setData] = useState<Countries[]>([]);

    return(
    
    <div className="bg-gray-900 flex flex-col min-h-screen">
  <ApolloProvider client={client}>
  <Header/>
  <BrowserRouter>
      <Router/>
      </BrowserRouter>
  </ApolloProvider>
    
  
        
      
    </div>
    
  );
}

export default App;
