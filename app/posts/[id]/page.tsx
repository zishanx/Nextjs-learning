type PageProps = {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PageProps) {

    const { id } = await params;
    return (
        <>
            <h1>Post ID: {id}</h1>
        </>

    )

}