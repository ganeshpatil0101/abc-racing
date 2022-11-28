import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';
import { createAppStore } from './store/configureStore';
afterEach(cleanup);
const history = createBrowserHistory();
const initialState = {};
const store = createAppStore(initialState, history);
test('ABC Racing should be in the document', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>  );
    await waitFor(() => expect(screen.getByText(/ABC Racing/i)).toBeInTheDocument());
});
