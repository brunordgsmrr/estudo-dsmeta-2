import logo from "../../assets/img/logo.svg";
import "./style.css";

function Header() {
	return (
		<>
			<header>
				<div className="dsmeta-logo-container">
					<img src={logo} alt="Logo do DSmeta" />
					<h1>DSMeta</h1>
					<p>
						Desenvolvido por
						<a href="https://www.instagram.com/brunordgsmrr">@brunordgsmrr</a>
					</p>
				</div>
			</header>
		</>
	);
}

export default Header;
