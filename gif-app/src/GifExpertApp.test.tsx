import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GifExpertApp from './GifExpertApp';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom'
describe('GifExpertApp', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
      });
    it('should add a category if doesnt exist',  () => {
        const onAddCategory = jest.fn()
        render(<GifExpertApp/>)
        const form = screen.getByRole('form')
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target : { value : "Hola"}})
        fireEvent.submit(form)
        expect(screen.getByText('Hola')).toBeInTheDocument()
    })
    it('should add a category just one time',  () => {
        render(<GifExpertApp/>)
        const form = screen.getByRole('form')
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target : { value : "Hola"}})
        fireEvent.submit(form)
        fireEvent.input(input, { target : { value : "Hola"}})
        fireEvent.submit(form)
        expect((screen.getAllByText('Hola')).length).toBe(1)
    })
})