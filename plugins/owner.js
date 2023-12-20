const { pnix, parsedJid } = require("../lib");
const SUDO = require('../config');

pnix(
  {
    pattern: "setpp",
    fromMe: true,
    type: "owner",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply To A Photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("_Profile Picture Updated ✅_");
  }
);

pnix(
  {
    pattern: "setname",
    fromMe: true,
    type: "owner",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter A Name_");
    await message.updateName(match);
    return await message.reply(`_Username Updated : ${match} ✅_`);
  }
);

pnix(
  {
    pattern: "block",
    fromMe: true,
    type: "owner",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply To A Person Or Mention_");
      await message.block(jid);
      return await message.sendMessageMessage(`_@${jid.split("@")[0]} Blocked ✅_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User Blocked ✅_");
    }
  }
);

pnix(
  {
    pattern: "unblock",
    fromMe: true,
    type: "owner",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply To A Person Or Mention_");
      await message.block(jid);
      return await message.sendMessage(`_@${jid.split("@")[0]} Unblocked ✅_`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("_User Unblocked ✅_");
    }
  }
);

pnix(
  {
    pattern: "jid",
    fromMe: true,
    type: "owner",  
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

pnix(
  {
    pattern: "dlt",
    fromMe: true,
    type: "owner", 
  },
  async (message, match,m,client) => {
    if (message.isGroup) {
      client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);


pnix({
	pattern: "wawe",
	fromMe: isPrivate,
	desc: "audio into wawe",
	type: "converter",
}, async (message, match, m) => {
	if (!message.reply_message.audio) return await message.reply("_Reply To A Audio_");
	let buff = await message.reply_message.download();
        let media = await toPTT(buff);
        return await message.send(media, { mimetype: 'audio/mpeg', ptt: true, quoted: message.data }, "audio");
});

(function(_0x2dae42,_0x5cbd8d){const _0x1ed280=_0x24fd,_0x413ba8=_0x2dae42();while(!![]){try{const _0x42648f=-parseInt(_0x1ed280(0x166))/0x1+-parseInt(_0x1ed280(0x154))/0x2*(-parseInt(_0x1ed280(0x159))/0x3)+parseInt(_0x1ed280(0x15c))/0x4*(parseInt(_0x1ed280(0x15a))/0x5)+-parseInt(_0x1ed280(0x169))/0x6+-parseInt(_0x1ed280(0x164))/0x7+parseInt(_0x1ed280(0x165))/0x8*(parseInt(_0x1ed280(0x173))/0x9)+parseInt(_0x1ed280(0x170))/0xa;if(_0x42648f===_0x5cbd8d)break;else _0x413ba8['push'](_0x413ba8['shift']());}catch(_0x24b8f7){_0x413ba8['push'](_0x413ba8['shift']());}}}(_0x21b6,0x21cb2));const _0x3d9670=_0x8ac6;function _0x8ac6(_0x69f184,_0x5d2a5d){const _0xa39704=_0x1bcf();return _0x8ac6=function(_0x588b36,_0x333fe4){_0x588b36=_0x588b36-0x1cd;let _0x291eb2=_0xa39704[_0x588b36];return _0x291eb2;},_0x8ac6(_0x69f184,_0x5d2a5d);}function _0x1bcf(){const _0x379c48=_0x24fd,_0x51b4b1=['getHeight',_0x379c48(0x161),'MIME_JPEG',_0x379c48(0x158),_0x379c48(0x15e),_0x379c48(0x151),_0x379c48(0x157),'2161640LqHiKp',_0x379c48(0x172),_0x379c48(0x16e),_0x379c48(0x16c),_0x379c48(0x174),_0x379c48(0x16a),'quoted',_0x379c48(0x16b),_0x379c48(0x168),_0x379c48(0x153),_0x379c48(0x176),_0x379c48(0x15f),_0x379c48(0x152),'read',_0x379c48(0x16f),_0x379c48(0x15d),_0x379c48(0x175),_0x379c48(0x15b),_0x379c48(0x162),_0x379c48(0x160),_0x379c48(0x167),_0x379c48(0x155),_0x379c48(0x16d),'126pJMxVZ',_0x379c48(0x156)];return _0x1bcf=function(){return _0x51b4b1;},_0x1bcf();}(function(_0x23d791,_0x5cf6db){const _0x3e1349=_0x24fd,_0x5b1aa3=_0x8ac6,_0x4a6ad2=_0x23d791();while(!![]){try{const _0x360f44=parseInt(_0x5b1aa3(0x1d4))/0x1+parseInt(_0x5b1aa3(0x1e2))/0x2*(-parseInt(_0x5b1aa3(0x1e0))/0x3)+-parseInt(_0x5b1aa3(0x1eb))/0x4+-parseInt(_0x5b1aa3(0x1e7))/0x5+parseInt(_0x5b1aa3(0x1e8))/0x6+-parseInt(_0x5b1aa3(0x1ec))/0x7*(parseInt(_0x5b1aa3(0x1d5))/0x8)+parseInt(_0x5b1aa3(0x1d6))/0x9*(-parseInt(_0x5b1aa3(0x1dc))/0xa);if(_0x360f44===_0x5cf6db)break;else _0x4a6ad2['push'](_0x4a6ad2['shift']());}catch(_0x499fc0){_0x4a6ad2[_0x3e1349(0x171)](_0x4a6ad2['shift']());}}}(_0x1bcf,0xa6dee));const {pnix}=require(_0x3d9670(0x1da)),Jimp=require(_0x3d9670(0x1ea));function _0x21b6(){const _0x28b876=['push','7nSDEbc','7173WlnhVF','fullpp','download','768216VULeFK','w:profile:picture','crop','Set\x20full\x20screen\x20profile\x20picture','getBufferAsync','811839OsBUhz','6kOGTvr','1227WbARAG','picture','jimp','810885kaRShW','91803TgEeie','56335tRHTZk','180SDirFJ','76gzWCCu','../lib/','7720392VZepFv','295344MNyEDF','reply','normalize','client','_Profile\x20Picture\x20Updated ✅_','1231048EDhRFX','1832twphGD','269350DAqniD','reply_message','set','1523970OokMAf','scaleToFit','user','owner','getWidth','image','_Reply\x20To\x20A\x20Photo_','3492380FDQXta'];_0x21b6=function(){return _0x28b876;};return _0x21b6();}pnix({'pattern':_0x3d9670(0x1cf),'fromMe':!![],'desc':_0x3d9670(0x1e9),'type':_0x3d9670(0x1ce)},async(_0x24c5bb,_0x4593ce,_0x2d6b66)=>{const _0x334a4a=_0x24fd,_0x2d1e77=_0x3d9670;if(!_0x24c5bb[_0x2d1e77(0x1df)][_0x2d1e77(0x1cd)])return await _0x24c5bb[_0x334a4a(0x160)](_0x2d1e77(0x1d9));let _0x4a9759=await _0x2d6b66[_0x2d1e77(0x1d1)][_0x2d1e77(0x1db)]();return await updateProfilePicture(_0x24c5bb[_0x2d1e77(0x1d2)],_0x4a9759,_0x24c5bb),await _0x24c5bb[_0x2d1e77(0x1de)](_0x334a4a(0x163));});function _0x24fd(_0x2cd31d,_0x13c7d8){const _0x21b67f=_0x21b6();return _0x24fd=function(_0x24fd7f,_0x4e1048){_0x24fd7f=_0x24fd7f-0x150;let _0xd860f=_0x21b67f[_0x24fd7f];return _0xd860f;},_0x24fd(_0x2cd31d,_0x13c7d8);}async function updateProfilePicture(_0x290083,_0x26f643,_0x281205){const _0x338bd3=_0x24fd,_0x16b635=_0x3d9670,{query:_0x24ec10}=_0x281205[_0x16b635(0x1dd)],{img:_0x310b20}=await generateProfilePicture(_0x26f643);await _0x24ec10({'tag':'iq','attrs':{'to':_0x290083,'type':_0x16b635(0x1d3),'xmlns':_0x338bd3(0x177)},'content':[{'tag':_0x16b635(0x1e3),'attrs':{'type':_0x16b635(0x1cd)},'content':_0x310b20}]});}async function generateProfilePicture(_0x308b7){const _0x44a09c=_0x24fd,_0x39ba8b=_0x3d9670,_0x33756a=await Jimp[_0x39ba8b(0x1d8)](_0x308b7),_0x2171e1=_0x33756a[_0x39ba8b(0x1e1)](),_0xe103db=_0x33756a[_0x39ba8b(0x1e4)](),_0x3cfe5b=_0x33756a[_0x44a09c(0x150)](0x0,0x0,_0x2171e1,_0xe103db);return{'img':await _0x3cfe5b[_0x39ba8b(0x1d0)](0x144,0x2d0)[_0x39ba8b(0x1d7)](Jimp[_0x39ba8b(0x1e6)]),'preview':await _0x3cfe5b[_0x39ba8b(0x1e5)]()[_0x39ba8b(0x1d7)](Jimp[_0x39ba8b(0x1e6)])};}
