const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *IRFAN X NINDA BOT WHATSAPP*

Bot ini merupakan program open-source yang dibuat menggunakan Javascript, kamu dapat menyalin, memodifikasi, mengembangkan, dan menerbitkan kembali dengan syarat tidak menghapus author utama dalam bot ini, dan diwajibkan menyantumkan nama author jika ingin mem-publish bot ini.

Dimohon untuk menggunakan seperlunya atau tidak berlebihan. Kamu dapat mengunduh, meng-install, atau berkontribusi di:

https://github.com/irfnadi/BotWa3

author: IRFAN ADI
INSTAGRAM : @irfnadi_
    `
    resolve(list)
})

module.exports = About
