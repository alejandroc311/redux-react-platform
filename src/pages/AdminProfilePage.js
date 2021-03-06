import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logUserOut } from "../store/slicers/userSlice";
import "./../stylesheets/admin-page.css";
function AdminProfilePage(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const admin = useSelector((state = {}) => state.adminSlice, shallowEqual);
    let {id, proyects} = admin;
    const adminProyectsTableRow = proyects.map(({id, userEmail, userId, lastModified}) => {
        return(
            <tr key={userEmail}>
                <td>
                    {id}
                </td>
                <td>
                    {userId}
                </td>
                <td>
                    {userEmail}
                </td>
                <td>
                    {lastModified}
                </td>
                <td>
                    <button onClick={() => navigate(`${id}`)}>
                        See More
                    </button>
                </td>
            </tr>
        );
    })
    return(
        <div>
            <div id="admin-profile">
            <h1>Admin Profile</h1>
            <h3>Welcome Admin No. {id}!</h3>
            <h4>Logout</h4>
            <button id="admin-logout-button"onClick={() => dispatch(logUserOut())}>Logout</button>
            <h4>Proyects assigned to Admin No. {id}</h4>
            <table className="proyects-table">
                <thead>
                <tr>
                    <th>
                        Proyect Id No.
                    </th>
                    <th>
                        Client Id No.
                    </th>
                    <th>
                        Client Email
                    </th>
                    <th>
                        Last Modified
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                    {adminProyectsTableRow}
                </tbody>
            </table> 
        </div>
        <Outlet/>
    </div>
        
    );
}
export default AdminProfilePage