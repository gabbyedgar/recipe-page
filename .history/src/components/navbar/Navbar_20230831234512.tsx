export const Navbar = () => {
  return (
    <>
        <header className="flex justify-around w-full bg-primary text-secondary  py-3 border-b-2 mb-8  ">
        <a href="/" target="_blank" className="font-montserrat  text-lg">
            My Recipe
        </a>
        
        <nav className="flex justify-between items-center max-container">
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden`}
        >
            <li>
              <a
                href="/"
                className="font-montserrat  text-lg border-b-[2px] hover:border-b-coral-red hover:border-b-[2px] "
              >
                Favorite
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-montserrat  text-lg hover:border-b-coral-red hover:border-b-[2px] "
              >
                Recipies
                
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-montserrat  text-lg hover:border-b-coral-red hover:border-b-[2px] "
              >
                
                About
              </a>
            </li>
        </ul>
        </nav>

    </header>
    </>
  )
}
