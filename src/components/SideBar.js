import Link from "./Link";

function SideBar (){

    const links = [
        {label:"dropdown", path:"/"},
        {label: "accordion",path:'/accordion'},
        {label: "button", path:"/button"},
        {label: "modal",path:"/modal"},
        {label: "table",path:"/table"},
        {label: "counter", path:"/counter"}
        
    ];

    const renderedLinks = links.map((link)=>{
        return <Link 
        key = {link.label} 
        to={link.path} 
        className="mb-3" 
        activeClassName="font-bold border-l-4 border-blue-500 pl-2">
            {link.label}
        </Link>

    });


    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
            
        </div>
    );

}
export default SideBar;