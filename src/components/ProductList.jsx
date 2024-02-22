import React from 'react'
import { useState } from 'react'
import ProductImage from '../assets/index.js'



function ProductList() {
    const [showAllProducts, setShowAllProducts] = useState(false)
    // const toggleShowAllProducts = () => setShowAllProducts(!showAllProducts)
    
    const products = [
        { id: 1, name: 'Kids leather bag',detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole', image: ProductImage.Product1 },
        { id: 2, name: 'Womans purses 01', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product2},
        { id: 3, name: 'Womans purses 02', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product3},
        { id: 4, name: 'Mens shoes 01', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.', image: ProductImage.Product4},
        { id: 5, name: 'Mens shoes 02', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product5},
        { id: 6, name: 'Womans purses 03', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product6},
        { id: 7, name: 'Womans purses 04', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product7},
        { id: 8, name: 'Womans purses 05', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product8},
        { id: 9, name: 'Womans purses 06', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product9},
        { id: 10, name: 'Womans purses 07', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product10},
        { id: 11, name: 'Mens shoes 02', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product11},
        { id: 12, name: 'Womans purses 01', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product12},
        { id: 13, name: 'Mens shoes 02', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole ',image: ProductImage.Product13},
        { id: 14, name: 'Mens shoes 02', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product14},
        { id: 15, name: 'Womans purses 08', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product15},
        { id: 16, name: 'Womans purses 09', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product16},
        { id: 17, name: 'Womans purses 10', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product17},
        { id: 18, name: 'Womans purses 11', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product18},
        { id: 19, name: 'Womans purses 12', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product19},
        { id: 20, name: 'Mens shoes 02' ,detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole ',image: ProductImage.Product20},
        { id: 21, name: 'Mens shoes 02', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product21},
        { id: 22, name: 'Womans purses 13', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole ',image: ProductImage.Product22},
        { id: 23, name: 'Womans purses 14', detail:'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole ',image: ProductImage.Product23},
        { id: 24, name: 'Mens shoes 02', detail: 'Crafted from exquisite sheep special leather, paired with a cutting-edge TR sole.',image: ProductImage.Product24},
      ];
      const visibleProducts = showAllProducts ? products : products.slice(0, 8);
  return (
    <div className='space-y-10'>
      <div>
        <p className='text-primary-600 font-semibold text-[20px]'>OUR PRODUCTS  ________________</p>
        <div className='flex justify-between'>
          <h1 className='font-semibold text-[48px]'>Explore Our Products</h1>
          {!showAllProducts && (
            <button onClick={() => setShowAllProducts(true)} className="btnStyle">View More</button>
          )}
          {showAllProducts && (
            <button onClick={() => setShowAllProducts(false)} className="btnStyle">View Less</button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {visibleProducts.map(product => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full mb-2 rounded overflow-hidden object-fill h-96" />
            <div className='space-y-2 pb-10'>
              <p className="text-primary-600 text-2xl font-semibold">{product.name}</p>
              <p className='text-text_color-700'>{product.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
