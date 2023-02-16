import "./node_modules/bootstrap/dist/css/bootstrap.css"
import "./node_modules/bootstrap/dist/js/bootstrap.js"
const app = document.querySelector("#app")
import { router, render } from "./src/lib"
import about from "./src/pages/about"
import contact from "./src/pages/contact"
import home from "./src/pages/home"
import notFound from "./src/pages/notFound"
import work from "./src/pages/work"

router.on("/", () => render(home, app))
router.on("/about", () => render(about, app))
router.on("/contact", () => render(contact, app))
router.on("/work", () => render(work, app))
router.notFound(() => render(notFound, app))

router.resolve();