import React from 'react';
import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  showSidebar: false,
  toggleSidebar: () => {}
});
