import * as React from 'react'
import { Paper, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import useStyles from '../styles/pages/products'
import ProductGrid from '../components/ProductGrid'
import ProductTypeSelect from '../components/ProductTypeSelect'
import ReleaseSelect from '../components/ReleaseSelect'
import SearchField from '../components/SearchField'

export default function Products() {
  const classes = useStyles()

  const [search, setSearch] = React.useState('')
  const [filters, setFilters] = React.useState({
    release: '',
    product_type: '',
    official_product: false
  })

  return (
    // Baseado neste template: https://mira.bootlab.io/dashboard/analytics
    <Paper className={classes.root}>
      <Grid container className={classes.gridTitle}>
        <Grid item xs={4}>
          {/* TODO: Aqui deve entrar o BREADCRUMB */}
          <Typography variant="h3" className={classes.title}>
            User-generated Data Products
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {/* TODO: Aqui deve entrar botões de ações da pagina */}
        </Grid>
      </Grid>
      <Divider className={classes.titleDivider} variant={'fullWidth'} />
      <Grid container className={classes.gridContent}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <ReleaseSelect
              value={filters.release}
              onChange={value => {
                setFilters({
                  ...filters,
                  release: value
                })
              }}
              disabled={search !== ''}
            />
            <ProductTypeSelect
              value={filters.product_type}
              onChange={value => {
                setFilters({
                  ...filters,
                  product_type: value
                })
              }}
              disabled={search !== ''}
            />
            {/* TODO: Empurrar o Search para a direita */}
            <SearchField onChange={query => setSearch(query)} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ProductGrid query={search} filters={filters} />
        </Grid>
      </Grid>
    </Paper>
  )
}