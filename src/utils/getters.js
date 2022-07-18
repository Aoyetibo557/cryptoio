
const API_KEY = `${process.env.REACT_APP_RAPIDAPI_KEY}`;


const getMarkets = async () => {
    const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
    };
    return await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            return json.data.coins
        })
        .catch(err => console.error('error:' + err));
}



const getCoins = async () => {
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
    };
    return await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json.data.coins);
            return json.data.coins
        })
        .catch(err => console.error('error:' + err));
}

const getBestCoin = (data) => {
    let bestCoin = data.sort((a, b) => {
        return b.change - a.change;
    })
    return bestCoin
}

const getWorstCoin = (data) => {
    let worstCoin = data.sort((a, b) => {
        return a.change - b.change;
    })
    return worstCoin
}

//write a function that takes in an array of coins and returns an array of the last listed coins in the array
const getLastCoin = (data) => {
    let lastCoin = data.sort((a, b) => {
        return b.listedAt - a.listedAt;
    })
    return lastCoin
}


//write a function that takes in an array of coins and returns an array of the highest market cap coins in the array
const getHighestMarketCap = (data) => {
    let highestMarketCap = data.sort((a, b) => {
        return b.marketCap - a.marketCap;
    })
    return highestMarketCap
}

const getSingleCoin = async (uuid) => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    return await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json.data.coin);
            return json.data.coin
        })
        .catch(err => console.error('error:' + err));
}


export { getMarkets, getCoins, getBestCoin, getWorstCoin, getLastCoin, getHighestMarketCap, getSingleCoin };