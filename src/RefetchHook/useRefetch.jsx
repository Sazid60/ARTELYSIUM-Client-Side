
import { useEffect, useState } from "react";

const useRefetch = (id) => {
    const [art, setArt] = useState([])
    const [loading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(false)

    const refetch = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://art-elysium-server-b9-a10.vercel.app/craftArts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setArt(data)
                setLoading(false)
            })

    }, [toggle,id])

    return {art,refetch, loading}
};

export default useRefetch;