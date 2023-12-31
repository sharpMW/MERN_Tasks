import React from "react";
import './App.css';

function App() {
    const [state, setState] = React.useState({
      wordCount: 0
    });
    
    const handleKeyPress = (e) => {
      const count = e.target.value;
      
      const countWords = (count) => {
        if (count.length === 0) {
          return 0;
        } else {
          count = count.replace(/(^\s*)|(\s*$)/gi,"");
          count = count.replace(/[ ]{2,}/gi," ");
          count = count.replace(/\n /,"\n");
          return count.split(' ').length; 
        }
      }
      
      setState({
        wordCount: countWords(count),
        charCount: count.length
      });
    }
    
    return(
      <div id='container'>
        <h1>Word Count: 
          <span className='num'> {state.wordCount}</span> 
        </h1>
        <textarea 
          placeholder='Type here'
          onChange={handleKeyPress}
        >    
        </textarea>
      </div>
    );
  }

export default App;