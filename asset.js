const axios = require ('axios')
const express = require ('express');
const app = express();

function paginate (x,y,z){
    return x.slice((z-1)*y,z*y)
}
app.get("/:page", async (req, res) => {
    try {
        let pgn = parseInt(req.params.page);
        let pgs = 22  // (pgs = page size can be any given even number)
        const response = await axios.get("https://api.coingecko.com/api/v3/asset_platforms")
        res.json(paginate(response.data,pgs,pgn))
    }
    catch (err) {
        console.log(err)
    }
})
const port = 3050 || process.env.PORT;
app.listen(port, () => console.log(`app listening on port ${port}!`))