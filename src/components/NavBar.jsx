import './navbar.css'

const NavBar = () => {
    return (
        <div>
            <nav id='nav-bar'>

                <div id="menuToggle" className='nav-bar-to-left'>
                    <input type="checkbox" />

                    <div className='hamburguer-container'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>


                    <ul id="menu">
                        <input type="checkbox" id='menuToggle' />
                        <label htmlFor="menuToggle" id='menuToggleLabel'>

                        </label>
                        <span id='exit-menu'>X</span>
                        <a href="#"><li>Search</li></a>
                        <a href="#"><li>Blog</li></a>
                        <a href="#"><li>Profile</li></a>
                        <a id='shopping-bag' href="#"><li>Shopping Bag</li></a>
                        <span id='side-menu-line'></span>
                        <a href="#"><li>Skate</li></a>
                        <a href="#"><li>Clothes</li></a>
                        <a href="#"><li>Reissues</li></a>
                        <a href="#"><li>Brands</li></a>

                    </ul>

                </div>
                <img id='nav-bar-logo' src="../img/_Logo/Size = S, Variant = Small.png" alt="" />

                <div className='nav-bar-to-right'>

                    <img src="../img/_Icons/Size =  M, Color = White,  Icon  = Search.png" alt="" />
                    <img src="../img/_Icons/Size = M, Color = White, Icon = Profile.png" alt="" />
                    <img src="../img/_Icons/Size = M, Color = White, Icon = Cart.png" alt="" />
                    <h3 id='nav-lang'>EN</h3>
                    <img src="../img/_Icons/Size = S, Color = White, Icon = ChevronDown.png" alt="" />

                </div>

            </nav>
        </div>

    )
}
export default NavBar;