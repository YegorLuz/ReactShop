export default {
    products: {
        1: require(`../../assets/products/prod-1.jpg`),
        2: require(`../../assets/products/prod-2.png`),
        3: require(`../../assets/products/prod-3.jpg`),
        4: require(`../../assets/products/prod-4.jpg`),
        5: require(`../../assets/products/prod-1.jpg`),
        6: require(`../../assets/products/prod-2.png`),
        7: require(`../../assets/products/prod-3.jpg`),
        8: require(`../../assets/products/prod-4.jpg`),
        9: require(`../../assets/products/prod-1.jpg`),
        10: require(`../../assets/products/prod-2.png`),
        11: require(`../../assets/products/prod-3.jpg`),
        12: require(`../../assets/products/prod-4.jpg`),
        13: require(`../../assets/products/prod-1.jpg`),
        14: require(`../../assets/products/prod-2.png`),
        15: require(`../../assets/products/prod-1.jpg`),
        16: require(`../../assets/products/prod-2.png`),
        17: require(`../../assets/products/prod-3.jpg`),
        18: require(`../../assets/products/prod-4.jpg`),
        19: require(`../../assets/products/prod-1.jpg`),
        20: require(`../../assets/products/prod-2.png`),
        21: require(`../../assets/products/prod-3.jpg`),
        22: require(`../../assets/products/prod-4.jpg`),
        23: require(`../../assets/products/prod-1.jpg`),
        24: require(`../../assets/products/prod-2.png`),
    },

    banners: {
        main: require('../../assets/banners/banner-1.png'),
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