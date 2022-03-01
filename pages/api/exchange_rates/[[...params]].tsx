export const getServerSideProps = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/exchange_rates`
    );

    const exchangeRates = await res.json();

    return {
        props: {
            exchangeRates
        }
    };
}