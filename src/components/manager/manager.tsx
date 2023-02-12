import Sidebar from "../common/Sidebar";
import ManagerIcons from "./managerIcons";
import DataTable from "./peopletable";
import Box from '@mui/material/Box';


export default function Manager() {
    return (
        <div>
            <div>
                <header>
                <ManagerIcons />
                </header>
            </div>
            <div>
                <DataTable />
            </div>
            
        </div>

        
       
    );
}