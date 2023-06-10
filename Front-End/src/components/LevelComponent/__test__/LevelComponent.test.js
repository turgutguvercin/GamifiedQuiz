import {render, screen} from '@testing-library/react';
import LevelComponent from '../LevelComponent';
import logo from '../../../assets/images/logo.png';

describe("test levecomponent", () =>{
    test('should render levelcomponent and test text props', async () => {
        render(<LevelComponent text="test level component"/>);
        const aElementText = screen.getByText(/test level component/i);
        expect(aElementText).toBeInTheDocument(); 
    })
    
    test('should render levelcomponent and test image props', async () => {
        render(<LevelComponent img='../../assets/images/logo.png'/>);
        const aElementImg = screen.getByRole('img');
        expect(aElementImg).toHaveAttribute('src','../../assets/images/logo.png'); 
    })
    
    test('should render levelcomponent and test class props', async () => {
        render(<LevelComponent className='disabled'/>);
        const logo = screen.getByRole('link');
        expect(logo).toHaveAttribute('class','disabled'); 
    })
})
