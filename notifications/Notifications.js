import React, { useState, useEffect } from 'react';
// import { getToken } from '../firebase';

const Notifications = (props) => {
    const [ isTokenFound, setTokenFound ] = useState(false);

    console.log("Token found ", isTokenFound);

    // useEffect(() => {
    //     let data;
    //     function tokenFunc() {
    //         data = getToken(setTokenFound);
    //         if(data){
    //             console.log("Token is ", data);
    //         }
    //         return data;
    //     }
    //     tokenFunc();
    // }, [setTokenFound]);
    return (
        <div>
            
        </div>
    )
}
Notifications.propTypes = {};

export default Notifications;
