import React, { useState, useEffect } from 'react';

const SearchResultPage = ({ location }) => {
    // Sample product data
    const productData = [
        { id: 1, name: 'Product A', price: 19.99 },
        { id: 2, name: 'Product B', price: 29.99 },
        // Add more products as needed
    ];

    // State to store search results
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Simulate searching based on the query parameter
        const searchQuery = new URLSearchParams(location.search).get('q');
        if (searchQuery) {
            const results = productData.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [location.search]);

    return (
        <div>
            <h2>Search Results</h2>
            {searchResults.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <ul>
                    {searchResults.map(product => (
                        <li key={product.id}>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            {/* Add links or buttons to view product details */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResultPage;
