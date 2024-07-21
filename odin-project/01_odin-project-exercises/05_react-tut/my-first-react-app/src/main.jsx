import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { FavoriteFood } from './FavoriteFood.jsx'
import { BestBasketBallPlayer } from './BestBballPlayer.jsx'
import ConvertHTMLToJSX from './HtmlToJsx.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <FavoriteFood />
    <BestBasketBallPlayer />
    <ConvertHTMLToJSX />
  </React.StrictMode>,
)


