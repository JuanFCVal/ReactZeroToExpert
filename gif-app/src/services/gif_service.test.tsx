import { getGifs } from "./gif_service";
import fetchMock from 'jest-fetch-mock';
// jest.mock('node-fetch')
describe('GifService', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
      });
    
    it('Should get a category and return an 10 elemnts array', async () =>{
        const category = 'cat';
        const gifs = await getGifs(category)
        expect(gifs.length).toEqual(10)
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                url: expect.any(String),
                title: expect.any(String),
            }
        )
    })
});