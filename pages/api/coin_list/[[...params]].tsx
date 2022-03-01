export const getServerSideProps = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/list`
    );

    const coinList = await res.json();

    return {
        props: {
            coinList
        }
    };
}