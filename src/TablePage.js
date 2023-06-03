import React, { useEffect, useState } from 'react';
import './styles.css';

const TablePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://coralmango.com/api/react-test')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSort = (property) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });

    setData(sortedData);
    setSortBy(property);
  };

  const handleSearch = (query) => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredResults);
    setSearchQuery(query);
  };

  return (
    <div className='yes'>
    <div className='table-container'>
      <h1 className='table-container h1'>Table</h1>
      {searchQuery && <p>Viewing filtered results for "{searchQuery}"</p>}
      <input className='table-container input'
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <table className='table-container table'>
        <thead>
          <tr>
            <th className='table-container th' onClick={() => handleSort('name')}>Name</th>
            <th className='table-container th' onClick={() => handleSort('age')}>Age</th>
            <th className='table-container th'>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className='table-container td'>{item.name}</td>
              <td className='table-container td'>{item.age}</td>
              <td className='table-container td'>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default TablePage;
