import { render, screen, fireEvent } from '@testing-library/react';
import AddCategory from './add-category';
import '@testing-library/jest-dom'

describe('AddCategory', () => {
    const onNewCategory = () => {}
    const inputValue = 'Pokemon'

    it('should render an input and change its value', () =>{
        render(<AddCategory onNewCategory= {onNewCategory}/>)
        const input: HTMLInputElement = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
        fireEvent.input(input, { target: { value: inputValue}} )
        expect(input).toBeInstanceOf(HTMLInputElement);
        expect(input.value).toBe(inputValue)
    })
    it('should call onNewCategory on submit if input got more than 2 letters', () =>{
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory= {onNewCategory}/>)
        const input: HTMLInputElement = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue}} )
        fireEvent.submit(form)
        expect(input.value).toBe("")
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
    it('should not call onNewCategory if value is just 1 letter', () =>{
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory= {onNewCategory}/>)
        const input: HTMLInputElement = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'a'}} )
        fireEvent.submit(form)
        expect(onNewCategory).not.toHaveBeenCalled()
    })
})