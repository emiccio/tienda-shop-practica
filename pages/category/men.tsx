import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';


const MenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=men');

  return (
    <ShopLayout title={'Teslo-Shop - Hombres'} pageDescription={'Encuentra los mejores productos de Teslo hombre'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>productos para ellos</Typography>
 
        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }
    

    </ShopLayout>
  )
}

export default MenPage