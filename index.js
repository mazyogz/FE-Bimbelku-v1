// import atau panggil package2 yg kita mau pakai di aplikasi kita
const express = require('express');
const path = require('path');
const axios = require('axios');

// framework express = framework utk http server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting view engine
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

// ini untuk page lihat semua produk dari database
app.get('/:kecamatan', async (req, res) => {
    let bimbel;
    try {
        let url = 'https://be-bimbelku-v1-production.up.railway.app/v1/api/bimbel/';
        if (req.params.kecamatan) {
            url += `${req.params.kecamatan}`;
        }
        const response = await axios.get(url)
        bimbel = response.data
    } catch (error) {
        console.log(error);
        res.send('Terjadi kesalahan saat mengambil data dari API.');
        return;
    }
    console.log(bimbel)
    res.render('index', {
        bimbel
    })
})
app.get('/', async (req, res) => {
    let bimbel;
    try {
        let url = 'https://be-bimbelku-v1-production.up.railway.app/v1/api/bimbel/';
        if (req.params.kecamatan) {
            url += `${req.params.kecamatan}`;
        }
        const response = await axios.get(url)
        bimbel = response.data
    } catch (error) {
        console.log(error);
        res.send('Terjadi kesalahan saat mengambil data dari API.');
        return;
    }
    console.log(bimbel)
    res.render('index', {
        bimbel
    })
})
app.listen(PORT, () => {
    console.log(`App Running on localhost: ${PORT}`)
})