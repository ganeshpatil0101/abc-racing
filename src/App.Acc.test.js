import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { axe, toHaveNoViolations } from 'jest-axe';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';
import { createAppStore } from './store/configureStore';
const history = createBrowserHistory();
const initialState = {};
const store = createAppStore(initialState, history);
afterEach(cleanup);
expect.extend(toHaveNoViolations);

test('should have not web accessibility violations ', async ()=>{
    const { container , debug } = render(
    <Provider store={store}>
        <App />
    </Provider>  );
    const nav = await screen.findByTestId('navbar-container');
    const lang = await screen.findByTestId('lang-container');
    const res = await axe(container);
    expect(res).toHaveNoViolations();
});
