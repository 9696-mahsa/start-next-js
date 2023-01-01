import { useRouter } from "next/router"

export default function BlogPostPage() {

    const router = useRouter();

    console.log(router.query);
    
    return (
      <>
        <h1>The Blog Post Page </h1>

      </>
    )
  }
  