import React from 'react';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Product from './Product';

const Fakestore = () => {
    const [category, setCategorys] = useState([]);
    const [product, setProducts] = useState([{}]);

    const baseUrl = 'https://fakestoreapi.com';

    function handleCategory() {
        fetch(`${baseUrl}/products/categories`)
            .then((res) => res.json())
            .then((data) => {
                data.unshift('All'); 
                setCategorys(data);
            })
            .catch((error) => console.error('Error fetching categories:', error));
    }

    function products(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                console.log(data); 
            })
            .catch((error) => console.error('Error fetching products:', error));
    }

    useEffect(() => {
        handleCategory();
        products(`${baseUrl}/products`); 
    }, []);

    function HandleOption(event) {
        const selectedCategory = event.target.value;
        if (selectedCategory === 'All') {
            products(`${baseUrl}/products`); 
        } else {
            products(`${baseUrl}/products/category/${selectedCategory}`);
        }
    }

    return (
        <div>
            <Nav />
            <section className='mt-2 row'>
                <aside className='col-2 ms-3'>
                    <div>
                        <label className='form-label'>Select Category</label>
                        <select className='form-select' onChange={HandleOption}>
                            {
                                category.map((item) => (
                                    <option value={item} key={item}>
                                        {item.toUpperCase()}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </aside>
                <main className='row col-10 d-flex flex-wrap'>
                    {
                        product.map((item) => (
                            <Product key={item.id} item={item} />
                        ))
                    }
                </main>
            </section>
        </div>
    );
};

export default Fakestore;
