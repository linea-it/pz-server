import * as React from 'react'
import { Paper, Box } from '@mui/material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import DownloadIcon from '@mui/icons-material/Download'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import useStyles from '../styles/pages/products'
import prettyBytes from 'pretty-bytes'
import moment from 'moment'

import ProductTypeSelect from '../components/ProductTypeSelect'
import ReleaseSelect from '../components/ReleaseSelect'
import { getProducts } from '../services/product'

export default function Products() {
  const classes = useStyles()

  const [search, setSearch] = React.useState('')

  const [rows, setRows] = React.useState([])
  const [rowCount, setRowCount] = React.useState(undefined)

  const [page, setPage] = React.useState(0)
  const [pageSize, setPageSize] = React.useState(25)
  const [sortModel, setSortModel] = React.useState([
    { field: 'created_at', sort: 'desc' }
  ])
  const [loading, setLoading] = React.useState(false)

  const handleSortModelChange = newModel => {
    setSortModel(newModel)
  }

  // const handleChangeFilter = prop => event => {
  //   setFilters({ ...filters, [prop]: event.target.value })
  // }

  const handleClickSearch = () => { }

  const handleDownload = React.useCallback(
    row => () => {
      console.log('Download Product with ID: %o', row.id)
      // Pode redirecionar direto para a url do arquivo row.main_file
    },
    []
  )

  // https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination
  React.useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    let active = true;

    // eslint-disable-next-line no-unexpected-multiline
    // eslint-disable-next-line prettier/prettier
    (async () => {
      setLoading(true)
      const response = await getProducts({
        page: page,
        page_size: pageSize,
        sort: sortModel,
        search: search
      })

      if (!active) {
        return
      }
      // setRows(response.results)
      setRows(response.results)
      setRowCount(response.count)
      setLoading(false)
    })()

    return () => {
      active = false
    }
  }, [page, pageSize, sortModel, search])

  // Some api client return undefine while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCountState, setRowCountState] = React.useState(rowCount || 0)
  React.useEffect(() => {
    setRowCountState(prevRowCountState =>
      rowCount !== undefined ? rowCount : prevRowCountState
    )
  }, [rowCount, setRowCountState])

  const columns = React.useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90, sortable: true },
      { field: 'display_name', headerName: 'Name', sortable: true, flex: 1 },
      {
        // TODO: Utilizar o Render Cell para gerar um LINK no nome do produto
        // https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination
        field: 'product_type_name',
        headerName: 'Product Type',
        width: 150,
        sortable: false
      },
      {
        field: 'uploaded_by',
        headerName: 'Uploaded By',
        width: 160,
        sortable: false
      },
      {
        field: 'created_at',
        headerName: 'Created at',
        width: 180,
        sortable: true,
        valueFormatter: params => {
          if (params.value == null) {
            return ''
          }
          const valueFormatted = moment(params.value).format('L LTS')
          return `${valueFormatted}`
        }
      },
      { field: 'file_name', headerName: 'Filename', sortable: true, flex: 1 },
      {
        field: 'file_size',
        headerName: 'Size',
        width: 90,
        sortable: true,
        valueFormatter: params => {
          if (params.value == null) {
            return ''
          }

          const valueFormatted = prettyBytes(Number(params.value))
          return `${valueFormatted}`
        }
      },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Download',
        width: 100,
        sortable: false,
        getActions: row => [
          <GridActionsCellItem
            key={'product_download_' + row.id}
            icon={<DownloadIcon />}
            label="Download"
            onClick={handleDownload(row)}
          />
        ]
      }
    ],
    [handleDownload]
  )

  return (
    // Baseado neste template: https://mira.bootlab.io/dashboard/analytics
    <Paper className={classes.root}>
      <Grid container className={classes.gridTitle}>
        <Grid item xs={4}>
          {/* TODO: Aqui deve entrar o BREADCRUMB */}
          <Typography variant="h3" className={classes.title}>
            Photo-Z Data Products
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
            <ReleaseSelect />
            <ProductTypeSelect />
            {/* TODO: Empurrar o Search para a direita */}
            {/* TODO: O Search pode ser um componente separado e reutilizado */}
            <FormControl sx={{ m: 1, minWidth: 400 }}>
              <TextField
                label="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickSearch}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <DataGrid
            getRowId={row => row.id}
            rows={rows}
            columns={columns}
            // checkboxSelection
            disableSelectionOnClick
            autoHeight
            sortingMode="server"
            sortModel={sortModel}
            onSortModelChange={handleSortModelChange}
            paginationMode="server"
            rowCount={rowCountState}
            pagination
            page={page}
            onPageChange={page => setPage(page)}
            pageSize={pageSize}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            rowsPerPageOptions={[25, 50, 100]}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
