import SideBar from './components/SideBar';
import DropdownPage from './pages/Dropdownpage';
import AccordionPage from './pages/Accordionpage';
import Route from './components/Route';
import ButtonPage from './pages/Buttonpage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App(){
   return <div className='ontainer mx-auto grid grid-cols-6 gap-4 mt-4'>
    <SideBar/>

    
        

        <div className='col-span-5'>
            <Route path = "/accordion">
            <AccordionPage/>
            
            </Route>

            <Route path = "/">
            <DropdownPage/>


            </Route>

            <Route path = "/button">
                <ButtonPage/>
            </Route>

            <Route path = "/modal">
                <ModalPage/>
            </Route>

            <Route path = "/table">
                <TablePage/>
            </Route>

        </div>
        
    
   </div>;
    
    
}

export default App;