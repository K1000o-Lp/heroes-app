import { Route, Routes } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
        <NavBar />

        <div className='container'>
          <Routes>
              <Route path='marvel' element={ <MarvelScreen /> } />
              <Route path='dc' element={ <DcScreen /> } />

              <Route path='search' element={ <SearchScreen /> } />
              <Route path='hero/:HeroId' element={ <HeroScreen /> } />


              <Route path='/' element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
