import {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../utils/useContext.tsx";
import {Item} from "../utils/types.ts";


interface Props {
    item : Item
}


const NavItem = ({item}: Props) => {
    const {hero} = useContext(UserContext);
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1"
                to={`${item.route}/${hero}`}>{item.title}</Link>
        </li>
    );
};

export default NavItem;