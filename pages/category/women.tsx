import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';


const WomenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=women');

  return (
    <ShopLayout title={'Teslo-Shop - Mujeres'} pageDescription={'Encuentra los mejores productos de Teslo Mujeres'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>productos para ellas</Typography>
 
        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }
    

    </ShopLayout>
  )
}

export default WomenPage