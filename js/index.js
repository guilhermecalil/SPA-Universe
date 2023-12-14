import { Router } from './router.js';

const router = new Router();
router.add('/', "/pages/home.html", "../assets/mountains-universe-1.png");
router.add('/sobre', "/pages/sobre.html", "../assets/mountains-universe-2.png");
router.add('/exploracao', "/pages/exploracao.html", "../assets/mountains-universe-3.png");
router.add(404, "/pages/404.html", "../assets/planet.jpg");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();