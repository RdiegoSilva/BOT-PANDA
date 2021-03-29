exports.wait = () => {
	return`*「 ESPERAR 」 ESTA SENDO PROCESSADO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`*「 REGISTRE-SE PRIMEIRO 」*\n\n*Como registrar ${prefix}daftar Nome|Idade* \n*exemplo ${prefix}daftar Diego|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*Você já está registrado no banco de dados do bot PANDA*`
}

exports.stikga = () => {
	return`*Falhou tente repetir Novamente Em alguns momentos*`
}

exports.linkga = () => {
	return`*Desculpe, o link é inválido*`
}

exports.groupo = () => {
	return`*「SÓ GRUPO」*`
}

exports.ownerb = () => {
	return`*「PROPRIETÁRIO SOMENTE」*`
}

exports.ownerg = () => {
	return`*「SOMENTE PROPRIETÁRIOS DO GRUPO」*`
}

exports.admin = () => {
	return`*「SOMENTEADMINISTRAÇÃO DO GRUPO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ DESLIGADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário Diego ツ, relatórios falsos ou confusos não serão respondidos.*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Limpeza Foi Um Sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*Se você não entendeu a mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS BOT PANDA 」*\n\nvocê se cadastrou com os dados \n\n┏━➽Nome\n┗➽${namaUser}\n┏━➽Numero\n┗➽wa.me/${sender.split("@")[0]}\n┏━➽idade\n┗➽${umurUser}\n┏━➽Hora Do registro\n┗➽${time}\n\n┏━🐼 *PANDA* 🐼━\n┣➽${serialUser}\n┗➽NOTA : não se esqueça deste número porque é importante!`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} Seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
 📊➤ Nama : ${pushname}
 📊➤ Nomer : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limit :  +3
 📊➤ Pangkat :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/558881060472\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
