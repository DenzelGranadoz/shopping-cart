# Shopping Cart
This is an [E-Commerce](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart) project from [The Odin Project](https://www.theodinproject.com)

## Demo
> - [Check me out!](https://denzelgranadoz.github.io/shopping-cart/)

## Screenshots
Home Page: <img width="1680" alt="image" src="https://user-images.githubusercontent.com/84443588/193397340-b948a45c-a357-4e09-a8e2-f9476196125c.png">
Menu Page: <img width="1680" alt="image" src="https://user-images.githubusercontent.com/84443588/193397347-f73cdbda-69fa-4e38-9ac3-288c3fd97465.png">
Cart Page(Responsive): <img width="382" alt="image" src="https://user-images.githubusercontent.com/84443588/193397375-10869918-110c-4873-abdf-df3b107f00ac.png">


## Built With
* React JS
* React-Router
* FakeStore API
* Redux
* CSS

## Getting Started
To get this project up and running locally, follow the steps below:

1. Clone repository:
   `git clone https://github.com/DenzelGranadoz/shopping-cart.git`

2. Change directory into the cloned repository:
   `cd shopping-cart`

3. Once you have cloned this project, you can install the required dependencies by using:
   `npm install`

4. Distribution files can be produced using:
   `npm run start`

## Features and Usage
* Responsive Design(Tablet and Phone Friendly)
* Navbar displays the number of Items inside the cart beside the Cart button
There are 3 pages
-* Homepage 
* Landing Page
-* Menu Page
* Products is fetched with FakeStore API
* Page is loaded before products has successfully been fetched, A fetching data... is rendered
* Each product cart has a add to cart button
* Product details from the FakeStore API is displayed in each card
-* Cart Page 
* Each product added to cart is displayed on this page
* Each product has an editable quantity
* A remove from cart button on each product
* A total number of Cart items is displayed
* Total amount to be paid is displayed
* When cart is empty, a "Proceed to Shop" button is rendered along with a "Cart is Empty" text

## Improvements
Features that can be added or improved on.
* Better UI Design.
* Each product can be selected to show more information about the product on the shop page.