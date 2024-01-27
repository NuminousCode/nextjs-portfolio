#  Next.Js Portfolio SPA (Single Page Application)

This portfolio application is developed using Next.js, combining the best practices of modern web development. It employs static site generation with Next.js's getStaticProps for swift loading times and enhanced performance. 

The integration of Contentful CMS delivers media content, including images, via a CDN, ensuring quick and efficient asset delivery. A contact form is seamlessly embedded into the site using EmailJS, facilitating direct communication without needing a backend server. 

The responsive design of the portfolio guarantees a smooth and engaging user experience on a variety of devices. Additionally, the application leverages Next.js's robust SEO features to improve the site's visibility on search engines. Designed with precision, the portfolio showcases professional skills and projects in a user-friendly interface.

Deployed on Cloudflare 

## Installation

### Prerequisites

* Node.js: Preferably the latest LTS version. 
* npm: Comes bundled with Node.js.
* Contentful Account
* Basic Understanding: Familiarity with Next.js, React, JavaScript (ES6+), Node.js.
* EmailJs account for form handling

### Clone the Repository

```bash
git clone https://github.com/NuminousCode/nextjs-portfolio.git
cd nextjs-portfolio
```
Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install 
```
## Environment Variables
```bash
ACCESS_TOKEN=your_access_token_here
SPACE_ID=your_space_id_here
NEXT_PUBLIC_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_PUBLIC_KEY=your_public_key_here
```
## Running the application
In Development
```bash
npm run dev
```
In Productino
```bash
npm run build
npm run start
```

## Usage

Open http://localhost:3000 with your browser to see the result.

## License

[MIT](https://choosealicense.com/licenses/mit/)