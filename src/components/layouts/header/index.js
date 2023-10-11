import Nav from '@/src/components/layouts/header/navbar';
//npm install lodash
import { isEmpty } from 'lodash';

const Header = ({headerMenus}) => {

    if(isEmpty(headerMenus)){
        return null;
   }
    return (
        <header>
            <Nav headerMenus={headerMenus} />
        </header>
    )
}
export default Header;