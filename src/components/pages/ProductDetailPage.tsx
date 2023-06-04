// src/components/pages/ProductDetailPage.tsx

import React from 'react';
import Button from '../common/Button';

const ProductDetailPage: React.FC = () => {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Button label="Add to Cart" />
            {/* Other components... */}
        </div>
    );
};

export default ProductDetailPage;
