import React, {useState} from 'react';
import QrReader from 'react-qr-reader';
//import DetailInfo from './DetailInfo.js';
import Results from './Results.js';
const Home = () => {
    const [qrValue, setQrValue] = useState({});
    const [buttonPressed, setButtonPressed]= useState(false);
  
    //const hello = 'Hello World';
  
    const handleScan = (data) => {
      if (data) {
        setQrValue(JSON.parse(data));
   
        doSomethingWithCage(JSON.parse(data).CageId);
      }
    };
   
    const handleError = (error) => {
      console.log("Error: ", error);
    };
   
    const doSomethingWithCage = (cageId) => {
      alert("I did something with cage: " + cageId);
      
    };
    const [state, setState] = useState({data:""}) 
    const changeState = () => {   
      setState({data: qrValue.CageId});  
     };  
     function buttonTest(){
         //console.log('button pressed');
         setButtonPressed(true);
     }
     
     //{data: qrValue.CageId}
     //{studyID: 1, CageID:1}

     




    console.log(state)
    return (
      <>
      <button onClick={buttonTest}>Open Scanner</button>
      {buttonPressed ?  (<QrReader
          delay={500}
          onScan={handleScan}
          onError={handleError}
          style={{width:'50%', height:'50%'}}
          ></QrReader>) : (null)}
       <p>{JSON.stringify(qrValue)}</p>
          <Results data1={qrValue} />  
        <p>CageId: {qrValue.CageId}</p>
      {/*   <DetailInfo data={qrValue.CageId}/> */}
        <button  onClick={changeState} type="button"> 
                    Send state  
                    {/* {console.log(state)} */}
        </button>                 
    </>
    )
  }
  
  export default Home;
