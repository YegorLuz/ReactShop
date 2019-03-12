export interface ICategory {
    id: number,
    title: string,
};

export interface ICategories extends Array<ICategory> {};

const categories : ICategories = [
    {
        id: 1,
        title: 'Category 1',
    },
    {
        id: 2,
        title: 'Category 2',
    },
    {
        id: 3,
        title: 'Category 3',
    },
    {
        id: 4,
        title: 'Category 4',
    },
    {
        id: 5,
        title: 'Category 5',
    }
];

export default categories;