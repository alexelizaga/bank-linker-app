import { CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import {BankLoginForm} from 'react-bank-linker';

import '../node_modules/react-bank-linker/dist/style.css';

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paramsObjet: Record<string, string> = {};

  for (const [clave, valor] of searchParams.entries()) {
    paramsObjet[clave] = valor;
  }
  
  const color = '#' + (paramsObjet['color'] || '00796b');

  const apiUrl = import.meta.env.VITE_BANKLINKER_URL || '';

  if (!paramsObjet['clientId'] || !paramsObjet['bankId'] || !paramsObjet['apiKey']) return (
    <>
      <p style={p}>apiKey, clientId and bankId required</p>
    </>
  )

  return (
    <BankLoginForm
    {...paramsObjet}
    apiUrl={apiUrl}
    color={color}    />
  )
}

export default App;

const p: CSSProperties = {
  fontSize: 24,
  fontWeight: 400,
}