
const header = () => {
    return `<div class="container-fluid">
        <nav class="navbar header backdrop-blur fixed-top navbar-expand-lg p-2 p-sm-0">
            <a class="navbar-brand text_logo" data-navigo href="/">Laxus</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa-solid fa-bars-staggered"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" data-navigo href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" data-navigo href="/contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-uppercase" data-navigo href="/projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white bg-dark rounded text-uppercase" data-navigo href="/signin">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>`
}

export default header
