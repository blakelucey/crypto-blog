export const getServerSideProps = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/search`
    );

    const search = await res.json();

    return {
        props: {
            search
        }
    };
}