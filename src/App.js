import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = '/api/HttpTrigger1'; //Azure API endpoints are available through the api route.

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {
    //just loads at load time, once, based on current array dependency
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error('Did not receive expected data'); /*normally .ok returns true if between 200-299 range. 'throw' generates a exception defined by the user as an expression, e.g. constructed Error object with specified message*/
        const listItems = await response.json(); //converts response promise to javascript object        
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        // When an error occurs, an error object is passed as an argument e.g. (err) with 2 x properties: name,  message:
        setFetchError(err.message);          
      } finally {
        setisLoading(false); //sets loading bart to false after everything has completed
      }
    }
    fetchItems(); 
  }, []) //[] array dependency - blank means it will only runs first render. Subsequent changes managed in state. If props/state value are included in array dependency, 1) will run first render; and 2) any time dependency value changes

  return (
    <div>
      <Header />
      <main>
        {!fetchError && !isLoading && <Content 
          items={items}
        /> /*if no fetch error, and no longer loading, the Content component will show. items props to be updated with search filter*/}
      </main>
      <Footer />
    </div>
  );

}

export default App;
