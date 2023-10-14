import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../Contexts/AuthContext';

export default function GuardRoute() {
  const { isAuthorized }: any = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signup');
    }
  }, [isAuthorized, navigate]);

  return <Outlet />;
}
