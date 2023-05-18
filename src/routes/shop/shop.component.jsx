import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import './shop.styles.scss'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
        </Routes>
    );
};
export default Shop;