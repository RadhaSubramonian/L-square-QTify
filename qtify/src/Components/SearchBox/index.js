import {ReactComponent as SearchIcon} from './search.svg';
import Menu from '../Menu';
import { useState } from 'react';

export default ({data}) => {
    console.log("navdata",data)
    const [userInput,setUserInput] = useState(" ");
    console.log("userInput",userInput)

   
    return (
        <div style={{position:'relative'}}>
        <form style={{display:'flex',
                minWidth:'570px'}}>
            <input 
                placeholder ='Search an album of your choice'
                style={{
                    flex :1,
                    padding:'8px',
                    borderRadius:'8px 0px 0px 8px',
                }}
                onChange={(e)=>{setUserInput(e.target.value)}}
                
            />
            <button style={{width: '66px',
                        height:'48px',
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius:'0px 8px 8px 0px',
                        padding: '8px',
                        }}>
                <SearchIcon width={20} height ={20}/>
            </button>
        </form>
       
        <Menu data={data.filter(data => console.log(data))}/> 
        </div>
    )
}