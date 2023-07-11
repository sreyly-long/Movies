import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
           
                <footer className=" footer py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className=" text nav-link px-2 ">Now Showing</a></li>
                        <li className="nav-item"><a href="#" className=" text nav-link px-2 ">Coming Soon</a></li>
                        <li className="nav-item"><a href="#" className=" text nav-link px-2 ">Popular</a></li>
                        <li className="nav-item"><a href="#" className=" text nav-link px-2 ">Top Rate</a></li>
                        <li className="nav-item"><a href="#" className=" text nav-link px-2 ">Contact</a></li>
                    </ul>
                    <p className=" text text-center ">© 2023 Company, Inc</p>
                   
                </footer>
           
        </>




    )
}
export default Footer;