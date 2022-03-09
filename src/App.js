import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// redux
import store from "./Components/Redux/store";
import store2 from "./Components/ReduxToolkit/store";
import { Provider } from 'react-redux';


// component
import { Home, UseCallback, ReduxEx, ReduxToolkitEx } from 'Components';
import { NotFound, Router } from 'Components/Common';

// const store = createStore(rootReducer);

// default로 export된것만 사용 가능
const LazyMemo = lazy(() => import('Components/useMemo'));

function App() {
	return (
		// <Provider store={store}>
			<Provider store={store2}>
			<div className="App">
				<Suspense fallback={<div>...loading</div>}>
					<Router />

					<Routes>
						{/* 버전 6부터 exact를 사용하지 않고 여러라우팅을 매칭하고싶은 경우에는 *을 사용  */}
						<Route path="/" element={<Home />} />
						<Route path="/callback" element={<UseCallback />} />
						<Route path="/memo" element={<LazyMemo />} />

						<Route path="/redux" element={<ReduxEx />} />

						<Route path="/toolkit" element={<ReduxToolkitEx />} />

						<Route path="/*" element={<NotFound />} />

						{/* 
						<Route path="/callback/*" element={<LazyAbout />} />

						<Route path="/*" element={<NotFound />} />
						*/}
					</Routes>
				</Suspense>
			</div>
			</Provider>
		// </Provider>
	);
}

export default App;
