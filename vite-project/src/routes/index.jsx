import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../features/dashboard/pages/Dashboard';
import Login from '../features/auth/pages/Login';
import Students from '../features/students/pages/Students';
import Rooms from '../features/rooms/pages/Rooms';
import Payments from '../features/payments/pages/Payments';
import Complaints from '../features/complaints/pages/Complaints';

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/students" element={<Students />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RoutesConfig;
