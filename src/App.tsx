import { Provider } from 'react-redux';
import { Routing } from './routing';
import { store } from './shared/redux';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
