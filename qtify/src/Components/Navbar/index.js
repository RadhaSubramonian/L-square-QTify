import Button from "../Button"
import SearchBox from "../SearchBox"
import './Navbar.css'


export default ({data}) => {
    return (
    <div className="navbar">
        <img src="logo.png" width={67} height={34}/>
        <SearchBox data={data}/>
        <Button>Give feedback</Button>

    </div> 
    )
}