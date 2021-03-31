# This is the customer view for the [Jacks Auto Sales Website](https://jacksautosalesmd.com).

This project was developed using NextJS and leverages the Material-UI library as well as many custom built CSS components to create a fast, mobile responsive website for browsing the inventory selection for a mid sized auto dealership.

Included within this repository is the Dockerfile and Caddy configuration file which were used in the deployment of this site using Docker containerization.

This webapp employs the Caddy webserver to reverse proxy between the site's admin view and its public view.

The site is deployed on a Virtual Private Server and interacts with the Firebase API to serve as its database and image host.

Notable features:

 - Mobile-Responsive Share components
   - If you visit the inventory page at [www.JacksAutoSalesMD.com/inventory](https://jacksautosales.com), you'll notice a share icon. On a mobile browser, clicking this icon will launch the Web Share API, a broadly supported browser API that prompts the user to share a protected SSL link with other apps on their device. This allows the mobile user to share the link via text, messaging app, email, or the social media application of their choosing.
   - If you visit the inventory page on a desktop browser, you'll notice the same icon, but here it serves a different function. Because the webshare API has poor support on desktop browsers, users are instead met with a popup prompt which allows them to share the link in more traditional methods:
     - They may share the link through facebook, using a Facebook link.
     - They may share the link through their native desktop email client.
     - Or, they may choose to simply copy a link to the vehicle's profile.

- Responsive Nav Components and Location Navigation
  - The app makes full use of the Material UI suite of mobile-first components. When visiting the mobile version of the site, a bottom navigation menu allows users to choose between a home page, a link to the inventory page, and a Find Us button. 
  - This button performs a check on the device environment. If it detects that the mobile user is on an iPhone, it will launch the Apple Maps app with the business' address pre-programmed into the address bar. If it detects an Android environment, it will launch the native Google Maps app with the business' address pre-programmed.
  - Additionally, the mobile site features a persistent call icon, allowing for easy communication with the business for any inquiries regarding the inventory.

- Firebase API consumption
  - The app pulls data from the company's Firebase storage account, which in turn is managed by the custom-built React CMS hosted on the same server. The combination of Firebase storage and Server-Side rendering assures this site is fast, performant, and optimized for user experience.
