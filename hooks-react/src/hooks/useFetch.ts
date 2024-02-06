import { useEffect, useState } from "react"

const useFetch = (url: string) => {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: null
    })
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })
        const resp = await fetch(url)
        const data = await resp.json();
        setState({
                ...state,
                isLoading: false,
                hasError: null,
                data
            })
    }
    useEffect(() => {
        getFetch()
    }, [url])

    return {
        ...state
    }
}

export default useFetch
