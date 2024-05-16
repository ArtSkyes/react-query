import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';


const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
]

function App() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      Promise.reject("Error"),
  })

  if (postsQuery.isLoading) {
    return <h1>Loading...</h1>
  } else if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>
  }


  return (
    <h1>Tanstack Query</h1>
  )
}


function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export default App;