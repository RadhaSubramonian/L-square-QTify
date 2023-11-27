
import Carousel from "../Carousel"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './filterSection.css'
import { useState } from "react";

export default ({title, data,filters, executeFilter}) => {
    const [selectedTab, setSelectedTap] = useState(0);

    return (
        <div className='section'>
            <div> 
                <h1 className='title'>{title}</h1>
            </div>
            <Tabs 
            value={selectedTab}
            onChange={(e,value)=>{
                executeFilter(filters[value].key)
                setSelectedTap(value)}}
            TabIndicatorProps={{style:{
                backgroundColor:'var(--css-primary)'
            }}}
            >
            {filters.map(f => <Tab className="tab" key={f.key} label={f.label}/>)}   
        </Tabs>
        <Carousel data={data}/> 
        </div>
    )
}