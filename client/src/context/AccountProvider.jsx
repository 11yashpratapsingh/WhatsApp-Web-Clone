import { useEffect } from "react";
import { createContext, useState, useRef } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null); //Named export

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        setActiveUsers,
        activeUsers,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
