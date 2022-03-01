export const getServerSideProps = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
    );

    const trending = await res.json();

    return {
        props: {
            trending
        }
    };
}