import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';


const MockNavbar = ({login}) => {
return(
<BrowserRouter>
<Navbar login={login}/>
</BrowserRouter>
);
}

describe("test navbar", () =>{
test('should render navbar correctly', async () => {
    render(<MockNavbar login=" " />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument(); 
})

test('should navbar class works properly', async () => {
    render(<MockNavbar login="hide"/>);
    const aElementText = screen.getByText(/Log in/i);
    expect(aElementText).not.toBeVisible(); 
})
})
