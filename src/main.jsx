import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Clase2 from './components/Clases/Clase2'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <Router/>
    </Provider>
)
