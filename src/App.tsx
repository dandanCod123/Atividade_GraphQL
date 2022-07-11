import {Header} from './components/Header';
import {Formul, Countries} from './components/formulario'


import { useState } from 'react';


function App() {
  const [data, setData] = useState<Countries[]>([]);

    return(
    <div className="bg-gray-900 flex flex-col min-h-screen">
     <Header/>
     <Formul/>
  
        
      
    </div>
    
  );
}

export default App;
