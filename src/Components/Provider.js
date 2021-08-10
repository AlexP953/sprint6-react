import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [state,setState] = useState(0);
    return (            
            <AppContext.Provider value={[state,setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();
