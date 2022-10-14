import { render, screen } from '@testing-library/react';
import Greet from './Greet'
test("render component without name",()=>{
   render(<Greet />);
   const linkElement=screen.getByText("Hello");
   expect(linkElement).toBeInTheDocument();
})

test("render component with name",()=>{
    render(<Greet name="Piyush" />);
    const linkElement = screen.getByText("Hello Piyush");
    expect(linkElement).toBeInTheDocument();
 })