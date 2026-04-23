import React from 'react'
import { StyleSheet, Font } from '@react-pdf/renderer'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage  from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import AdminPage from './pages/AdminPage'
import AdminPage2 from './pages/adminPage2'
import CertificatePdf from './components/CertificatePdf'

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const App = () => {
  return (
	
		<BrowserRouter>
			<Routes>
				
				<Route path='/' element={<FirstPage />} />
				<Route path='/home' element={<FirstPage />} />
				<Route path='/verify' element={<SecondPage />} />
				<Route path='/result' element={<ThirdPage />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='/admin2' element={<AdminPage2 />} />
				<Route path='/certificatepdf' element={<CertificatePdf />} />
				
			</Routes>
		</BrowserRouter>

  )
}

export default App
