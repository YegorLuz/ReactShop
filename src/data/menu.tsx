import { IMenuItem } from '../models/data';

export interface IMenuItemData extends IMenuItem {
    component: string,
    url: string,
    text: string,
    routePath?: string,
}

export interface IMenuData extends Array<IMenuItemData> {};

const menu : IMenuData = [
    {
        component: 'Home',
        url: '/',
        text: 'Home',
    },
    {
        component: 'About',
        url: '/about',
        text: 'About',
    },
    {
        component: 'Products',
        routePath: '/catalog/:id?',
        url: '/catalog',
        text: 'Catalog',
    },
    {
        component: 'Contacts',
        url: '/contacts',
        text: 'Contacts',
    }
];

export default menu;