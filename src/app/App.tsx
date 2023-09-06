import { Provider } from 'react-redux';
import { store } from './config';
import { Routing } from './routing';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
