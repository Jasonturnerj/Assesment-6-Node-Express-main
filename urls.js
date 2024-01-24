const fs = require('fs');
const axios = require('axios');

function fileProcessor(path) {
    try {
        fs.readFile(path, 'utf8', async function (err, data) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`file contents: ${data}`);

            let urls = data.split('\n').filter(url => url !== '');

            for (let url of urls) {
                try {
                    let res = await axios.get(url);
                    let file = new URL(url).hostname;

                    fs.writeFile(file, res.data, 'utf8', err => {
                        if (err) {
                            console.error(`Couldn't write file: ${file}, ${err}`);
                        }
                        console.log(`Results: ${file}`);
                    });
                } catch (err) {
                    console.error(`Couldn't connect to ${url}`);
                    continue;
                }
            }
        });
    } catch (err) {
        console.error(`Cannot read file ${path}: ${err}`);
    }
}

fileProcessor(process.argv[2]);
