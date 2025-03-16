// src/context/adminContext.js

import { createContext, useState } from 'react';

const AdminContext = createContext();

const AdminState = (props) => {
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);

  const loginAdmin = () => {
    setAdminAuthenticated(true);
  };

  const logoutAdmin = () => {
    setAdminAuthenticated(false);
  };

  return (
    <AdminContext.Provider value={{ adminAuthenticated, loginAdmin, logoutAdmin }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminState };
