import React, { useState, useEffect } from 'react';
import { getTheToken } from '../firebase';

const Notifications = (props) => {
    const [ isTokenFound, setTokenFound ] = useState(false);

    console.log("Token found ", isTokenFound);

    useEffect(() => {
        let data;
        function tokenFunc() {
            data = getTheToken(setTokenFound);
            if(data){
                console.log("Token is ", data);
            }
            return data;
        }
        tokenFunc();
    }, [setTokenFound]);
    return (
        <div>
            
        </div>
    )
}
Notifications.propTypes = {};

export default Notifications;
