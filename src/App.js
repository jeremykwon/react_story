import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// component
import { Home } from 'Components/test';
import { NotFound } from 'Components/Common';

// default로 export된것만 사용 가능
const LazyAbout = lazy(() => import('Components/test2'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          {/* 버전 6부터 exact를 사용하지 않고 여러라우팅을 매칭하고싶은 경우에는 *을 사용  */}
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<LazyAbout />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
