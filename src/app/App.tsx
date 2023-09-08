import { Provider } from 'react-redux';
import { store } from './config';
import './config/i18next';
import { Routing } from './routing';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
