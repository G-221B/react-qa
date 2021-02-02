import { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'


function App () {
  return (
    <div className="App clearfix" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Suspense fallback={<div>Loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </div>
  );
}

export default App;
