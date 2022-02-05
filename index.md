<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style-index.css">
    <link rel="stylesheet" href="css/owl/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl/owl.theme.default.min.css">
    <link rel="shortcut icon" href="icon/favicon.ico" type="image/x-icon">

    
    <title>Bool-degaS</title>
</head>
<body>

    <main>
        <header class="container-1 p-3 mb-3 border-bottom">
            <div class="container">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src="imagens/btn-b.PNG" alt="logo" class="bi me-3 rounded-3" width="70" height="70" role="img">
                </a>
                        
                <form class="d-inline-flex p-0 bd-highlight border border-0 w-50">
                    <input type="search" class="form-control m-0" placeholder="Pesquise seu produto aqui" aria-label="Search">
                    <button type="submit" class="btn-ss btn btn-outline-success ms-2"><i class="btn-s fas fa-search me-2"></i></button>
                </form>
        
                <ul class="nav col-12 col-lg-auto ms-4 mb-2 justify-content-center mb-md-0">
                    
                    <li class="nav-item dropdown" id="login">
                        <a href="#" class="log-cad nav-link dropdown-toggle link-secondary" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user me-2"></i>Faça seu login ou cadastre-se</a>
                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a href="telas/login.html" class="dropdown-item">Login</a></li>
                            <li><a href="telas/login-cad.html" class="dropdown-item">Cadastre-se</a></li>

                        </ul>
                    </li>

                    <li><a href="#" class="ms-4 nav-link px-2 link-dark"><i class="loj-c fas fa-shopping-basket fa-2x"></i></a></li>
                    <li><a href="#" class="ms-4 nav-link px-2 link-dark"><i class="loj-c far fa-heart fa-2x"></i></a></li>
                </ul>
              </div>
            </div>
          </header>
          <header class="container-2 p-3 mb-3 border-bottoms bg-light bg-opacity-5">
            <div class="cab-2 inner">
                <a class="nav-link logo-bt" href="#"><h1 class="text-hide d-flex flex-wrap" style="background-image: url('imagens/btn-b.PNG'); width: 59px; height: 60px;"></h1></a>
                <button type="button" id="contribuir" class="btn-cont btn btn-success btn-lg" data-toggle="tooltip" data-placement="bottom" title="Contribua e venha cadastrar seus produtos conosco!">Contribuir</button>
               
              <nav class="nav-2 nav nav-masthead justify-content-center">
               
                <a class="nav-link btn-dark active" href="index.html"><i class="fas fa-house-user me-2"></i>Pagina Inicial</a>
                <a class="nav-link" href="#"><i class="fas fa-shopping-cart me-2"></i></i>Produtos</a>
                <a class="nav-link" href="#"><i class="fas fa-truck me-2"></i>Compra Online</a>
                <a class="nav-link" href="#"><i class="fas fa-map-marker-alt me-2"></i>Localizaçao</a>
                <a class="nav-link" href="#"><i class="fas fa-headphones me-2"></i>Suporte</a>
                <li class="nav-item dropdown">
                  <a href="#" class="log-cad nav-link dropdown-toggle link-secondary" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Fale conosco </a>
                  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><a href="#" class="dropdown-item">FAQ</a></li>
                      <li><a href="#" class="dropdown-item">Telefone</a></li>
                      <li><a href="#" class="dropdown-item">Chat</a></li>

                  </ul>
              </li>
              </nav>
            </div>
          </header>
          <nav class="nav-pag" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="item-nav breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="item-nav breadcrumb-item active" aria-current="page">Página Inicial</li>
            </ol>
          </nav>
          <div class="container">
            <!-- Conteúdo aqui -->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="box-img d-block w-100" src="imagens/banner-booldegas.jpg" alt="Primeiro Slide">
                  </div>
                  <div class="carousel-item">
                    <img class="box-img d-block w-100" src="imagens/banner-01.jpg" alt="Segundo Slide">
                  </div>
                  <div class="carousel-item">
                    <img class="box-img d-block w-100" src="imagens/banner-02.png" alt="Terceiro Slide">
                  </div>
                  <div class="carousel-item">
                    <img class="box-img d-block w-100" src="imagens/banner-03.png" alt="Terceiro Slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Próximo</span>
                </a>
              </div>
             
          </div>
          <div class="corrousel-serie">
            <div class="owl-carousel owl-theme">
                  <div class="item-prod" id="prod_1" onclick="data_product(id)">
                        <img class="box-serie" src="imagens/prod-01.png" alt="" srcset="">
                        <p class="titulo-p">Biscoito Cracker Mini</p>
                        <p class="preco-t">R$ 4,50</p>
                  
                  </div>
                <div class="item-prod"  id="prod_2" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-02.png" alt="" srcset="">
                     <p class="titulo-p">Manteiga primor p</p>
                    <p class="preco-t">R$ 4,70</p>
                </div>
                <div class="item-prod" id="prod_3" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-03.png" alt="" srcset="">
                     <p class="titulo-p">Leite Ninho Pacote</p>
                    <p class="preco-t">R$ 31,90</p>
                </div>
                <div class="item-prod" id="prod_4" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-04.png" alt="" srcset="">
                     <p class="titulo-p">Açúcar União 1kg</p>
                    <p class="preco-t">R$ 4,10</p>
                </div>
                <div class="item-prod" id="prod_5" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-05.png" alt="" srcset="">
                     <p class="titulo-p">Macarrão Espaguete</p>
                    <p class="preco-t">R$ 3,50</p>
                </div>
                <div class="item-prod" id="prod_6" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-06.png" alt="" srcset="">
                     <p class="titulo-p">Arroz Tio João 1kg</p>
                    <p class="preco-t">R$ 14,50</p>
                </div>
                <div class="item-prod" id="prod_7" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-07.png" alt="" srcset="">
                     <p class="titulo-p">Feijão Camil 1kg</p>
                    <p class="preco-t">R$ 6,70</p>
                </div>
                <div class="item-prod" id="prod_8" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-08.png" alt="" srcset="">
                     <p class="titulo-p">Leite Condensado</p>
                    <p class="preco-t">R$ 5,40</p>
                </div>
                <div class="item-prod" id="prod_9" onclick="data_product(id)">
                    <img class="box-serie" src="imagens/prod-09.png" alt="" srcset="">
                   <p class="titulo-p">Amaciante Ypê</p>
                    <p class="preco-t">R$ 8,90</p></div>
            </div>
        </div>
        
        <div class="corrousel-serie">
          <div class="owl-carousel owl-theme">
                <div class="item-prod" id="loja_1" onclick="data_loja(id)">
                      <img class="box-serie" src="https://www.maxpixel.net/static/photo/1x/Italy-Food-Rome-Culture-Italian-Shop-Delicatessan-2355864.jpg" alt="" srcset="">
                      <p class="titulo-p">Mercearia do Seu Zé</p>
                
                </div>
              <div class="item-prod"  id="loja_2" onclick="data_loja(id)">
                  <img class="box-serie" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Feij%C3%A3o_1.jpg" alt="" srcset="">
                   <p class="titulo-p">Mercadinho do João</p>
              </div>
              <div class="item-prod" id="loja_3" onclick="data_loja(id)">
                  <img class="box-serie" src="https://cdn.pixabay.com/photo/2015/01/05/11/33/bakery-589157_1280.jpg" alt="" srcset="">
                   <p class="titulo-p">Padaria do Zé Maria</p>
              </div>
              <div class="item-prod" id="loja_4" onclick="data_loja(id)">
                  <img class="box-serie" src="https://fastly.4sqi.net/img/general/600x600/GJQ4FQEKUGASU24AX2RH2Y2UGEW4F2UCIPC0MXEIN3RLHY55.jpg" alt="" srcset="">
                   <p class="titulo-p">Mercadinho Dona Maria</p>
              </div>
              <div class="item-prod" id="loja_5" onclick="data_loja(id)">
                  <img class="box-serie" src="https://c.pxhere.com/photos/88/a0/shop_store_market_vintage_tobacco_shop-113951.jpg!d" srcset="https://c.pxhere.com/photos/88/a0/shop_store_market_vintage_tobacco_shop-113951.jpg!d" alt="vintage, fazer compras, loja, mercado, brinquedo, tenda, tabacaria, história antiga, Banco de imagens In PxHere">
                   <p class="titulo-p">Budega seu Tio João</p>
              </div>
              <div class="item-prod" id="loja_6" onclick="data_loja(id)">
                  <img class="box-serie" src="https://c.pxhere.com/photos/c0/43/bar_local_cong_ireland_irish_pub_pub_bottles_whisky-1007879.jpg!d" srcset="https://c.pxhere.com/photos/c0/43/bar_local_cong_ireland_irish_pub_pub_bottles_whisky-1007879.jpg!d" alt="restaurante, Barra, beber, Cerveja, toque, garrafas, Uísque, Irlanda, local, bar, irlandês, bar irlandês, loja de bebidas, Bebida destilada, Cong, Banco de imagens In PxHere">
                   <p class="titulo-p">Bar do Tonhão</p>
              </div>
              <div class="item-prod" id="loja_7" onclick="data_loja(id)">
                  <img class="box-serie" src="https://c.pxhere.com/images/35/a7/81f414f37162e304adaf0f52b2f8-1583413.jpg!d" srcset="https://c.pxhere.com/images/35/a7/81f414f37162e304adaf0f52b2f8-1583413.jpg!d" alt="fazer compras, Boutique, Venda, loja outlet, varejo, moda, Mercado, bazar, construção, compras, têxtil, vestir, mercado, período de férias, Acessório de moda, turismo, rua, Banco de imagens In PxHere"> 
                  <p class="titulo-p">Lojinha da Márcia</p>
              </div>
              <div class="item-prod" id="loja_8" onclick="data_loja(id)">
                  <img class="box-serie" src="https://fastly.4sqi.net/img/general/600x600/uSq8orMO858jFy14eDWfLMKlTCXiB7jz79rmEryK-1o.jpg" alt="" srcset="">
                   <p class="titulo-p">Padaria Dona Vilma</p>
              </div>
              <div class="item-prod" id="loja_9" onclick="data_loja(id)">
                  <img class="box-serie" src="" alt="" srcset="">
                 <p class="titulo-p">Budega dois irmãos</p>
              </div>
          </div>
      </div>

      <div class="container">
        <div class="row" id="new_product"></div>
      </div>
    </main>

    <footer>
      <div class="boxes">
        <img src="imagens/logo-m.PNG" alt="Logo - Bool-degaS" class="logo">
      </div>
      <div class="boxes">
        <h2>Inicio</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Compra Online</a></li>
        </ul>
      </div>
      <div class="boxes">
        <h2>Informações</h2>
        <ul>
          <li><a href="#">Endereço</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">E-mail</a></li>
        </ul>
      </div>
      <div class="boxes">
        <h2>Suporte</h2>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Telefone</a></li>
          <li><a href="#">Chat</a></li>
        </ul>
      </div>
      <div class="boxes">
        <h2>Sobre nós</h2>
        <p>
          Somos uma plataforma online de compra e cadastro de produtos para o lar, viemos com o objetivo de atender ao público afetado pela pandemia do coronavírus e o público em geral que queira um facilitador na hora de fazer sua feira.
        </p>
      </div>
    </footer>
    <div class="foot">
      <div class="redes">
        <p class="copy">Copyright &copy; 2022 Bool-degaS, Todos os direitos reservados.</p>
      </div>
      <div class="redes">
        <p class="c-rede">REDES SOCIAIS</p>
        <a href=""><i class="fab fa-facebook"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-youtube"></i></a>
        <a href=""><i class="fab fa-github"></i></a>
      </div>
    </div>

    <script src="arqv-js/scripts-index.js"></script>
    <script src="arqv-js/owl/jquery.min.js"></script>
    <script src="arqv-js/owl/owl.carousel.min.js"></script>
    <script src="arqv-js/owl/setup.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/65e74de912.js" crossorigin="anonymous"></script>
    <script src="arqv-js/script-cesta-index.js"></script>
    <script src="arqv-js/tela-inicial-login.js"></script>
</body>
</html>