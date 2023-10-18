import "./MainPage.css";
import React from "react";
import DonutChart from "./DNchart";
import VerticalBarChart from "./ColumnChart";
import Sidebar from "./Sidebar";
import DataTable from "./DataTable";

import { FaDollarSign
  ,FaRegListAlt
  ,FaHandHoldingUsd
  ,FaRegSmile
  ,FaShoppingBag 
} from "react-icons/fa";

export default function MainPage() {
  return (
    <body>
      <div class="container">
       <Sidebar/>
        <div className="body">

            <div className="navbar">
              <h4>Hello Shahrukh, <FaRegSmile/></h4>
            <input placeholder=" Search" type="text" />
          </div>

          <div class="content">

              <div class="container">

                {/* card 1 */}
                <div class="card">
                    <div className="card-icon">
                      <div class="icon earning"><FaHandHoldingUsd/></div>
                    </div>
                    <div className="info-text">
                      <p className="title">earning</p>
                      <h2>$198k</h2>
                      <div className="info"><p>33.7% ^</p><p> this month</p></div>
                    </div>
                </div>

                 {/* card 2 */}
                <div class="card">
                  <div className="card-icon">
                    <div class="icon orders"><FaRegListAlt/></div>
                  </div>
                  <div className="info-text">
                    <p className="title">Orders</p>
                    <h2>$2.4k</h2>
                    <p className="info"><p>2%</p> <p> this month</p></p>
                  </div>
                </div>

                {/* card 3 */}
                <div class="card">
                  <div className="card-icon">
                    <div class="icon balance"><FaDollarSign/></div>
                  </div>
                  <div className="info-text">
                    <p className="title">Balance</p>
                    <h2>&2.4k</h2>
                    <p className="info"><p>2%</p><p> this month</p></p>
                  </div>
                </div>
                
                {/* card 4 */}
                <div class="card">
                  <div className="card-icon">
                    <div class="icon sales"><FaShoppingBag/></div>
                  </div>
                  <div className="info-text">
                    <p className="title">Total Sales</p>
                    <h2>$89k</h2>
                    <p className="info"><p>11% ^</p><p> this week</p></p>
                  </div>
                </div>

              </div>
          </div>

          <div class="graphical-containt">

            <div class="overview-container graph">
                  <div className="bar-chart">
                      <VerticalBarChart />
                  </div>
                  <div class="overview-card">
                    <div>
                      <h3>OVERVIEW</h3>
                      <p>monthly earning</p>
                    </div>
                    <div>
                      <select>
                        <option value="option1">Quarterly</option>
                        <option value="option2">Monthly</option>
                        <option value="option3">Yearly</option>
                      </select>
                    </div>
                  </div>   
            </div>

            <div class="coustomer-container graph">
                <div class="coustomer-card">
                  <div className="donutchart">
                    <div>
                      <h3>CUSTOMER</h3>
                      <p>Customers that buys products</p>
                    </div>
                      <DonutChart />
                  </div>
                  <div className="customers-text">
                    <h4>jdncncb</h4>
                  </div>
                </div>
            </div>

          </div>

          <div className="product-sell-content">
            <div class="product-sell-container">
              <div class="sell-card">
                 <DataTable/>
              </div>
            </div>
          </div>

        </div>
      </div>

    </body>
    
  );
}
