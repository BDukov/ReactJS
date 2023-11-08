import { useEffect } from "react"

export default function Contacts() {

    useEffect(() => {
        console.log('Mount or update');

       return () => {
            console.log('Unmount')
        }
    }, [])

    return (
        <>
        <h2>Contacts Page</h2>
        <label>Title</label><br />
        <input type="text" /> <br />
        <label >Description</label> <br />
        <textarea name="" id="" cols="30" rows="10"></textarea> <br />
        <input type="submit" />
        </>
    )
}