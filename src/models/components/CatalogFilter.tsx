import { Set } from 'immutable';
import { ICategories, ICategory } from '../../data/categories';

export interface IProps {
    title: string,
    defaultRenderer: () => void,
    itemRenderer: (value: string | ICategory) => void,
    data: Set<string> | ICategories,
    className?: string,
    listClassName?: string,
}