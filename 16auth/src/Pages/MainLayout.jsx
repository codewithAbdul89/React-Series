import Header from '../Pages/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Popup from './Popup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { clearUser, setUser } from '../Components/authSlice'
import { auth } from '../Components/fireBaseAuth'
import { LoadingFunction } from '../Pages/Popup'
import { setLoading, clearLoading } from '../Components/PopUpSlice'

function MainLayout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(setLoading())

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }))
      }

      else {
        dispatch(clearUser())
      }
      dispatch(clearLoading())
    })


    return () => {
      unsubscribe()
    }
  }, [dispatch, navigate])

  const isLoading = useSelector(state => state.popup.loading)



  return (<>
    <Popup />
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#F7F1E6_0%,_#EDE3D2_45%,_#E8DDCC_100%)] w-full flex flex-col">

      {isLoading && <LoadingFunction />}
      <div className='z-[11]'>
        <Header />
      </div>
      {/* reserve space for fixed header */}
      <main className="pt-[70px] flex-1">
        <Outlet />
      </main>

      <div className=' w-full  '>
        <Footer />
      </div>

    </div>
  </>

  )
}

export default MainLayout