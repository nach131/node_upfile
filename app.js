const express = require('express');
const app = express();


app.get('/', (req, res) => {
	res.send("Toma tomate");
});


const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const storage = multer.diskStorage({
	destination: function (req, res, cd) {
		cd(null, 'uploads')
	},
	filename: function (req, file, cd) {
		// const uniqueSuffix = Data.now() + '_' + Math.random(Math.random() * 1e9)
		// cd(null, file.filename + '_' + uniqueSuffix);

		cd(null, file.originalname)
	}
})

const upload = multer({ storage });

app.post('/api/upload', upload.single('AKINOMBRE'), (req, res) => {

	res.json(req.file);
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

// < html >
// <form action="/profile" method="post" enctype="multipart/form-data">
// 	<input type="file" name="AKINOMBRE" />
// </form>