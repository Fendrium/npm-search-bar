import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div className="ui center" style={{ padding: 10 }}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="ui action center input">
          <input
            className="field"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="ui button primary right">Search</button>
        </div>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <div className="ui relaxed divided list">
        {!error &&
          !loading &&
          data.map((name) => (
            <div className="item" style={{ padding: 10 }} key={name}>
              {name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RepositoriesList;
