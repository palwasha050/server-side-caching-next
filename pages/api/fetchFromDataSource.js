const fetchFromDataSource = () => {
    const dateObject = new Date();
  
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString('en-us', { month: 'long' });
    const year = dateObject.getFullYear();
  
    return {
      message: "Hello, this is data from the data source!",
      timestamp: `${day} ${month} ${year}`
    };
  };
  
export default fetchFromDataSource;
  