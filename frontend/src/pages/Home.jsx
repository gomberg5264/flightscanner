import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React, { lazy, Suspense } from 'react';
import SearchContainer from '../components/SearchContainer';
import Spinner from '../components/Spinner';

const SearchForm = lazy(() => import('../components/SearchForm'));
const SearchResults = lazy(() => import('../components/SearchResults'));

const Home = () => {
  return (
    <>
      <SearchContainer>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Let the journey begin
        </Typography>
        <Suspense fallback={<Spinner color="primary" />}>
          <SearchForm />
        </Suspense>
      </SearchContainer>
      <Container maxWidth="lg">
        <Suspense fallback={<Spinner />}>
          <SearchResults />
        </Suspense>
      </Container>
    </>
  );
};

export default Home;
