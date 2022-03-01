export const getServerSideProps = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/list`
    );

    const exchangeList = await res.json();

    return {
        props: {
            exchangeList
        }
    };
}