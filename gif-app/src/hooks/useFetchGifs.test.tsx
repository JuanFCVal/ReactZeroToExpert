import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "./useFetchGifs"
import fetchMock from 'jest-fetch-mock';
// jest.mock('node-fetch')

describe('useFetchHook', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
      });
    it('should return initial value', () => {
      const { result} =  renderHook( () => useFetchGifs( "Hola" ))
      const { isLoading, images} = result.current
      expect(images.length).toBe(0)
      expect(isLoading).toBe(true)
    })
    it('should return images list and loading false', async () => {
      const { result} =  renderHook( () => useFetchGifs( "Hola" ))
    await waitFor(() => (
        expect(result.current.images.length).toBeGreaterThan(0)
    ))
        expect(result.current.isLoading).toBeFalsy()
    })
})