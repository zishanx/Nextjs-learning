type PageProps = {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PageProps) {

    const { id } = await params;
    return (
        <>
            <h1>Post ID: {id}</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur aliquam repellendus nihil aut sint odio officia odit cupiditate, consequuntur veritatis amet reiciendis.</h2>
        </>

    )

}