import React from 'react'

//LOGO ---Home - atrações - Cardapio - Bebidas - ASSIDE:CARRINHO

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top rounded  navbar-light" style="background-color: #ffffff00;">
      <a href="./index.html"><img id="logoNav" src="./assets/images/newImage/logoSvg.svg"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto topnav">

          <li class="nav-item active">
            <a class="nav-link" href="#" style="color: #FF914D;">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: #FF914D;">Cardápio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" style="color: #FF914D;">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

//