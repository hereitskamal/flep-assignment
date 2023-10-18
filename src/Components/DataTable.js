import React, { useState } from "react";
import { Table, FormControl } from "react-bootstrap";
import './DataTable.css';
import TableData from "./DataTableData.json"

function DataTable() {
  //   const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const data = TableData;

  const filteredData = data.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="product-sell-header"><h3>Product sell</h3>
      <FormControl
        type="text"
        placeholder="Search"
        className="mb-3"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{height: "30px", border:"none",borderRadius:"5px"}}
      /></div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>
                <div style={{display:"flex"}}>
                <img
                  src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp"
                  alt="img is loading"
                  width="50"
                  height="50"
                />
                <div>
                <span style={{fontWeight:"700",fontFamily:"system-ui"}}>{item.productName}</span>
                <span style={{fontFamily:"system-ui",fontSize:"10px"}} >{item.description}</span>
                </div>
                </div>  
              </td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>{item.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;
