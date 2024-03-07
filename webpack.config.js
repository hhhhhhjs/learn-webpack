import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = {
    entry:'./index.js',
    output:{
         path: path.resolve(__dirname, 'dist'),  //这里是commonjs resolve相当于path.join
         filename: 'my-first-webpack.bundle.js',
    },
    mode:'development',
    module:{},
    plugins:[]
}
export default config