exports.wait = () => {
	return`*〔TENHA PACIÊNCIA ESTOU PROCESSANDOS EU PEDIDO...〕*`
}

exports.succes = () => {
	return`*〔 SUCESSO 〕*`
}

exports.lvlon = () => {
	return`*〔 HABILITAR 〕 LEVELING*`
}

exports.lvloff = () => {
	return`*〔 DESATIVAR 〕 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`*〔 REGISTRE-SE PRIMEIRO 〕*\n\n*Como Se Registrar ${prefix}\ndaftar Nome|idade* \n*exemplo ${prefix}daftar Panda|18*`
}

exports.rediregis = () => {
	return`*〔 JÁ REGISTRADO 〕*\n\n*Você já Está Registrado No Banco De Dados Do Bot Panda*`
}

exports.stikga = () => {
	return`*Falhou tente repetir Novamente Em alguns momentos*`
}

exports.linkga = () => {
	return`*Desculpe, o link é inválido*`
}

exports.groupo = () => {
	return`*〔SÓ EM GRUPO〕*`
}

exports.ownerb = () => {
	return`*〔PROPRIETÁRIO SOMENTE〕*`
}

exports.ownerg = () => {
	return`*〔SOMENTE PROPRIETÁRIOS DO GRUPO〕*`
}

exports.admin = () => {
	return`*〔SOMENTEADMINISTRAÇÃO DO GRUPO〕*`
}

exports.badmin = () => {
	return`*〔O BOT DEVE SER ADMINISTRADOR〕*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ DESLIGADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário Diego ツ, relatórios falsos ou confusos não serão respondidos.*`
}

exports.wrongf = () => {
	return`*〔Jovem Isso Pode Está Errado Reveja POR FAVOR!*〕`
}

exports.clears = () => {
	return`*〔CHAT LIMPO!〕*`
}

exports.pc = () => {
	return`*〔 CADASTRO 〕*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*Se você não entendeu a mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*〔 DADOS BOT PANDA 〕*\n\nVocê Se Cadastrou Com Os Dados \n\n┏━➽Nome\n┗➽${namaUser}\n┏━➽Número\n┗➽wa.me/${sender.split("@")[0]}\n┏━➽idade\n┗➽${umurUser}\n┏━➽Hora Do registro\n┗➽${time}\n\n┏━🐼 *BOT PANDA* 🐼━\n┣➽${serialUser}\n┗➽Nota : Pronto Voce Ja Foi Registrado Para Usar O BOT Digite\n*${prefix}menu/help*`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* Não encontrado \ Tente Escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não e script do dono*`
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
*〔 FELIZ 〕*
 📊➤ Nome : ${pushname}
 📊➤ Numero : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limite :  +3
 📊➤ Pelotão :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje acabou*\n*Contate* : wa.me/558881060472\n\n*Nota : Daremos a você um aleatório de 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*〔 LIMITE CONTA 〕*
o resto do seu limite : ${limitCounts}

NOTA : Para chegar ao limite. Você pode subir de nível por meio de grupos ou buylimit.
`}

exports.satukos = () => {
	return`*Adicione o parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *〔 ATM 〕*\n  ├─ ❏ *Nome* : ${pushname}\n  ├─ ❏ *Numero* : ${sender.split("@")[0]}\n  └─ ❏ *Dinheiro* : ${uangkau}
`}
