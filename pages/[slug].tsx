export const getStaticPaths = async () => {
    const res = await fetch('')
    const data = await res.json();

    const paths = data.map(path => {
        return {
            params: { id: path.id.toString() }
        }
    })

    return {
        paths:[{
            paths,
            fallback: false
        }]
    }
}

const Example = (): JSX.Element => {
    return (
        <div>
            <h1>Example</h1>
        </div>
    );
}

export default Example