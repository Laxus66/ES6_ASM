import Navigo from 'navigo';
function render(container, content) {
    content.innerHTML = container;
}
const router = new Navigo('/');

export { render, router }