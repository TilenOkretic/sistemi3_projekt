require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    console.log(`Server is running on port http://${require('os').networkInterfaces().eth1[0].address}:${PORT}`);
});
