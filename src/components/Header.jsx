import brandLogo from "../assets/images/logo.svg"

export const Header = () => {
	return (
		<header>
			<nav>
                <a href="/" className="logo">Allan F.</a>
                <ul className="nav-links">
                    <li><a href="">&#123; about</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">blog &#125;</a></li>
                </ul>
                    <a href="">&#123; resume &#125;</a>
            </nav>
		</header>
	);
};
