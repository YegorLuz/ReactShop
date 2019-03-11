import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import ScreenLoader from '../components/ScreenLoader';
import AppContainer from '../containers';
import menu, { IMenuItemData } from '../data/menu';

const LoadableComponent = (path: string) => Loadable({
	loader: () => import(`../pages/${path}`),
	loading: ScreenLoader,
	render (loaded, props) {
		const Comp = loaded.default;
		return <Comp {...props} />;
	},
});

const renderRoute = (item: IMenuItemData) =>
	<Route key={item.component} path={item.url} exact component={LoadableComponent(item.component)} />;

export default (
	<BrowserRouter>
		<AppContainer>
			<Switch>
				{menu.map((item: IMenuItemData) => renderRoute(item))}
				<Route path='/product/:id' exact component={LoadableComponent('Product')} />
				<Route component={LoadableComponent('PageNotFound')} />
			</Switch>
		</AppContainer>
	</BrowserRouter>
);