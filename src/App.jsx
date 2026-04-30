import React from 'react'
import { StyleSheet, Font } from '@react-pdf/renderer'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage  from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import AdminPage from './pages/AdminPage'
import AdminPage2 from './pages/adminPage2'
import PreviewPdf from './components/PreviewPdf'
import ProtectRoute from './components/ProtectRoute'



const App = () => {
  return (
	
		<BrowserRouter>
			<Routes>
				
				<Route path='/' element={<FirstPage />} />
				<Route path='/home' element={<FirstPage />} />
				<Route path='/verify' element={<SecondPage />} />
				<Route path='/result' element={<ThirdPage />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='/admin2' element={<ProtectRoute>
					<AdminPage2 />
				</ProtectRoute>} />
				<Route path='/previewpdf' element={ <ProtectRoute> <PreviewPdf />
				</ProtectRoute>} />
				
			</Routes>
		</BrowserRouter>

  )
}

export default App
