function MenuItem() {
    return <div  style={{
        display: 'flex',
        height:'120px',
        width:'100%',
        border:'2px solid blue',
    }}>
        <div style={{width: '120px',height:'100%'}}>
            <img src=""/>
        </div>
        
        <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',color:'#fff'}}>
            <p>Album Name</p>
            <p style={{
                fontSize:'8px'
            }}>as</p>
        </div>
        
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width: '200px',height:'100%',color:'white'}}>100 follows</div>
    
    </div>
}

export default ({data}) => {
 
    return <div style={{position:'absolute',
    width:'570px',
    maxHeight:'500px',
    border:'1px solid red',
    overflowY: 'auto',
    top:'60px',
    backgroundColor:'black'
}}>
{data.map(n => <MenuItem />)}
</div>

}