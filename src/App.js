import React, { useState } from 'react';
import './Styles/glance-portal-styling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PDFView from './Components/PDFView';
import SideNav from './Components/SideNav';
import RecordsView from './Components/Pages/RecordsView';
import AuditList from './Components/Pages/AuditList';
import './Styles/js/Pdf-Font-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShelfList from './Components/Pages/ShelfList';
import ShelfPDF from './Components/ShelfPDF';
function App()  {
  const [page, navigate] = useState(2)
  return ( 
    <Router>
          <Switch>
            <Route path="/auditor">
              <div class="page-layout">
                <SideNav />
                <AuditList />
               </div>
            </Route>
            <Route path="/manufacturer">
              <div class="page-layout">
                <SideNav />
                <RecordsView page='home'/>
               </div>
            </Route>
            <Route path="/pdf/:reportId">
              <div class="page-layout-pdf">
                <SideNav />
                <PDFView />
              </div>
            </Route>
            <Route path="/shelflist/:inputId">
              <div class="page-layout">
                <SideNav />
                <ShelfList />
              </div>
            </Route>
            <Route path="/shelfpdf/:inputId/:shelfNumber">
              <div class="page-layout-pdf">
                <SideNav />
                <ShelfPDF />
              </div>
            </Route>
            <Route path="/">
              <div class="page-layout">
                <SideNav />
                <RecordsView page='home'/>
               </div>
            </Route>
            
          </Switch>
      
    </Router>
  );
    
}

export default App;