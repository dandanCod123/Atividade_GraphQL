import {Route, Routes} from 'react-router-dom';
import {Formul} from './Pages/formulario';
import {TableCountries} from './Pages/Table'

export function Router(){
    return(
    <Routes>
        <Route path='/' element={<Formul/>}/>
        <Route path='/destinos' element={<TableCountries/>}/>
    </Routes>
    );
}