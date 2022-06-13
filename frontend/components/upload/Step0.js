import React from 'react'
import Image from 'next/image'
import { Typography, Grid, Box } from '@mui/material'
import ProductTypeSelect from '../ProductTypeSelect'
import ReleaseSelect from '../ReleaseSelect'

function Step0() {
  const [product, setProduct] = React.useState({
    release: '',
    product_type: ''
  })
  return (
    <React.Fragment>
      <Box>
        <ReleaseSelect
          value={product.release}
          onChange={value => {
            setProduct({
              ...product,
              release: value
            })
          }}
        />
        <ProductTypeSelect
          value={product.product_type}
          onChange={value => {
            setProduct({
              ...product,
              product_type: value
            })
          }}
        />
      </Box>
    </React.Fragment>
  )
}
export default Step0
