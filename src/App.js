import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuTopQr from './components/MenuTopQr';
import BannerQr from './components/BannerQr';
import Ofrecer from './components/Ofrecer';
import Beneficios from './components/Beneficios';
import PreciosQr from './components/PreciosQr/PreciosQr';

function App() {
  return (
    <div className="Qr">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />

            <MenuTopQr/>
            <BannerQr/>
            <Ofrecer/>
            <Beneficios/>
            <PreciosQr/>
            </div>
  );
}

export default App;
