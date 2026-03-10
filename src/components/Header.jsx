function Header(){
    return(
        <Header className="bg-sky-300 text-shadow-amber-100 py-6 text-center text-sm">
            MyApp
            <Link to="/" className=" text-sky-500 hover:text-black">Inicio</Link>
            <Link to="/"  className=" text-sky-500 hover:text-black">Sobre</Link>
            <Link to="/"  className=" text-sky-500 hover:text-black">Contato</Link>
            
        </Header>
    )

}