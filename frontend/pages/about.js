import { Container, Grid, Typography, Link } from '@mui/material'
import useStyles from '../styles/pages/about'
export default function About() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">About us</Typography>
          <Typography variant="body1" component="span">
            <p>
              Inspired by features of the DES Science Portal (
              <Link
                href="https://www.sciencedirect.com/science/article/abs/pii/S2213133718300891?via%3Dihub"
                target="_blank"
                rel="noreferrer"
              >
                Gschwend et al., 2018;
              </Link>{' '}
              <Link
                href="https://www.sciencedirect.com/science/article/abs/pii/S2213133717300975"
                target="_blank"
                rel="noreferrer"
              >
                Fausti Neto et al., 2018
              </Link>{' '}
              ), the PZ Server is an online service, complementary to the Rubin
              Science Platform (RSP), to host PZ-related lightweight data
              products and to offer data management tools that allow sharing
              data products among RSP users, attach and share relevant metadata,
              and help on provenance tracking.
            </p>
            <p>
              The PZ Server is hosted in the Brazilian Independent Data Access
              Center (IDAC) and is open to all RSP users (LSST data rights
              holders), without geographic constraints. It is designed to be as
              broad and generic as possible to be useful to all LSST Science
              Collaborations that work with PZ data products. As required by
              LSST in-kind program, the source code will be publicly available
              on{' '}
              <Link
                href="https://github.com/linea-it/pz-server"
                target="_blank"
                rel="noreferrer"
              >
                GitHub.
              </Link>
            </p>
            <p>
              The PZ Server is being designed with a special focus on helping
              RSP users participating in the PZ Validation Cooperative, a DM
              team&apos;s initiative that will take place during LSST
              commissioning phase (see technical note dmtn-049 for details), but
              it is planned to continue serving the LSST Community during
              subsequent years. During the PZ Validation Cooperative, the PZ
              Coordination Group will be able to use the PZ Server to host and
              distribute standardized training and validation sets to be used in
              algorithm performance comparison experiments, as well as to
              collect the results obtained by different users.
            </p>
            <p>
              Beyond the PZ Validation Cooperative, the RSP users will be able
              to use the PZ Server to easily keep track and share lightweight
              files containing varied test results. All data products uploaded
              to the PZ Server will automatically be visible and available,
              without any scientific validation, to all RSP users, and only for
              this particular group, therefore it is not the appropriate tool to
              release data products to the general public.
            </p>
            <p>
              If you have comments or suggestions, be welcome to open an issue
              on the{' '}
              <Link
                href="https://github.com/linea-it/pz-server"
                target="_blank"
                rel="noreferrer"
              >
                PZ Server repository on GitHub
              </Link>
              , or contact the developers at{' '}
              <Link
                href="mailto:helpdesk@linea.gov.br"
                target="_blank"
                rel="noreferrer"
              >
                helpdesk@linea.gov.br
              </Link>
              .
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
