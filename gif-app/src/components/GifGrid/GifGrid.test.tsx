import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import GifGrid from './GifGrid';
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { IGifItem } from '../../interfaces/gifItem';

jest.mock('../../hooks/useFetchGifs')

describe('Gifgrid', () => {
    const gif = [{
        id : '123',
        title: '1234',
        url : 'https://mock.test'
    }]
    beforeEach(() => {
        fetchMock.resetMocks();
      });
    const category = 'pokemon'
    it('should show loading if isLoading is true', () => {
        (useFetchGifs as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true,
          })
        render(<GifGrid category={category}/>)
        screen.debug()
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
    it('should render images when data is loaded', () => {

        (useFetchGifs as jest.Mock).mockReturnValue({
            images: gif,
            isLoading: false,
          })

        render(<GifGrid category={category}/>)
        gif.forEach(element => {
            expect(screen.getByText(element.title)).toBeInTheDocument()
        });

    })
})