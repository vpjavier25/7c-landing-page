import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Form from "@/components/form";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImagesCard from "@/components/ImagesCard";
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import LanguageSwitcher from "@/components/LanguageSwitcher";


export interface HomeSection {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {

  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dictionary = await getDictionary(lang)

  const homeSection: HomeSection = {
    img1: "/IMG_Experiencias 1.png",
    img2: "/IMG_Experiencias 2.png",
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
    descubrirMas: "https://www.apparta.co/7-cielos/reservas?utm_medium=instagram",
    reservarEvento: "https://www.apparta.co/7-cielos/reservas?utm_medium=instagram",
    contactoWhatsapp: "https://api.whatsapp.com/send?phone=573008663045",
    tiktok: "https://www.tiktok.com/@7cielos.rooftop?lang=es",
    instagram: "https://www.instagram.com/7cielos_rooftop/?hl=es",
    contactoEmail: "comercial@atrium.com.co"
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
                {dictionary.home.title.part1}<br></br><span className="text-4xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">
                  {dictionary.home.title.part2}
                </span>
              </h1>

              <p className="font-medium font-gotham text-xs/6 text-center sm:text-md/6 xl:text-base/6">
                {dictionary.home.subtitlePart1}<br />
                {dictionary.home.subtitlePart2}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-10">
              <Button color="dark" url={buttonsLinks.reservarAhora} >{dictionary.home.buttons.reservarAhora}</Button>
              <Button color="light" url={buttonsLinks.verMenu} >{dictionary.home.buttons.verMenu}</Button>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center w-full xl:pt-20 bg-background">
            <h2 className="text-5xl font-medium font-theseason mt-10 text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl">
              {dictionary.trasciende.title.part1}<span className="text-5xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">
                {dictionary.trasciende.title.part2}</span> <br /> {dictionary.trasciende.title.part3}{" "}
              <span className="text-5xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">
                {dictionary.trasciende.title.part4}{""}
              </span>
              {dictionary.trasciende.title.part5}
            </h2>

            <p className="font-medium font-gotham text-xs/6 text-center mt-5 px-5 xl:mt-9 xl:mb-30 sm:text-md/6 xl:text-base/6">
              {dictionary.trasciende.subtitlePart1}<br />
              {dictionary.trasciende.subtitlePart2}
            </p>

            <ImagesCard homeSection={homeSection} />

            <div className="flex flex-col gap-20 w-full mt-15 mb-25 xl:mt-25 xl:mb-40">
              <div className="flex flex-wrap items-center justify-center gap-15 w-full xl:gap-40">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-theseason-italic font-medium text-4xl mb-10 text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl xl:text-left">
                    {dictionary.sabores.title.part1} <br /> {dictionary.sabores.title.part2} <span className="text-4xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl xl:text-left">{dictionary.sabores.title.part3}</span>
                  </h3>
                  <p className="font-medium font-gotham text-xs/6 text-center mb-7 px-5 sm:text-md/6 xl:text-base/6 xl:text-left">
                    {dictionary.sabores.subtitlePart1} <br className="hidden sm:block" />
                    {dictionary.sabores.subtitlePart2} <br className="hidden sm:block" />
                    {dictionary.sabores.subtitlePart3} <br className="hidden sm:block" />
                    {dictionary.sabores.subtitlePart4}
                  </p>
                  <Button color="dark" url={buttonsLinks.descubrirMas}>{dictionary.sabores.buttons.descubreMas}</Button>
                </div>
                <Image src="/IMG_Sabores y Aroma.png" alt="Plato de gastronomía fusión en 7 Cielos" className="w-70 h-auto sm:w-90" width={500} height={500} />
              </div>
              <div className="flex flex-wrap flex-col-reverse justify-center items-center gap-20 xl:flex-row">
                <Image src="/IMG_Vibra y Ritmo.png" alt="Dj en vivo y ambiente de fiesta en rooftop Cartagena" className="w-70 h-auto sm:w-90" width={500} height={500} />
                <div className="flex flex-col items-center gap-10 xl:items-end">
                  <h3 className="font-theseason-italic font-medium text-5xl text-center sm:text-6xl md:text-7xl xl:text-8xl xl:text-right">
                    {dictionary.vibra.title.part1} <br />{dictionary.vibra.title.part2}
                  </h3>
                  <p className="font-medium font-gotham text-xs/6 text-center  sm:text-md/6 xl:text-base/6 xl:text-right">
                    {dictionary.vibra.subtitlePart1} <br />
                    {dictionary.vibra.subtitlePart2} <br />
                    {dictionary.vibra.subtitlePart3}<br />
                    {dictionary.vibra.subtitlePart4}
                  </p>
                  <Button color="dark" url={buttonsLinks.reservarEvento}>{dictionary.vibra.buttons.reservaEvento}</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background w-full">
            <h2 className="font-theseason-italic font-medium text-5xl text-center mb-10 px-5 xl:text-8xl">
              {dictionary.reservar.title}
            </h2>
            <p className="font-medium font-gotham text-xs/6 text-center mb-7 px-5 sm:text-md/6 xl:text-base/6">
              {dictionary.reservar.subtitle}
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button color="dark" url={buttonsLinks.reservarAhora}>{dictionary.reservar.buttons.reservarAhora}</Button>
              <Button color="light" url={buttonsLinks.contactoWhatsapp}>{dictionary.reservar.buttons.whatsapp}</Button>
            </div>
          </div>
        </section>

        <section id="menu" className="flex flex-col items-center justify-center w-full gap-20">
          <div className="flex flex-col gap-10 h-full w-full relative pt-30">
            <Image src="/Menu_Principal.png" alt="Menu" fill={true} className='object-cover -z-10 absolute bg-background' />
            <h2 className="font-theseason-italic font-medium text-4xl text-center px-5 sm:text-6xl md:text-7xl xl:text-8xl">
              {dictionary.menu.title.part1}<span className="text-4xl text-primary font-medium font-theseason-italic sm:text-6xl md:text-7xl xl:text-8xl">{dictionary.menu.title.part2}</span> <br />
              <span className="font-medium font-theseason text-4xl text-center mb-7 sm:text-6xl md:text-7xl xl:text-8xl">{dictionary.menu.title.part3}</span>
            </h2>
            <p className="font-medium font-gotham text-xs/6  text-center px-4 sm:text-md/6 xl:text-base/6">
              {dictionary.menu.subtitlePart1}<br />
              {dictionary.menu.subtitlePart2}
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
            {dictionary.ubicacion.title.part1}<br />
            {dictionary.ubicacion.title.part2}<span className="text-4xl text-primary font-medium font-theseason-italic px-5 sm:text-7xl">{dictionary.ubicacion.title.part3}</span>
            {dictionary.ubicacion.title.part4}
          </h2>
          <p className="font-medium font-gotham text-xs/6 text-center mb-7 px-5 sm:text-base/6">
            {dictionary.ubicacion.subtitle}
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
              <p className="font-medium font-gotham text-xs/6 text-primary sm:text-base/6">{dictionary.ubicacion.info.direccionLabel}</p>
              <p className="font-medium font-gotham text-xs/6 sm:text-base/6">
                {dictionary.ubicacion.info.direccionText1}<br />
                {dictionary.ubicacion.info.direccionText2}
              </p>

              <p className="font-medium font-gotham text-xs/6 text-primary sm:text-base/6 mt-7">{dictionary.ubicacion.info.horarioLabel}</p>
              <p className="font-medium font-gotham text-xs/6 sm:text-base/6">
                {dictionary.ubicacion.info.horarioText1} <br />
                {dictionary.ubicacion.info.horarioText2}
              </p>
            </div>

          </div>
        </section>
        <section id="contacto" className="flex flex-col items-center justify-center w-full pt-5 sm:pt-20 bg-background">
          <div className="flex flex-wrap items-center justify-center sm:flex-nowrap">
            <div className="flex flex-nowrap items-center">
              <span className="w-13 h-0 border-primary border-1"></span>
              <h2 className="font-theseason-italic font-medium text-5xl text-justify px-5 sm:text-7xl">
                {dictionary.contacto.title}
              </h2>
            </div>
            <p className="font-medium font-gotham text-[10px]/6 text-center mb-7 px-5 sm:text-xs/6 sm:text-left">
              <span className="text-primary">{dictionary.contacto.subtitle.highlight} <br /> {dictionary.contacto.subtitle.highlight2}</span> {dictionary.contacto.subtitle.normal} <br /> {dictionary.contacto.subtitle.normal2}
            </p>
          </div>
          <Form />
          <div className="w-full bg-background-secondary pt-20 sm:pt-25">
            <div className="flex flex-wrap items-center justify-center lg :flex-nowrap gap-2 lg:gap-5">
              <span className="w-5 h-0 border-primary border-1"></span>
              <h3 className="font-theseason-italic font-medium text-5xl text-center px-5 sm:text-7xl">
                {dictionary.contacto.infoDirecta}
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
                <span>{buttonsLinks.contactoEmail.toUpperCase()}</span>
              </div>
            </div>
            <div className="flex w-auto flex-wrap justify-center items-center gap-3 font-gotham text-base pt-20 sm:text-xl">
              <div className="flex w-auto items-center gap-2 lg:gap-5">
                <span className="w-5 h-0 border-primary border-1 lg:w-13"></span>
                <h3 className="font-theseason-italic font-medium text-5xl text-center px-5 sm:text-7xl">
                  {dictionary.contacto.siguenos}
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
              {dictionary.politicas.title.part1} <br />
              {dictionary.politicas.title.part2}
            </h2>
          </div>
          <ul className="flex flex-col gap-7">
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              {dictionary.politicas.items["1"].text1} <br />
              {dictionary.politicas.items["1"].text2} <br />
              {dictionary.politicas.items["1"].text3} </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>{dictionary.politicas.items["2"].bold}</b>{dictionary.politicas.items["2"].text1} <br />
              {dictionary.politicas.items["2"].text2}
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>{dictionary.politicas.items["3"].bold}</b>{dictionary.politicas.items["3"].text}
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>{dictionary.politicas.items["4"].bold}</b>{dictionary.politicas.items["4"].text}
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6 ">
              <b>{dictionary.politicas.items["5"].bold}</b>{dictionary.politicas.items["5"].text}
            </li>
            <li className="text-gotham text-medium text-xs/6 sm:text-base/6">
              <b>{dictionary.politicas.items["6"].bold}</b>{dictionary.politicas.items["6"].text}
            </li>
          </ul>

        </section>
      </main>
      <Footer />
    </div>

  );
}

