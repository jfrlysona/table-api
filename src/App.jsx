import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((response) => response.json())
      .then((data) => setSuppliers(data));
  }, []);

  return (
    
      <table className="rwd-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.companyName}</td>
              <td>{supplier.contactName}</td>
              <td>{supplier.contactTitle}</td>
              <td>
                {supplier.address.street}
              </td>
              <td>{supplier.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default App;
