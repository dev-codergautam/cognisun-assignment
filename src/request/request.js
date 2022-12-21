
const product = [
    {
        category    : 'Electronics',
        product     : 'Washing Machine',
        sku         : '452',
        description : 'Washing Machine description here',
        price       : 1500,
        discount    : 10
    },
    {
        category    : 'Electronics',
        product     : 'Air Conditioner',
        sku         : '455',
        description : 'Air Conditioner description here',
        price       : 3500,
        discount    : 10
    },
    {
        category    : 'Electronics',
        product     : 'Refrigerator',
        sku         : '459',
        description : 'Refrigerator description here',
        price       : 4000,
        discount    : 10
    },
    {
        category    : 'Cosmetics',
        product     : 'Shaving Cream',
        sku         : '659',
        description : 'Shaving Cream description here',
        price       : 40,
        discount    : 7
    },
    {
        category    : 'Cosmetics',
        product     : 'Razor',
        sku         : '658',
        description : 'Razor description here',
        price       : 45,
        discount    : 10
    },
    {
        category    : 'Clothing',
        product     : 'Trouser',
        sku         : '789',
        description : 'Trouser description here',
        price       : 26,
        discount    : 5
    },
    {
        category    : 'Clothing',
        product     : 'Woven Shirt',
        sku         : '1236',
        description : 'Woven Shirt description here',
        price       : 12,
        discount    : 10
    },
    {
        category    : 'Medicines',
        product     : 'Aspirin 15mg',
        sku         : '990',
        description : 'Aspirin 15mg description here',
        price       : 5.5,
        discount    : 5
    },
    {
        category    : 'Medicines',
        product     : 'VCure 30 mg',
        sku         : '991',
        description : 'VCure 30 mg description here',
        price       : 7.4,
        discount    : 5
    },

]

export const categoryData = [...new Set(product.map((item) => item.category))]

export const filteredProduct = (category) => {
    const pl = product.filter((item) => item.category === category)
    return pl;
}