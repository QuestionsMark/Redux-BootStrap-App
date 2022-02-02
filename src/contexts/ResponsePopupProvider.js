import { createContext, useContext, useState } from 'react';

const ResponsePopupContext = createContext();

export function useResponsePopup() {
    return useContext(ResponsePopupContext);
};

export function ResponsePopupProvider({ children }) {

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [response, setResponse] = useState('');

    return (
        <ResponsePopupContext.Provider value={{ open, setOpen, status, setStatus, response, setResponse }}>
            {children}
        </ResponsePopupContext.Provider>
    );
};