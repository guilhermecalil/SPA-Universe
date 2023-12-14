export class Router {
    routes = {}

    add(routeName, page, background) {
        this.routes[routeName] = { page, background };
        return this;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const { page, background } = this.routes[pathname] || this.routes[404];

        fetch(page)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#app").innerHTML = html;
                document.body.style.background = `url(${background}) center 15% no-repeat`;
                document.body.style.backgroundSize = 'cover';
            });
    }
}