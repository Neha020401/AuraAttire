const product = [
    {
        id: 1,
        itemName: 'Floral Summer Dress',
        itemPrice: 3000,
        itemImg: 'https://i.pinimg.com/564x/28/39/7e/28397ed43ea6c83682226ce8553abfee.jpg',
        color: 'Blue',
        description: 'A light and breezy floral summer dress perfect for warm weather.',
        details: 'Made with lightweight fabric, perfect for casual outings or a beach day.',
        slug: 'floral-summer-dress'
    },
    {
        id: 2,
        itemName: 'Elegant Evening Gown',
        itemPrice: 4500,
        itemImg: 'https://i.pinimg.com/474x/43/ee/e7/43eee7c48df10241a387b6c008173b43.jpg',
        color: 'Red',
        description: 'A stylish and elegant evening gown for formal events.',
        details: 'Features a sleek design with intricate detailing for a sophisticated look.',
        slug: 'elegant-evening-gown'
    },
    {
        id: 3,
        itemName: 'Casual Hoodie',
        itemPrice: 2000,
        itemImg: 'https://i.pinimg.com/236x/4c/2c/8d/4c2c8d369546644e95938f6f53ac4bba.jpg',
        color: 'Gray',
        description: 'A comfortable and casual hoodie for everyday wear.',
        details: 'Soft material with a relaxed fit, perfect for lounging or casual outings.',
        slug: 'casual-hoodie'
    },
    {
        id: 4,
        itemName: 'Classic Denim Jacket',
        itemPrice: 3500,
        itemImg: 'https://i.pinimg.com/236x/56/4c/e2/564ce283f5229e5f751f93d7360a39d0.jpg',
        color: 'Blue',
        description: 'A timeless denim jacket that adds style to any outfit.',
        details: 'Made with high-quality denim, perfect for layering during cooler weather.',
        slug: 'classic-denim-jacket'
    },
    {
        id: 5,
        itemName: 'Boho Maxi Dress',
        itemPrice: 3200,
        itemImg: 'https://i.pinimg.com/236x/e2/ae/19/e2ae19e838a3f7ac6a7396f12dfd34ab.jpg',
        color: 'White',
        description: 'A flowy bohemian-style maxi dress with intricate patterns.',
        details: 'Lightweight and perfect for summer, featuring a comfortable fit.',
        slug: 'boho-maxi-dress'
    },
    {
        id: 6,
        itemName: 'Chic Blazer',
        itemPrice: 4000,
        itemImg: 'https://i.pinimg.com/564x/e6/88/2d/e6882d6a5d7b5b19ed5f876dec4ab7f8.jpg',
        color: 'Black',
        description: 'A chic blazer that adds a touch of sophistication to any outfit.',
        details: 'Perfect for professional or semi-formal occasions.',
        slug: 'chic-blazer'
    },
    {
        id: 7,
        itemName: 'Casual T-shirt',
        itemPrice: 1500,
        itemImg: 'https://i.pinimg.com/236x/b9/c4/e6/b9c4e6794dea7574a316450b65e65cda.jpg',
        color: 'White',
        description: 'A simple and versatile casual T-shirt.',
        details: 'Made with soft cotton, perfect for everyday wear.',
        slug: 'casual-t-shirt'
    },
    {
        id: 8,
        itemName: 'Knit Sweater',
        itemPrice: 2800,
        itemImg: 'https://i.pinimg.com/236x/b6/11/6c/b6116c99db5a135e789fb5fc9728e29d.jpg',
        color: 'Brown',
        description: 'A cozy knit sweater for colder days.',
        details: 'Soft and comfortable, perfect for layering.',
        slug: 'knit-sweater'
    },
    {
        id: 9,
        itemName: 'Sporty Jacket',
        itemPrice: 3500,
        itemImg: 'https://i.pinimg.com/236x/0b/21/12/0b211228acca066410348571cb2bb7e7.jpg',
        color: 'Black',
        description: 'A sporty jacket designed for active lifestyles.',
        details: 'Lightweight and breathable, perfect for outdoor activities.',
        slug: 'sporty-jacket'
    },
    {
        id: 10,
        itemName: 'Stylish Cardigan',
        itemPrice: 3100,
        itemImg: 'https://i.pinimg.com/474x/24/bc/c2/24bcc2353a5a4ddad7118d42238486ba.jpg',
        color: 'Gray',
        description: 'A stylish cardigan to layer over any outfit.',
        details: 'Soft and warm, perfect for chilly days.',
        slug: 'stylish-cardigan'
    },
    {
        id: 11,
        itemName: 'Vintage Dress',
        itemPrice: 4000,
        itemImg: 'https://i.pinimg.com/474x/93/42/bd/9342bd1f6a5f8fbc2028c2ccf6f7f4dc.jpg',
        color: 'Pink',
        description: 'A vintage-style dress with floral patterns.',
        details: 'Flowy and elegant, perfect for special occasions.',
        slug: 'vintage-dress'
    },
    {
        id: 12,
        itemName: 'Cozy Scarf',
        itemPrice: 1200,
        itemImg: 'https://i.pinimg.com/236x/59/ec/41/59ec4190a21d94b341906b6e0e7e301c.jpg',
        color: 'Red',
        description: 'A cozy scarf for winter.',
        details: 'Made with soft wool, ideal for keeping warm during cold days.',
        slug: 'cozy-scarf'
    },
    {
        id: 13,
        itemName: 'Formal Dress',
        itemPrice: 4800,
        itemImg: 'https://i.pinimg.com/474x/4a/5c/15/4a5c15a156fd57288aca18957d418526.jpg',
        color: 'Blue',
        description: 'A formal dress suitable for elegant events.',
        details: 'Crafted with high-quality fabric, featuring a sleek and modern design.',
        slug: 'formal-dress'
    },
    {
        id: 14,
        itemName: 'Oversized Coat',
        itemPrice: 5000,
        itemImg: 'https://i.pinimg.com/236x/e0/4c/86/e04c86a2a3b91766ff31a4d0c57ede34.jpg',
        color: 'Beige',
        description: 'An oversized coat perfect for winter.',
        details: 'Stylish and warm, with a relaxed fit and large pockets.',
        slug: 'oversized-coat'
    },
    {
        id: 15,
        itemName: 'Patterned Skirt',
        itemPrice: 2300,
        itemImg: 'https://i.pinimg.com/736x/b1/ac/c6/b1acc6d219b71fd93022b815a65522b0.jpg',
        color: 'Multicolor',
        description: 'A stylish patterned skirt for casual or semi-formal occasions.',
        details: 'Lightweight and comfortable, with a unique design.',
        slug: 'patterned-skirt'
    },
    {
        id: 16,
        itemName: 'Slim Fit Pants',
        itemPrice: 2700,
        itemImg: 'https://i.pinimg.com/474x/c6/dc/6c/c6dc6c3866b594955438ea8e27b1d883.jpg',
        color: 'Black',
        description: 'Slim-fit pants for a sleek and modern look.',
        details: 'Perfect for both casual and formal settings.',
        slug: 'slim-fit-pants'
    }
];

export default product;
