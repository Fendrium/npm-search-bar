import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="ui center aligned grid three doubling stackable cards"
        style={{ padding: 10 }}
      >
        <div className="card" style={{ padding: 20 }}>
          <h1>Search for a Package</h1>
          <div>Type a NPM package name!</div>
          <RepositoriesList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
