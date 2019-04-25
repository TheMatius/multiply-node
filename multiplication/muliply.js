//require
const fs = require('fs');
const colors = require('colors');
//express no es una libreria propia de node, es un paquete instalable
//require de archivos creados por nosotros ./ o ../

let listTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        console.log('============');

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
};

//module.exports.createFile
let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('The base isn\'t a number');
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tables/table-${base}-al-${limit}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-al-${limit}.txt`.green);
        });
    });
};

module.exports = {
    createFile,
    listTable
}