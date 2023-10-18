import "./Sidebar.css";
import { FaUikit,
  FaCube,
  FaTh,
  FaUsers,
  FaCoins,
  FaGift,
  FaRegCommentAlt,
  FaAngleRight
} from "react-icons/fa";
import UserCard from './UserCard'; 

export default function Sidebar() {
  const user = {
    picture: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg', 
    name: 'John Doe',
    link: 'https://example.com/johndoe', 
    position:"Manager"
  };
  return (
    <body>
      <div class="container">
        <div class="sidebar">
          <div class="sidebar-title"><FaUikit/> DASHBOARD </div>
       
          <ul>
            <li>
              <a href="./"><FaTh/> Dashboard <FaAngleRight style={{float:'right'}}/></a>
            </li>
            <li class="dropdown">
              <a href="./"><FaCube/> Products <FaAngleRight style={{float:'right'}}/></a>
              <ul class="submenu">
                <li>
                  <a href="./">Submenu 22 </a>
                </li>
                <li>
                  <a href="./">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./"><FaUsers/> Customers <FaAngleRight style={{float:'right'}}/></a>
            </li>
            <li>
              <a href="./"><FaCoins/> Income <FaAngleRight style={{float:'right'}}/></a>
            </li>
            <li>
              <a href="./"><FaGift/> Promote <FaAngleRight style={{float:'right'}}/></a>
            </li>
            <li>
              <a href="./"><FaRegCommentAlt/> Help <FaAngleRight style={{float:'right'}}/></a>
            </li>
          </ul>
          <div className="sidebar-user">
              <UserCard user={user} />
          </div>
         <UserCard/>
        </div>
        </div>
    </body>
  );
}
