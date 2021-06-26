import React from 'react'
import ReactToExcel from 'react-html-table-to-excel';

const TableExcel = () => {
    return (
        <div className="App" >
        <ReactToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export to Excel"/>

         <table border="1" id="table-to-xls">
          <thead>
              <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Age</th>
              </tr>
          </thead>
           <tbody>
             <tr>
                  <td>Rishav</td>
                  <td>Kumar</td>
                  <td>22</td>
              </tr>
              <tr>
                  <td>Bittu</td>
                  <td>Kumar</td>
                  <td>21</td>
              </tr>
              <tr>
                  <td>Chiku</td>
                  <td>Kumar</td>
                  <td>21</td>
              </tr>
           </tbody>
         </table>
            
        </div>
    )
}

export default TableExcel
