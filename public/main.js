const render = (response) => document
    .getElementById('root')
    .innerHTML = JSON.stringify(response);

const renderError = (err = 'Error processing request') => document
    .getElementById('root').innerHTML = `<div>${err}</div>`;

fetch('/api/listings?limit=25')
    .then((res) => res.json())
    .then(render)
    .catch(renderError);
