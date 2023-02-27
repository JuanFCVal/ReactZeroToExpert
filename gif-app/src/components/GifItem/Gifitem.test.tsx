import { render, screen } from '@testing-library/react';
import GifItem from './GifItem';
import '@testing-library/jest-dom'
describe('GifItem', () => {
    const gif = {
        id: '123',
        title: 'test',
        url: 'http://test.com'
    }
  it('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem gif= {gif}/>);
    expect(container).toMatchSnapshot();
  });
  it('Debe renderizar correctamente', () => {
    const { getByText, getByRole } = render(<GifItem gif= {gif}/>);
    expect(getByRole('img')).toHaveAttribute('src', gif.url);
    expect(getByText(gif.title)).toBeInTheDocument();
  });
});