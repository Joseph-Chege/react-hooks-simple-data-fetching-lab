// create your App component here
import React, { useState, useEffect} from 'react'

function App() {
    const [isDog, setisDog] = useState('')
    const [isLoaded, setisLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setisDog(data.message);
            setisLoaded(true)
        });
    }, []);

    if (!isLoaded) return <p>Loading... </p>
    return (
       
    <div>
        <img
            key={isDog} 
            src={isDog} 
            alt= "A Random Dog"
        />
    </div>
  )
}

export default App;
