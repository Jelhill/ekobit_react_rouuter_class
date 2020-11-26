import React, {useState, useEffect} from 'react'

export default function Posts() {

    const [posts, setPosts] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
            if(jsonResponse.length > 0) {
                setPosts(jsonResponse)
                setName("Jelili Umaru")
            }
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>POST ID</td>
                        <td>USER ID</td>
                        <td>Body</td>
                        <td>TITLE</td>
                    </tr>
                </thead>
                <tbody>
                    { posts.map(post => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.body}</td>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
