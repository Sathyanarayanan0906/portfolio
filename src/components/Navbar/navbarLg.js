import "./Navbar.css";
function NavbarLg() {
	return (
		<>
			{/* NAVBAR */}
			<nav className="navbar">
				<div className="navmain" id="navmain">
					
					<div id="shadow-border">
						<ul className="menu" id="toggle-menu">
							<li>
								<a href="#home" className="active">
									Home
								</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#skills">Skills</a>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavbarLg;
