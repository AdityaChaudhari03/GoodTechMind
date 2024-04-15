import React from 'react';
import './ProductsTable.css';

const ProductTable = () => {
  const products = [
    {
      productName: 'Android Development Starter Kit',
      price: '$99',
      description: 'A comprehensive toolkit for Android app development',
      category: 'Mobile Development',
      age: 'Beginner',
      subcategory: 'Android',
    },
    {
      productName: 'Website Developer Pro Pack',
      price: '$149',
      description: 'All the tools you need to build stunning websites',
      category: 'Web Development',
      age: 'Intermediate',
      subcategory: 'Frontend',
    },
    {
      productName: 'AI and ML Toolbox',
      price: '$199',
      description: 'Empower your projects with cutting-edge AI and ML tools',
      category: 'Artificial Intelligence',
      age: 'Advanced',
      subcategory: 'Machine Learning',
    },
  ];

  return (
    <div className="product-table-container">
        <h1 className='heading'>Products Details</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Age</th>
            <th>Subcategory</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.age}</td>
              <td>{product.subcategory}</td>
              <td className='image-buttons'>
                <button>Delete</button>
                <button>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
