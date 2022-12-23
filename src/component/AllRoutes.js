import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat/Chat";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  );
};
