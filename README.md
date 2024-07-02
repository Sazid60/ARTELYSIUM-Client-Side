# B9 A10 Type-02

## ARTELYSIUM

### CATEGORY : Painting and Drawing

#### Website URL: [https://artelysium-client-b9a10.web.app/](https://artelysium-client-b9a10.web.app/)
#### Server-Side Repository: https://github.com/Sazid60/ARTELYSIUM-Server-Side

#### Overview:
ARTELYSIUM is all about arts & crafts. This website represents some fine artworks. User see added art works added by different persons. User can see categorized data. A person can create artwork selling card. Moreover he can see his added arts, as well as he can delete & update his art information. User can access private pages(add arts, My Arts, Art Details).This website is responsive for all devices and available for dark and light mode toggling. All data are stored in Database. 

### Features & Characteristics:

- Navbar: Navbar has active routes to navigate through pages. Displays User image & functional Logout button when logged in; otherwise, displays default blank user image, login and register button.

- Theme Control: Just Beside the Website Title Dark & Light Them Toggling Button Added. 

- Public Routes: User Can Access Home Page, All Art & Craft,Categorized Arts Login & Register Page.

- Private Routes: Allows navigation to Add Arts & Crafts, Update Arts & Crafts, My Arts & Crafts and Arts & Craft Details, After Successful Login/Register.

#####  Pages & Sections Specification: 

- Home Page: Contains Navbar, Banner(AutoPlay Images & Typewriter), Arts & Crafts, Art & Craft Categories, Events & Programs(Extra Section), Reviews(Extra Section) & Footer.

- Arts & Crafts Section : This Section Contains 6 Art Cards of Recently Added Cards From Database. And By Clicking The View Details Button User Can Go To The Art Details Page(Private Route)

- Art & Craft Categories Section : There are All The Subcategory(name showed middle of the images), By Clicking Each Subcategory Image/Name Will Take User to The Categorized Art Cards Sections.

- Events & Programs Section : This Section Shows Organized Events by Organization.

- Review Section : Represents Reviews of Clients.

- Register Page: Register with email, password, photo URL, or Google & GitHub. Validates Password (6 characters, 1 uppercase, 1 lowercase). Redirects post-registration to the desired or home page. (any error/success will show alert)

- Login Page: Login with email, password or Google & GitHub. Redirects to the desired or home page. (any error/success will show alert)

- All Arts & Crafts Page : This Page Shows All The Art Information Added By All Users In Table Format, Besides There is a View Details Button Which Allows User To Go To Specific Art Details(user must be logged in).

- All Arts & Crafts Page : This Page Shows All The Art Information Added By All Users In Table Format, Besides There is a View Details Button Which Allows User To Go To Specific Art Details(user must be logged in).

- Add Arts & Crafts Page : This Page Takes All Art Information and Adds Data to The Database Which Passes The Data to All The Pages. After Adding a Successful Modal Type Alert Is Shown.

- My Arts & Crafts Page : In This Page Data From Database Is Sorted By User Email Address and Shown In The Page. This Page Only Shows User Specific Added Data(Including Update & Delete Button). In The Top Of The Page Sort By Customize Option Added.

- Update Operation : Clicking The Update Button Redirects User to Update Page(Private Route) Which Allows User to Update Art Information.

- Delete Operation : This Button Allows To Delete Art Card, but It Asks for Confirmation. 


### NPM Packages Used:

1. [React-Simple-Typewriter](https://www.npmjs.com/package/react-simple-typewriter) : Applied In The Banner Section Which Shows All The Subcategories.
2. [React-Tooltip](https://react-tooltip.com/) : Used In Navbar Profile Image, When You hover Profile Image It Will Show User Name If Name Is Available.
3. [Swiper-slider](https://swiperjs.com/) : Applied In Home Page Banner Section Which Changes Images In Infinite Order.
4. [React-Sweet-Alert](https://sweetalert2.github.io/) : Applied On Successful Art Adding, Deleting a Product, Updating a Product. 
5. [React-Spinner](https://www.npmjs.com/package/react-spinners) : Added To Show Loading Sate.

### Instructiosn For Locally Running The Project :
- Clone The Repository " git clone <repository-url> "
- Install All The Dependecies " npm intall "
- Create a .env file in the root directory of the project and add the required fields.
- Customize .env variables according to your specific environment setup.
- Ensure Node.js and npm (or yarn) are installed on your system.
- For Further Guidence You Can Connect me and ask any queries.
