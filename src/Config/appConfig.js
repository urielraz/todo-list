class AppConfig {

    // baseUrl = 'https://jsonplaceholder.typicode.com';
    baseUrl = 'http://localhost:3004';
    todos = this.baseUrl + '/todos/';
    users = this.baseUrl + '/users/';
    posts = this.baseUrl + '/posts/';
    products = this.baseUrl + '/products/';
}

const appConfig = new AppConfig();

export default appConfig;