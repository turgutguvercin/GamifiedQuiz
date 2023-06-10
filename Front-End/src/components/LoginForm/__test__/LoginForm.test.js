import {render, screen} from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import LoginForm from '../LoginForm';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
const MockLoginForm = () => {
return(
<BrowserRouter>
<LoginForm />
</BrowserRouter>
);
}

describe("test login form component", () =>{

test('should render input element correctly', async () => {
    render(<MockLoginForm />);
    const inputElement = screen.getByTestId('test-input-email');
    userEvent.type(inputElement, "test@mail.com");
    expect(inputElement).toHaveValue("test@mail.com"); 
})

test('should submit input element correctly', async () => {
    render(<MockLoginForm />);
    const inputElementEmail = screen.getByTestId('test-input-email');
    userEvent.type(inputElementEmail, "test@mail.com");
    const inputElementPassword = screen.getByTestId('test-input-password');
    userEvent.type(inputElementPassword, "testpassword");
    userEvent.click(screen.getByTestId('test-input-button', {name: /submit/i}))

})
})


it('renders correctly', () => {
  const tree = renderer
    .create(<MockLoginForm/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});