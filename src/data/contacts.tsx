export interface IContact {
    location: string,
    address: string,
    cell: string,
    time: string,
}

export interface IContacts extends Array<IContact> {};

const contacts : IContacts = [
    {
        location: 'Country, Town',
        address: 'Street, number',
        cell: '+ (xxx) xxx-xx-xx',
        time: '8 am - 6 pm',
    },
    {
        location: 'Country, Town',
        address: 'Street, number',
        cell: '+ (xxx) xxx-xx-xx',
        time: '8 am - 6 pm',
    },
    {
        location: 'Country, Town',
        address: 'Street, number',
        cell: '+ (xxx) xxx-xx-xx',
        time: '8 am - 6 pm',
    },
    {
        location: 'Country, Town',
        address: 'Street, number',
        cell: '+ (xxx) xxx-xx-xx',
        time: '8 am - 6 pm',
    }
];

export default contacts;