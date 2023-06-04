// src/components/pages/ProductPage.tsx

import React from 'react';
import Button from '../common/Button';

const ProductPage: React.FC = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <Button label="Add to Cart" />
            {/* Other components... */}
        </div>
    );
};

export default ProductPage;
