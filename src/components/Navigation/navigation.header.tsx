
import "./navigation.style.scss";

const secondryItems = [{id:1,name:'Electronics',key:"electronics"},
{id:2,name:'amazonBasics',key:"Amazon Basics"},
{id:3,name:'amazonSports',key:"Sports Fitness & Outdoor"},
{id:4,name:'bestSeller',key:"Best Sellers"},
{id:5,name:'mobiles',key:"Mobiles"},
{id:6,name:'giftCard',key:"Gift Cards"},
{id:7,name:'AmazonBusiness',key:"Amazon Business"},
{id:7,name:'Amazonpay',key:"Amazon Pay"},
{id:8,name:'Amazonpay',key:"Amazon Kindle"},
{id:9,name:'user',key:"Mayank's Amazon.in"},
{id:9,name:'petSupplies',key:"Pet Supplies"},
{id:9,name:'app-Download',key:"Shopping made Easy | Download the App"},
]
const NavigationHeader = () => {
return (
    <div>
    <ul className="header-navigation-menu">
    <li className="navigation-item logo"> &nbsp;</li>
    <li className="navigation-item">
        <ul className="no-style-ul row">
        <li>
            <span className="location-icon">&nbsp;</span>
        </li>
        <li>
            <ul className="no-style-ul">
        <li className="user-deliver-name">Deliver to Mayank</li>
        <li className="user-address">Sanchi,464661</li>
            </ul>
        </li>
        </ul>
    </li>
    <li className="navigation-item">
        <div>
        <select name="category" className="input-size select-box">
            <option value="all">All</option>
            <option value="alex">Alexa</option>
            <option value="kindle">Kindle</option>
        </select>
        <input
            list="browsers" name="browsers" id="browser"
            className="search-bar input-size"
        />
<datalist id="browsers" className="datalist-search" >
    <option value="Edge" />
    <option value="Firefox" />
    <option value="Chrome" />
    <option value="Opera" />
    <option value="Safari" />
</datalist> 
    
        <input className="input-size search-btn" type="button" value="&nbsp;" />
        </div>
    </li>
    <li className="navigation-item">
        <select  className="no-style-select"  id="language">
            <option   value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
        </select>
    </li>
    <li className="navigation-item">
    <ul className="no-style-ul">
        <li className="user-deliver-name">Hello, Mayank</li>
        <li className="user-address">Account & List</li>
            </ul>
    </li>
    <li className="navigation-item">
    <ul className="no-style-ul">
        <li className="user-deliver-name">Return</li>
        <li className="user-address">& Order</li>
            </ul>
    </li>
    <li className="navigation-item"><ul className="no-style-ul flex">
        <li className="cart">&nbsp;</li>
        <li className="cart-font">Cart</li>
            </ul></li>
    </ul>



    <ul className="header-navigation-menu sub-menu">
    {secondryItems.map(element=>{
        return  <li key={element.key} className={`navigation-sub-cat-item ${element.name}`}>
        {element.name==="app-Download" ? <ul className="no-style-ul flex" ><li className="app-Download-image">&nbsp; </li><li>{element.key}</li></ul> : element.key} 
    </li>
    })}
   
    </ul>
    </div>
);
};

export default NavigationHeader;
