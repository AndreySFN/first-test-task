import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routing';
import { store } from './shared/redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
