import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// component
import { Home, UseCallback } from 'Components';
import { NotFound, Router } from 'Components/Common';

// default로 export된것만 사용 가능
const LazyMemo = lazy(() => import('Components/useMemo'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>...loading</div>}>
				<Router />

				<Routes>
					{/* 버전 6부터 exact를 사용하지 않고 여러라우팅을 매칭하고싶은 경우에는 *을 사용  */}
					<Route path="/" element={<Home />} />
					<Route path="/callback" element={<UseCallback />} />
					<Route path="/memo" element={<LazyMemo />} />

					<Route path="/*" element={<NotFound />} />

					{/* 
					<Route path="/callback/*" element={<LazyAbout />} />

					<Route path="/*" element={<NotFound />} />
					*/}
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
