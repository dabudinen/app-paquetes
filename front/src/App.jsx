import { useState } from 'react'  
import instaLogo from './assets/img/logo-instaya.png'
import instaLogoBig from './assets/img/logo.png'
import integrantes1 from './assets/img/integrantes-01.jpg'
import integrantes2 from './assets/img/integrantes-02.jpg'
import integrantes3 from './assets/img/integrantes-03.jpg'
import integrantes4 from './assets/img/integrantes-04.jpg'
import integrantes5 from './assets/img/integrantes-05.jpg'
import bannerCamion from './assets/img/imagen-banner-camion.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <main className="flex-shrink-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5"> 
        <img src={instaLogo} alt="InstaYa!"  title="InstaYa!" />&nbsp;<button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="about.html">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="contact.html">Precios</a></li>
              <li className="nav-item"><a className="nav-link" href="pricing.html">Nosotros</a></li>
              <li className="nav-item"><a className="nav-link" href="faq.html">Contactanos</a></li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle"
                  id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Blog</a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                  <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                  <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle"
                  id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Portfolio</a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                  <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio
                      Overview</a></li>
                  <li><a className="dropdown-item" href="portfolio-item.html">Portfolio
                      Item</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* header */}
  
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">Un mundo de
                  soluciones logisticas para ti</h1>
                <p className="lead fw-normal text-white-50 mb-4">EntregaYa!
                  Soluciones en transporte, entrega y logistica integral</p>
                <p className="lead fw-normal text-white-50 mb-4">¡Lo tenemos todo!</p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Conoce
                    nuestros servicios</a> <a className="btn btn-outline-light btn-lg px-4"
                    href="#%21">Ver estado de tu envío</a> </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5"
                src={instaLogoBig} alt="..." /></div>
          </div>
        </div>
      </header>
      {/* featured  */}
      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">Conoce nuestras soluciones</h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                      className="bi bi-envelope"></i> </div>
                  <h2 className="h4 principal">Soluciones Digitales</h2>
                  <p className="mb-0"><br />
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                      className="bi bi-truck"></i></div>
                  <h2 className="h4 principal">Soluciones de transporte</h2>
                  <p className="mb-0"><br />
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                      className="bi bi-building"></i></div>
                  <h2 className="h4 principal">Soluciones empresariales</h2>
                  <p className="mb-0"><br />
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                      className="bi bi-bag-fill"></i></div>
                  <h2 className="h4 principal">Soluciones para eCommerce</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial  */}
      <section className="py-5 bg-light" id="scroll-target">
        <div className="col-sm-12 text-center"> <img className="center-block" src={bannerCamion}
            alt="" /></div>
      </section>
      {/* blog */}
      <section className="py-5 bg-dark">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder text-secondary">Proyecto Plataforma Recogida de
                  Paquetes InstaYA!</h2>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="fw-bolder text-light">Misión TIC Uninorte</h2>
              <p className="lead fw-normal text-light mb-5">NRC 2240 - Grupo 10</p>
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-5 justify-content-center">
              <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center"> <img className="img-fluid rounded-circle mb-4 px-4"
                    src={integrantes1} alt="..." />
                  <h5 className="fw-bolder text-light">Ezequiel Elguedo Santander</h5>
                  <div className="fst-italic text-secondary">Frontend Developer</div>
                </div>
              </div>
                            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center"> <img className="img-fluid rounded-circle mb-4 px-4"
                    src={integrantes2} alt="" />
                  <h5 className="fw-bolder text-light">Alfredo Nuñez Dickson</h5>
                  <div className="fst-italic text-secondary">Frontend developer</div>
                </div>
              </div>
              <div className="col mb-5 mb-5 mb-sm-0">
                <div className="text-center"> <img className="img-fluid rounded-circle mb-4 px-4"
                    src={integrantes3} alt="" />
                  <h5 className="fw-bolder text-light">Johnny De Castro Martinez</h5>
                  <div className="fst-italic text-secondary">FullStack developer </div>
                </div>
              </div>
              <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center"> <img className="img-fluid rounded-circle mb-4 px-4"
                    src={integrantes4} alt="" />
                  <h5 className="fw-bolder text-light">Daniel Abudinen Ordoñez</h5>
                  <div className="fst-italic text-secondary">Gestor de DB / QA tester</div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="text-center"> <img className="img-fluid rounded-circle mb-4 px-4"
                    src={integrantes5} alt="" />
                  <h5 className="fw-bolder text-light">Elkin López Barrios</h5>
                  <div className="fst-italic text-secondary">Backend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    { /* footer*/ }
    <footer className="bg-secondary py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0 text-white">Copyright © InstaYA! 2022</div>
          </div>
          <div className="col-auto"> 
            <a className="link-light" href="https://github.com/dabudinen/app-paquetes"><i className="bi bi-github"></i> Github del proyecto</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default App
