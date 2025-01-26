import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { useSelector } from 'react-redux'
import { RootState } from './store'

export const App: React.FC = () => {

  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div className="app">
      <header className='main-layout'>
        <Navigation />
      </header>
      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </main>
    </div>
  )
}
