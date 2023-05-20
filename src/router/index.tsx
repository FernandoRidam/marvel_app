import {
  BrowserRouter,
} from "react-router-dom";

import {
  useSelector,
} from 'react-redux';

import {
  RootState,
} from '../store';
import { LayoutProvider } from './LayoutProvider';

export const Router = () => {
  const {
    agent,
  } = useSelector(( state: RootState ) => state );

  const authenticated = !!agent;

  return (
    <BrowserRouter>
      <LayoutProvider authenticated={ authenticated } />
    </BrowserRouter>
  );
};
