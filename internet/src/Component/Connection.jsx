import {useState} from 'react'

const Connection =() => {
    const [item, setitem] = useState ('')   
    const url = 'http://localhost:5300/submit'

    const submitIt = ()=>{
        if (item === ''){
            alert("fill in the missing value")
        }else {
            let obj= {item}
            axios.post(url, obj)
            .then (res=> console.log('sent'))
            .catch(err =>console.log(err))
        }
    }
    
return (
    <>
    <div className='keeper'>
    <p>Input  your home address</p>
    <input type="text" placeholder='Enter your address' value={item}  onChange={(e) =>setitem(e.target.value)}/>    
    <input type="number" placeholder='Enter your Phone Number' value={item} onChange={(e) =>setitem(e.target.value)}/>
    <img src="./" alt=""/>
    <button onClick={submitIt}>Submit It</button>
    </div>
    </>
)
}
export default Connection