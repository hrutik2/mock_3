import logo from './logo.svg';

import {  Sidebar } from './c/dasbord';

import { AllRoutes } from './pages/allRoutes';


function App() {
  return (
     <div style={{display:"flex" ,width:"1501px",height:"1241px"}}>
      <Sidebar/>
     <AllRoutes/>
     </div>
     
     
  );
}

export default App;
