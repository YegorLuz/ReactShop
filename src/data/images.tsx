export default {
    products: {
        1: require(`../../assets/products/prod-1.jpg`),
        2: require(`../../assets/products/prod-2.png`),
        3: require(`../../assets/products/prod-3.jpg`),
        4: require(`../../assets/products/prod-4.jpg`),
        5: require(`../../assets/products/prod-1.jpg`),
        6: require(`../../assets/products/prod-2.png`),
        7: require(`../../assets/products/prod-3.jpg`),
    },

    get (key: string) {
        return this[key];
    },

    getIn (keys: Array<string>) {
        let result = this;
        for (let i in keys) {
            result = result[keys[i]];
        }
        
        return result;
    }
};