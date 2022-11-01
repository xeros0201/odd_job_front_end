 
 

import { Outlet } from 'react-router';
import './App.css';
 
import Layout from './components/layout';


function App() {
  

 

 

  return (
    <Layout>
    
    <Outlet></Outlet>
    </Layout>
  );
}

export default App;
