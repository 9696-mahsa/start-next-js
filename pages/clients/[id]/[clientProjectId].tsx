import { useRouter } from "next/router"

export default function SelectedClientProjectsPage() {

    const router = useRouter();

    console.log(router.query);
    
    return (
      <>
        <h1>The Project Page for a Specific Project </h1>
        <h1>for a Selected Client </h1>
      </>
    )
  }
  