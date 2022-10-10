import React from 'react';
import ContextChild from './contextChild';
export const UserContext=React.createContext();
function ContextParent(props) {
    return (
        <div>
            <UserContext.Provider value="Chintu is ranjus love">
                <ContextChild/>
            </UserContext.Provider>
            
        </div>
    );
}

export default ContextParent;