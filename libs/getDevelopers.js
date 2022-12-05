import path from 'path'
import {promises as fs} from 'fs'


export async function getDevelopers(){
    const filePath = path.join(process.cwd(), '/mock/developers.json')
    return JSON.parse(await fs.readFile(filePath,'utf-8'))
}