__path = process.cwd()
const express = require('express')
var router = express.Router();
const fs = require('fs')
const fetch = require('node-fetch')


const { photoXy_1, photoXy_2, photoXy_3 } = require('../scraper/photooxy')
const UrlPhotooxy = {
	shadow: 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html',
	captain_amerika: 'https://photooxy.com/captain-america-text-generator-403.html',
	cup: 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html',
	romantic: 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html',
	smoke: 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html',
	burn_paper: 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html',
	naruto: 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html',
	love_message: 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html',
	tik_tok: 'https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html',
	flower_heart: 'https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html',
	wodden_board: 'https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html',
	glowing_neon: 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html',
	dark: 'https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html',
	metallic: 'https://photooxy.com/other-design/create-metallic-text-glow-online-188.html',
	wooden: 'https://photooxy.com/logo-and-text-effects/writing-your-text-on-wooden-boards-368.html',
	kayu: 'https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html',
	horror: 'https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html',
	permen: 'https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html',
	silk: 'https://photooxy.com/logo-and-text-effects/simple-text-on-the-silk-167.html',
	batik: 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html',
	nature3d: 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html',
	summer3d: 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html',
	fall: 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html',
	neonlights: 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html',
	a8bit: 'https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html',
	rain: 'https://photooxy.com/art-effects/gif-animated-rain-online-361.html',
	butterfly: 'https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html'
}



router.get('/rain', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy3?text=${text}&link=${UrlPhotooxy.rain}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.gif', getBuffer)
	res.sendFile(__path + '/tmp/image.gif')
})
router.get('/a8bit', async (req, res) => {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy2?text=${text}&text_2=${text_2}&link=${UrlPhotooxy.a8bit}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/neonlights', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.neonlights}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/fall', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.fall}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/summer3d', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.summer3d}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/nature3d', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.nature3d}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/batik', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.batik}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/silk', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.silk}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/permen', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.permen}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/horror', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.horror}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/kayu', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.kayu}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/wooden', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.wooden}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/butterfly', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.butterfly}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/metallic', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.metallic}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})


router.get('/dark', async (req, res) => {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'jenis'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy2?text=${text}&text_2=${text_2}&link=${UrlPhotooxy.dark}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})






router.get('/photooxy1', async (req, res) => {
	var text = req.query.text
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter Text' })
  	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await photoXy_1(link, text)
	try {
	var Buffer = await fetch(hasil, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/photooxy2', async (req, res) => {
	var text = req.query.text
  	var text_2 = req.query.text_2
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter Text' })
  	if (!text_2) return res.json({ message: 'masukan parameter Text' })
  	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await photoXy_2(link, text, text_2)
	try {
	var Buffer = await fetch(hasil, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/shadow', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text_0=${text}&link=${UrlPhotooxy.shadow}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/cup', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.cup}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/captain_amerika', async (req, res) => {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy2?text=${text}&text_2=${text_2}&link=${UrlPhotooxy.captain_amerika}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/romantic', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.romantic}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/smoke', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.smoke}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/burn_paper', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.burn_paper}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/naruto', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.naruto}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/love_message', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.love_message}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/tik_tok', async (req, res) => {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy2?text=${text}&text_2=${text_2}&link=${UrlPhotooxy.tik_tok}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/flower_heart', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.flower_heart}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/wodden_board', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.wodden_board}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})
router.get('/glowing_neon', async (req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	var img = await fetch(`https://bisakah.herokuapp.com/photooxy/photooxy1?text=${text}&link=${UrlPhotooxy.glowing_neon}`)
	var getBuffer = await img.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
})


module.exports = router
