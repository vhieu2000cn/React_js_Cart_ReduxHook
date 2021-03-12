

var initialState=[
    {
        id:1,
        name:'Iphone 6s',
        image:'https://24hstore.vn/images/products/2020/10/14/large/iphone-12-pro-max-graphite.jpg',
        description:'sản phẩm của apple',
        price:689,
        inventory:10,
        ratting:3,
    },
    {
        id:2,
        name:'Samsung',
        image:'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=SAMO0201b6',
        description:'sản phẩm của Hàn Quốc ',
        price:999,
        inventory:15,
        ratting:4,
    },
    {
        id:3,
        name:'Oppo',
        image:'https://www.abenson.com/media/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/6/165946_4.jpg',
        description:'sản phẩm của China',
        price:699,
        inventory:20,
        ratting:5,
    },
]

const Products = (state=initialState,action)=>{
    switch(action.type){
        default:
            return [...state]
    }
}

export default Products;