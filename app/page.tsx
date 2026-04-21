import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Form from "@/components/form";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {

  const homeSection = {
    img1: "/IMG_Experiencias 2.png",
    img2: "/IMG_Experiencias 1.png",
    img3: "/IMG_Experiencias 3.png",
    img4: "/IMG_Experiencias 4.png",
  }

  const menuSection = {
    img1: ["/button Cocteleria.png", "https://menu.tu-mesa.com/7-cielos/7325/menu/?scrollTop=cocteles-de-autor"],
    img2: ["/Button Entrada.png", "https://menu.tu-mesa.com/7-cielos/7325/menu/?scrollTop=entradas"],
    img3: ["/Button Plato fuerte.png", "https://menu.tu-mesa.com/7-cielos/7325/menu/?scrollTop=arroces-risottos"],
    img4: ["/Button Postre.png", "https://menu.tu-mesa.com/7-cielos/7325/menu/?scrollTop=postres"],
  }

  const buttonsLinks = {
    reservarAhora: "https://www.apparta.co/7-cielos/reservas?utm_medium=instagram",
    verMenu: "https://menu.tu-mesa.com/7-cielos/7325/",
    descubrirMas: "https://www.instagram.com/7cielos_rooftop/?hl=es",
    reservarEvento: "https://www.apparta.co/7-cielos/reservas?utm_medium=instagram",
    contactoWhatsapp: "https://api.whatsapp.com/send?phone=573008663045",
    tiktok: "https://www.tiktok.com/@7cielos.rooftop?lang=es",
    instagram: "https://www.instagram.com/7cielos_rooftop/?hl=es",
    contactoEmail: "[EMAIL_ADDRESS]"
  }


  return (
    <div className="flex flex-col w-full ">
      <NavBar />
      <main className="flex flex-col grow">
        <section id="home" className="flex flex-col items-center justify-center w-full">
          <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
            <Image src="/IMG_Principal.png" alt="Vista exterior de 7 Cielos Rooftop en Cartagena" fill={true} priority={true} className='object-cover -z-10 absolute bg-background' />
            <div className="flex flex-col items-center justify-center pt-20 md:pt-40 p-4 gap-5">
              <h1 className="text-5xl font-medium font-theseason text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl">
                Vive sabores, vistas y <br></br><span className="text-4xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">
                  momentos inolvidables
                </span>
              </h1>

              <p className="font-medium font-gotham text-xs/6 text-center sm:text-md/6 xl:text-base/6">
                DESCUBRE UN ROOFTOP ÚNICO EN CARTAGENA CON GASTRONOMÍA FUSIÓN COCTELES DE <br />
                AUTOR, ATARDECERES MÁGICOS Y NOCHES MUY CERCA DEL CIELO
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-10">
              <Button color="dark" url={buttonsLinks.reservarAhora} >RESERVAR AHORA</Button>
              <Button color="light" url={buttonsLinks.verMenu} >VER MENÚ</Button>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center w-full xl:pt-20 bg-background">
            <h2 className="text-5xl font-medium font-theseason mt-10 text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl">
              Un lugar que <span className="text-5xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">
                trasciende</span> <br /> la {" "}
              <span className="text-5xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">
                experiencia {""}
              </span>
              gastronómica
            </h2>

            <p className="font-medium font-gotham text-xs/6 text-center mt-5 px-5 xl:mt-9 xl:mb-30 sm:text-md/6 xl:text-base/6">
              EN 7 CIELOS FUSIONAMOS GASTRONOMÍAS INTERNACIONALES Y COCTELERÍA DE AUTOR, CON UN <br />
              AMBIENTE VIBRANTE Y VISTAS ÚNICAS DE CARTAGENA.
            </p>
            <p className="font-medium font-gotham text-xs/6 text-center mt-5 px-5 xl:mt-9 xl:mb-30 sm:text-md/6 xl:text-base/6">
              CADA VISITA ES UN MOMENTO PARA RECORDAR.
            </p>
            <div className="flex justify-center flex-nowrap w-full sm:flex-wrap mt-10">
              <div className="flex overflow-x-auto gap-5 px-4">
                {Object.values(homeSection).map((img, index) => (
                  <Image key={index} src={img} alt={`Experiencia en 7 Cielos Rooftop ${index + 1}`} className="w-70 h-auto sm:w-90" width={500} height={500} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-20 w-full mt-15 mb-25 xl:mt-25 xl:mb-40">
              <div className="flex flex-wrap items-center justify-center gap-15 w-full xl:gap-40">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-theseason-italic font-medium text-4xl mb-10 text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl xl:text-left">
                    Sabores, aromas, <br /> momentos.
                  </h3>
                  <p className="font-medium font-gotham text-xs/6 text-center mb-7 px-5 sm:text-md/6 xl:text-base/6 xl:text-left">
                    DESDE ENTRADAS SORPRENDENTES HASTA PLATOS PRINCIPALES <br className="hidden sm:block" />
                    LLENOS DE PERSONALIDAD - Y COCTELES QUE CUENTAN HISTORIAS <br className="hidden sm:block" />
                    7 CIELOS S EL PLAN PERFFECTO PARA CADA OCASIÓN: CITA <br className="hidden sm:block" />
                    ROMÁNTICA, CELEBRACIÓN CON AMIGOS O CENA CON VISTA.
                  </p>
                  <Button color="dark" url={buttonsLinks.descubrirMas}>DESCUBRE MÁS</Button>
                </div>
                <Image src="/IMG_Sabores y Aroma.png" alt="Plato de gastronomía fusión en 7 Cielos" className="w-70 h-auto sm:w-90" width={500} height={500} />
              </div>
              <div className="flex flex-wrap flex-col-reverse justify-center items-center gap-20 xl:flex-row">
                <Image src="/IMG_Vibra y Ritmo.png" alt="Dj en vivo y ambiente de fiesta en rooftop Cartagena" className="w-70 h-auto sm:w-90" width={500} height={500} />
                <div className="flex flex-col items-center gap-10 xl:items-end">
                  <h3 className="font-theseason-italic font-medium text-5xl text-center sm:text-6xl md:text-7xl xl:text-8xl xl:text-right">
                    Vibra <br />y ritmo
                  </h3>
                  <p className="font-medium font-gotham text-xs/6 text-center  sm:text-md/6 xl:text-base/6 xl:text-right">
                    VIVE LA ENERGIA DE NUESTROS <br />
                    ATARDECERES Y LAS MÁGICAS NOCHES CON <br />
                    MÚSICA EN VIVO, DJS Y EVENTOS ESPECIALES.<br />
                    PARA QUE CADA VISITA SEA ÚNICA.
                  </p>
                  <Button color="dark" url={buttonsLinks.reservarEvento}>RESERVA TU EVENTO</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background w-full">
            <h2 className="font-theseason-italic font-medium text-5xl text-center mb-10 px-5 xl:text-8xl">
              Reservar es facil y rapido.
            </h2>
            <p className="font-medium font-gotham text-xs/6 text-center mb-7 px-5 sm:text-md/6 xl:text-base/6">
              ELIGE TU FECHA, HORA Y PERSONALIZA TU PLAN.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button color="dark" url={buttonsLinks.reservarAhora}>RESERVAR AHORA</Button>
              <Button color="light" url={buttonsLinks.contactoWhatsapp}>CONTÁCTANOS POR WHATSAPP</Button>
            </div>
          </div>
        </section>

        <section id="menu" className="flex flex-col items-center justify-center w-full gap-20">
          <div className="flex flex-col gap-10 h-full w-full relative pt-30">
            <Image src="/Menu_Principal.png" alt="Menu" fill={true} className='object-cover -z-10 absolute bg-background' />
            <h2 className="font-theseason-italic font-medium text-4xl text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl">
              Explora <span className="text-4xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">nuestros platos</span> <br />
              <span className="font-medium font-theseason text-4xl text-center mb-7 sm:text-6xl md:text-7xl xl:text-8xl">cuidadosamente seleccionados</span>
            </h2>
            <p className="font-medium font-gotham text-xs/6  text-center px-4 sm:text-md/6 xl:text-base/6">
              PARA OFRECERTE UNA EXPERIANCIA INOLVIDABLE: SABORES LOCALES CON TOQUES<br />
              INTERACIONALES, INGREDIENTES FRESCOS Y CREATIVIDAD EN CADA BOCADO.
            </p>
            <div className="flex flex-wrap gap-5 mt-10 justify-center">
              {Object.values(menuSection).map((img, index) => (
                <a key={index} href={img[1]} target="_blank" rel="noopener noreferrer">
                  <Image src={img[0]} alt={`Sección del menú ${index + 1}`} className="w-70 h-auto sm:w-90 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer" width={500} height={500} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section id="ubicacion" className="flex flex-col items-center justify-center w-full gap-8 pt-20 px-10 bg-background">
          <h2 className="font-theseason font-medium text-4xl text-center px-5 sm:text-7xl">
            Estamos ubicados en el exclusivo <br />
            sector <span className="text-4xl text-primary font-medium font-theseason-italic px-5 sm:text-7xl">Bocagrande</span>
            , en Cartagena
          </h2>
          <p className="font-medium font-gotham text-xs/6 text-center mb-7 px-5 sm:text-base/6">
            CON UNA VISTA ÚNICA DE SU BAHÍA Y ATARDECERES ESPECTACULARES.
          </p>
          <div className="flex flex-col justify-center items-center gap-12 xl:flex-row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1860193033413!2d-75.5536753265285!3d10.406795789720366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fa2ed234661%3A0x230d86588a59506!2s7%20CIELOS!5e0!3m2!1ses-419!2sco!4v1772142264332!5m2!1ses-419!2sco"
              className='w-80 xl:w-150'
              width="600"
              height="450"
              style={{ border: 0, borderRadius: '5%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="min-h-30">
              <p className="font-medium font-gotham text-xs/6 text-primary sm:text-base/6">DIRECCIÓN:</p>
              <p className="font-medium font-gotham text-xs/6 sm:text-base/6">
                CRA. 3 #10-59, PISO 6, BOCAGRANDE -<br />
                CARTAGENA, COLOMBIA
              </p>

              <p className="font-medium font-gotham text-xs/6 text-primary sm:text-base/6 mt-7">HORARIO:</p>
              <p className="font-medium font-gotham text-xs/6 sm:text-base/6">
                LUNES - JUEVES 4:00 PM - 12:00 AM <br />
                VIERNES - DOMINGO 4:00 PM - 2:00 AM
              </p>
            </div>

          </div>
        </section>
        <section id="contacto" className="flex flex-col items-center justify-center w-full pt-5 sm:pt-20 bg-background">
          <div className="flex flex-wrap items-center justify-center sm:flex-nowrap">
            <div className="flex flex-nowrap items-center">
              <span className="w-13 h-0 border-primary border-1"></span>
              <h2 className="font-theseason-italic font-medium text-5xl text-justify px-5 sm:text-7xl">
                Hablemos
              </h2>
            </div>
            <p className="font-medium font-gotham text-[10px]/6 text-center mb-7 px-5 sm:text-xs/6 sm:text-left">
              <span className="text-primary">¿TIENES DUDAS O QUIERES RESERVAR UN <br /> EVENTO PRIVADO?</span> CONTACTANOS Y NUESTRO <br /> EQUIPO ESTARA ENCANTADO DE AYUDARTE
            </p>
          </div>
          <Form />
          <div className="w-full bg-background-secondary pt-20 sm:pt-25">
            <div className="flex flex-wrap items-center justify-center lg :flex-nowrap gap-2 lg:gap-5">
              <span className="w-5 h-0 border-primary border-1"></span>
              <h3 className="font-theseason-italic font-medium text-5xl text-center px-5 sm:text-7xl">
                Info directa
              </h3>
              <div className="flex w-auto items-center gap-3 font-gotham text-base sm:text-xl">
                <a href={buttonsLinks.contactoWhatsapp} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons8-whatsapp-50.png" alt="Whatsapp" width={300} height={300} className='w-10 h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer' />
                </a>
                <span>+57 300 866 3045</span>
              </div>
              <div className="flex w-auto items-center gap-3 font-gotham text-base sm:text-xl">
                <a href={`mailto:${buttonsLinks.contactoEmail}`} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons8-mensaje-48.png" alt="Mensaje" width={300} height={300} className='w-10 h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer' />
                </a>
                <span>CONTACTO@7CIELOS.COM</span>
              </div>
            </div>
            <div className="flex w-auto flex-wrap justify-center items-center gap-3 font-gotham text-base pt-20 sm:text-xl">
              <div className="flex w-auto items-center gap-2 lg:gap-5">
                <span className="w-5 h-0 border-primary border-1 lg:w-13"></span>
                <h3 className="font-theseason-italic font-medium text-5xl text-center px-5 sm:text-7xl">
                  Siguenos en
                </h3>
              </div>
              <div className="flex  w-auto items-center gap-3 font-gotham text-base sm:text-xl">
                <a href={buttonsLinks.tiktok} target="_blank" rel="noopener noreferrer">
                  <Image src="/Button_Tik_tok.png" alt="Tik tok" width={300} height={300} className='w-15 h-15 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer' />
                </a>
                <a href={buttonsLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <Image src="/Button_Instagram.png" alt="Instagram" width={300} height={300} className='w-15 h-15 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer' />
                </a>
              </div>
            </div>
          </div>

        </section>
        <section id="politicas" className="w-full bg-background-secondary flex flex-col items-center justify-center w-full gap-8 pt-20 sm:py-30 p-10">
          <div className="flex gap-2 lg:gap-5">
            <span className="w-5 h-0 border-primary border-1 mt-5 sm:mt-8 lg:w-13 "></span>
            <h2 className="font-medium font-theseason-italic text-5xl text-center mb-7 px-5 sm:text-8xl sm:text-left">
              Politica de privacidad <br />
              y tratamiento de datos
            </h2>
          </div>
          <ul className="flex flex-col gap-7">
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              EN CUMPLIMIENTO DE LA LEGISLACIÓN COLOMBIANA (LEY 1581 DE 2012) Y OTRAS NORMAS DE PROTECCIÓN DE DATOS APLICABLES, EN 7 <br />
              CIELOS ROOFTOP GARANTIZAMOS LA TRANSPARENCIA EN LA RECOLECCIÓN, USO, ALMACENAMIENTO Y PROTECCIÓN DE TUS DATOS <br />
              PERSONALES. </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>DATOS RECOLECTADOS:</b> NOMBRE, EMAIL, TELÉFONO Y CUALQUIER INFORMACIÓN QUE NOS PROPORCIONES VOLUNTARIAMENTE A <br />
              TRAVÉS DE FORMULARIOS DE CONTACTO O RESERVAS EN LÍNEA.
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>FINALIDAD:</b> GESTIONAR RESERVAS, RESPONDER CONSULTAS, ENVIARTE INFORMACIÓN RELEVANTE Y MEJORAR TU EXPERIENCIA.
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>CONSENTIMIENTO:</b> AL USAR NUESTROS FORMULARIOS Y SERVICIOS ACEPTAS ESTA POLÍTICA.
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6 ">
              <b>PROTECCIÓN:</b> TUS DATOS SE RESGUARDAN CON MEDIDAS DE SEGURIDAD RAZONABLES Y NO SERÁN VENDIDOS A TERCEROS.
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>DERECHOS DEL TITULAR:</b> PUEDES ACCEDER, RECTIFICAR, ACTUALIZAR Y SOLICITAR ELIMINACIÓN DE TUS DATOS CUANDO LO REQUIERAS.
            </li>
          </ul>

        </section>
      </main>
      <Footer />
    </div>

  );
}

