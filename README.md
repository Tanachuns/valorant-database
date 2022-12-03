# valorant-database

![Screen Shot](https://github.com/Tanachuns/valorant-database/blob/main/screenshot.gif?raw=true)

## Project Description

Valorant Database Website

## Project Links

- [github repo](https://github.com/Tanachuns/valorant-database)

- [deployment](https://tanalorant.netlify.app/home)

## Wireframes

Home.js
![Home.js](https://github.com/Tanachuns/valorant-database/blob/main/Proposal/App.png?raw=true)
Menu.js
![Menu.js](https://github.com/Tanachuns/valorant-database/blob/main/Proposal/Menu.png?raw=true)
GameModes.js
![GameModes.js](https://github.com/Tanachuns/valorant-database/blob/main/Proposal/GameModes.png?raw=true)
Weapons.js
![Weapons.js](https://github.com/Tanachuns/valorant-database/blob/main/Proposal/Weapons.png?raw=true)
Maps.js
![Maps.js](https://github.com/Tanachuns/valorant-database/blob/main/Proposal/Maps.png?raw=true)
Agent.js
![Agent.js](https://github.com/Tanachuns/valorant-database/blob/main/Proposal/Agents.png?raw=true)

**React Architecture**

     App.js
    	|- Home.js
        	|- Menu
        |- GameModes.js
        |- Agent.js
    	    |- AgentButton.js
    	    |- AgentDetail.js
    		    |- AgentAbility.js
        |- Weapons.js
    	    |- WeaponList.js
    	    |- WeaponBox.js
        |- Maps.js
        |- Loading.js

### MVP/PostMVP

#### MVP

- [x] User can visit website(Home page).
- [x] User can go to GameModes page with React Router.
- [x] User can go to Weapons page with React Router.
- [x] User can go to Maps page with React Router.
- [x] User can go to Agents page with React Router.

#### PostMVP

- [x] User see Loading Screen While API is Loading.

## Components

| App | This Component has a Navbar, React Routes and Footer that has Link. |
| Home | This Component has a Hot deal bundle image and a Menu. |
| GameModes | This Component show Game Modes List with name and average duration. |
| Agent | This Component has a List of Agent(Character) and show the detail. |
| Weapons | This Component has Weapons boxes by type of it and show the price when mouse over it. |
| Maps | This Component has a Maps List in Carousel |
| Loading | This Component show while API is loading. |

## Additional Libraries

- React-Router-Dom
- Axios
- [CSS-Tooltip](http://www.menucool.com/tooltip/css-tooltip)
- [React-Responsive-Carousel](https://react-responsive-carousel.js.org/)

## Code Snippet

**Loading Screen**
Component.js

```
const [isLoading, setIsLoading] =  React.useState(true);

useEffect(()=>{
	axios.get(url).then(//setState).then(()=>{
	setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	})
},[]}

if (isLoading) {
	return  <Loading  />;
} else {
	return <Component />;
}
```
