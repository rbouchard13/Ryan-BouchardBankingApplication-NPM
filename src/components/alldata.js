import React from "react";
import { UserContext } from "./context";
import Card from "./context";

export default function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <Card 
            style={{width: "auto"}}
            txtcolor = "success"
            bgcolor= "light"
            header= "Session Log"
            body={(
                <div className="table-responsive">
                    <table id="userTab"><thead><tr>
                        <th>Name</th><th>Email</th><th>Action</th><th>Date/Time</th></tr></thead>        
                        <tbody>
                            {ctx.actions.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.action}</td>
                                    <td>{item.stamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        />
    )
}