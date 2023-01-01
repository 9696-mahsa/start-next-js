import { useRouter } from "next/router"

export default function ClientProjectsPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
      //load data
      router.push({
        pathname: '/clients/[id]/[clientProjectId]',
        query: {id: 'max' , clientProjectId: 'projectA'}
      });
    }
    return (
      <>
        <h1>The Project of a Given Client </h1>
        <button onClick={loadProjectHandler}> load Project A</button>
      </>
    )
  }