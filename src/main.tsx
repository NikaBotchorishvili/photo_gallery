import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Provider } from "react-redux";
import { store } from "./app/store";

const Home = lazy(() => import("./pages/Home"));
const History = lazy(() => import("./pages/History"));

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<h2>Loading</h2>}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/history",
				element: (
					<Suspense fallback={<h2>Loading</h2>}>
						<History />
					</Suspense>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
