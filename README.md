# Angular App Template

A modern, best-practice Angular 21+ template featuring standalone components, Angular signals, strict typing, and Material theming. This project demonstrates clean architecture, modularity, and robust state management.

## Features
- Standalone Angular components
- Angular signals for state management
- Strict TypeScript typing
- Material 3 theming and dark mode
- Accessible forms and navigation
- Modular SCSS and clean architecture

## Prerequisites
- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

## Screenshots

**Home page with navigation and welcome message**

![Home page](/readme/angular-template-01-home.png)


**HTTP demo section with GET and POST buttons**

![HTTP section](/readme/angular-template-02-http.png)


**HTTP GET request in progress, showing loading state**

![HTTP GET request](/readme/angular-template-03-http-get.png)


**HTTP POST request with response displayed**

![HTTP POST request](/readme/angular-template-04-http-post.png)


**Login form with validation and accessibility features**

![Login form](/readme/angular-template-05-login.png)


**Login form showing saved data from local storage**

![Login with local storage](/readme/angular-template-06-login-local-storage.png)


**Angular Demo: Observable vs BehaviorSubject comparison**

![Angular Demo main](/readme/angular-template-07-demo.png)


**BehaviorSubject: new subscribers get the latest value immediately**

![BehaviorSubject demo](/readme/angular-template-08-demo-behavior-subject.png)


**Observable: new subscribers get no value until next emit**

![Observable demo](/readme/angular-template-09-demo-observable.png)

## Getting Started

To build and run the project:

```sh
ng build; if ($?) { ng serve }
```

## Architecture

### Components

#### Angular Frontend

- **AppComponent**
	- Root component, sets up layout and routing
	- `app.ts`, `app.html`
- **NavbarComponent**
	- Top navigation bar with active link highlighting
	- `navbar/navbar.component.ts`, `.html`, `.scss`
- **HomeComponent**
	- Welcome page, simple and stateless
	- `home/home.component.ts`, `.html`, `.scss`
- **HttpComponent**
	- Demonstrates HTTP GET/POST with Angular signals, loading, and error states
	- `http/http.component.ts`, `.html`, `.scss`
- **LoginComponent**
	- Accessible login form with validation and local storage
	- `login/login.component.ts`, `.html`, `.scss`
- **AngularDemoComponent**
	- Observable vs BehaviorSubject demo with Angular signals
	- `angular-demo/angular-demo.component.ts`, `.html`, `.scss`
- **HttpService**
	- Handles HTTP requests and API typing
	- `services/http.service.ts`


### Data Flows

#### Navbar Active Link Highlighting
1. `User` navigates to a route using the navbar.
2. `NavbarComponent` uses `Angular Router` to determine the active route.
3. `NavbarComponent` visually highlights the active link.

#### HTTP GET/POST Flow
1. `User` clicks GET or POST button in `HttpComponent`.
2. `HttpComponent` calls the corresponding method in `HttpService`.
3. `HttpService` sends the HTTP request and returns an Observable.
4. `HttpComponent` updates its signals (loading, response, error) based on the result.
5. `HttpComponent` updates the UI to display loading, error, or response data.

#### Login Form Data Persistence
1. `User` fills out and submits the login form in `LoginComponent`.
2. `LoginComponent` validates the form and saves data to `local storage`.
3. On load, `LoginComponent` retrieves saved data from `local storage` and populates the form.

#### Angular Demo: Observable vs BehaviorSubject
1. `User` interacts with the shared counter or subscription buttons in `AngularDemoComponent`.
2. `AngularDemoComponent` updates the counter value and emits to both `Observable` and `BehaviorSubject`.
3. `Observable` subscribers receive new values only on next emit.
4. `BehaviorSubject` subscribers receive the latest value immediately upon subscription.
5. `AngularDemoComponent` updates the UI to reflect the current state of each subscription.

#### App Layout and Routing
1. `AppComponent` sets up the main layout and router outlet.
2. `User` navigation triggers route changes.
3. `Angular Router` displays the appropriate feature component in the main content area.

---

## License
MIT

---

This template is designed for clarity, maintainability, and modern Angular best practices. Feel free to use it as a starting point for your own projects!
