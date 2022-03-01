export const getServerSideProps = async () => {
    const res = await fetch(
        //Need to change id (gdax) in order to iterate through different exchange tickers...
        `https://api.coingecko.com/api/v3/exchanges/gdax/tickers`
    );

    const exchangeTickers = await res.json();

    return {
        props: {
            exchangeTickers
        }
    };
}