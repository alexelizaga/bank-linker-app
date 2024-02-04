import { CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import {BankLoginForm} from 'react-bank-linker';

import '../node_modules/bank-linker/dist/style.css';


function App() {
  const location = useLocation();

  const clientId = new URLSearchParams(location.search).get('clientId') || '';
  const bankId = new URLSearchParams(location.search).get('bankId') || '';
  const color = '#' + (new URLSearchParams(location.search).get('color') || '00796b');
  const btn = new URLSearchParams(location.search).get('btn') || 'Add';
  const apiKey = new URLSearchParams(location.search).get('apiKey') || '';

  const apiUrl = import.meta.env.VITE_BANKLINKER_URL || '';

  if (!clientId || !bankId || !apiKey) return (
    <>
      <p style={p}>apiKey, clientId and bankId required</p>
    </>
  )

  return (
    <BankLoginForm
      apiKey={apiKey}
      apiUrl={apiUrl}
      bankId={bankId}
      btn={btn}
      clientId={clientId}
      color={color}
    />
  )
}

export default App;

const p: CSSProperties = {
  fontSize: 24,
  fontWeight: 400,
}