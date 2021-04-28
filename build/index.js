/*!
 * 
 *   simple-keyboard-layouts v3.0.54
 *   https://github.com/hodgef/simple-keyboard-layouts
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(t,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.SimpleKeyboardLayouts=a():t.SimpleKeyboardLayouts=a()}(self,(function(){return function(){"use strict";var t={d:function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})},o:function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};t.r(a),t.d(a,{default:function(){return E}});var e={layout:{default:["ذ 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} ض ص ث ق ف غ ع ه خ ح ج د \\","{lock} ش س ي ب ل ا ت ن م ك ط {enter}","{shift} ئ ء ؤ ر لا ى ة و ز ظ {shift}",".com @ {space}"],shift:["ّ ! @ # $ % ^ & * ) ( _ + {bksp}","{tab} َ ً ُ ٌ لإ إ ‘ ÷ × ؛ < > |",'{lock} ِ ٍ ] [ لأ أ ـ ، / : " {enter}',"{shift} ~ ْ } { لآ آ ’ , . ؟ {shift}",".com @ {space}"]}},s={layout:{default:["॥ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০ - ৃ {bksp}","{tab} ৌ ৈ া ী ূ ব হ গ দ জ ড ়","ো ে ্ ি ু প ৰ ক ত চ ট {enter}","{shift} ং ম ন ৱ ল স , . য় {shift}",".com @ {space}"],shift:["! @ ( ) ঃ ঋ {bksp}","{tab} ঔ ঐ আ ঘ ঊ ভ ঙ ঘ ধ ঝ ঢ ঞ","ও এ অ ই উ ফ  খ থ ছ ছ ঠ {enter}","{shift} ঁ ণ শ ষ । য {shift}",".com @ {space}"]}},i={layout:{default:["ё ` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} й ц у к е н г ш ў з х [ ] \\","{lock} ф ы в а п р о л д ж э ; ' {enter}","{shift} я ч с м і т ь б ю , . / {shift}",".com @ {space}"],shift:["Ё ~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Й Ц У К Е Н Г Ш Ў З Х { } |",'{lock} Ф Ы В А П Р О Л Д Ж Э : " {enter}',"{shift} Я Ч С М І Т Ь Б Ю < > ? {shift}",".com @ {space}"]}},n={layout:{default:["‌ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০ - = {bksp}","{tab} স হ ে া ি ু ো ক গ ঙ য ং ্","{lock} অ ই উ ট ড ন ত দ প ; ' {enter}","{shift} ব ম চ জ র ল শ , . / {shift}",".com @ {space}"],shift:["‍ ! ্য ্র ৳ % । র্ × ( ) ঁ + {bksp}","{tab} ও ঔ ৈ ৃ ী ূ ৌ খ ঘ ঋ য় ৎ ঃ",'{lock} আ ঈ ঊ ঠ ঢ ণ থ ধ ফ : " {enter}',"{shift} ভ ঞ ছ ঝ ড় ঢ় ষ এ ঐ ? {shift}",".com @ {space}"]}},o={layout:{default:["ၐ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀ - = {bksp}","{tab} ဆ တ န မ အ ပ က င သ စ ဟ ဩ ၏","{lock} ေ ် ိ ္ ါ ့ ျ ု ူ း ' {enter}","{shift} ဖ ထ ခ လ ဘ ည ာ , . / {shift}",".com @ {space}"],shift:["ဎ ဍ ၒ ဋ ၓ ၔ ၕ ရ * ( ) _ + {bksp}","{tab} ဈ ဝ ဣ ၎ ဤ ၌ ဥ ၍ ဿ ဏ ဧ ဪ ၑ",'{lock} ဗ ွ ီ ၤ ြ ံ ဲ ဒ ဓ ဂ " {enter}',"{shift} ဇ ဌ ဃ ဠ ယ ဉ ဦ ၊ ။ ? {shift}",".com @ {space}"]}},c={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m . - / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ) ( _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},layoutCandidates:{a:"阿 啊 呵 腌 嗄 吖 锕",e:"额 阿 俄 恶 鹅 遏 鄂 厄 饿 峨 扼 娥 鳄 哦 蛾 噩 愕 讹 锷 垩 婀 鹗 萼 谔 莪 腭 锇 颚 呃 阏 屙 苊 轭",ai:"爱 埃 艾 碍 癌 哀 挨 矮 隘 蔼 唉 皑 哎 霭 捱 暧 嫒 嗳 瑷 嗌 锿 砹",ei:"诶",xi:"系 西 席 息 希 习 吸 喜 细 析 戏 洗 悉 锡 溪 惜 稀 袭 夕 洒 晰 昔 牺 腊 烯 熙 媳 栖 膝 隙 犀 蹊 硒 兮 熄 曦 禧 嬉 玺 奚 汐 徙 羲 铣 淅 嘻 歙 熹 矽 蟋 郗 唏 皙 隰 樨 浠 忾 蜥 檄 郄 翕 阋 鳃 舾 屣 葸 螅 咭 粞 觋 欷 僖 醯 鼷 裼 穸 饩 舄 禊 诶 菥 蓰",yi:"一 以 已 意 议 义 益 亿 易 医 艺 食 依 移 衣 异 伊 仪 宜 射 遗 疑 毅 谊 亦 疫 役 忆 抑 尾 乙 译 翼 蛇 溢 椅 沂 泄 逸 蚁 夷 邑 怡 绎 彝 裔 姨 熠 贻 矣 屹 颐 倚 诣 胰 奕 翌 疙 弈 轶 蛾 驿 壹 猗 臆 弋 铱 旖 漪 迤 佚 翊 诒 怿 痍 懿 饴 峄 揖 眙 镒 仡 黟 肄 咿 翳 挹 缢 呓 刈 咦 嶷 羿 钇 殪 荑 薏 蜴 镱 噫 癔 苡 悒 嗌 瘗 衤 佾 埸 圯 舣 酏 劓",an:"安 案 按 岸 暗 鞍 氨 俺 胺 铵 谙 庵 黯 鹌 桉 埯 犴 揞 厂 广",han:"厂 汉 韩 含 旱 寒 汗 涵 函 喊 憾 罕 焊 翰 邯 撼 瀚 憨 捍 酣 悍 鼾 邗 颔 蚶 晗 菡 旰 顸 犴 焓 撖",ang:"昂 仰 盎 肮",ao:"奥 澳 傲 熬 凹 鳌 敖 遨 鏖 袄 坳 翱 嗷 拗 懊 岙 螯 骜 獒 鏊 艹 媪 廒 聱",wa:"瓦 挖 娃 洼 袜 蛙 凹 哇 佤 娲 呙 腽",yu:"于 与 育 余 预 域 予 遇 奥 语 誉 玉 鱼 雨 渔 裕 愈 娱 欲 吁 舆 宇 羽 逾 豫 郁 寓 吾 狱 喻 御 浴 愉 禹 俞 邪 榆 愚 渝 尉 淤 虞 屿 峪 粥 驭 瑜 禺 毓 钰 隅 芋 熨 瘀 迂 煜 昱 汩 於 臾 盂 聿 竽 萸 妪 腴 圄 谕 觎 揄 龉 谀 俣 馀 庾 妤 瘐 鬻 欤 鹬 阈 嵛 雩 鹆 圉 蜮 伛 纡 窬 窳 饫 蓣 狳 肀 舁 蝓 燠",niu:"牛 纽 扭 钮 拗 妞 忸 狃",o:"哦 噢 喔",ba:"把 八 巴 拔 伯 吧 坝 爸 霸 罢 芭 跋 扒 叭 靶 疤 笆 耙 鲅 粑 岜 灞 钯 捌 菝 魃 茇",pa:"怕 帕 爬 扒 趴 琶 啪 葩 耙 杷 钯 筢",pi:"被 批 副 否 皮 坏 辟 啤 匹 披 疲 罢 僻 毗 坯 脾 譬 劈 媲 屁 琵 邳 裨 痞 癖 陂 丕 枇 噼 霹 吡 纰 砒 铍 淠 郫 埤 濞 睥 芘 蚍 圮 鼙 罴 蜱 疋 貔 仳 庀 擗 甓 陴",bi:"比 必 币 笔 毕 秘 避 闭 佛 辟 壁 弊 彼 逼 碧 鼻 臂 蔽 拂 泌 璧 庇 痹 毙 弼 匕 鄙 陛 裨 贲 敝 蓖 吡 篦 纰 俾 铋 毖 筚 荸 薜 婢 哔 跸 濞 秕 荜 愎 睥 妣 芘 箅 髀 畀 滗 狴 萆 嬖 襞 舭",bai:"百 白 败 摆 伯 拜 柏 佰 掰 呗 擘 捭 稗",bo:"波 博 播 勃 拨 薄 佛 伯 玻 搏 柏 泊 舶 剥 渤 卜 驳 簿 脖 膊 簸 菠 礴 箔 铂 亳 钵 帛 擘 饽 跛 钹 趵 檗 啵 鹁 擗 踣",bei:"北 被 备 倍 背 杯 勃 贝 辈 悲 碑 臂 卑 悖 惫 蓓 陂 钡 狈 呗 焙 碚 褙 庳 鞴 孛 鹎 邶 鐾",ban:"办 版 半 班 般 板 颁 伴 搬 斑 扮 拌 扳 瓣 坂 阪 绊 钣 瘢 舨 癍",pan:"判 盘 番 潘 攀 盼 拚 畔 胖 叛 拌 蹒 磐 爿 蟠 泮 袢 襻 丬",bin:"份 宾 频 滨 斌 彬 濒 殡 缤 鬓 槟 摈 膑 玢 镔 豳 髌 傧",bang:"帮 邦 彭 旁 榜 棒 膀 镑 绑 傍 磅 蚌 谤 梆 浜 蒡",pang:"旁 庞 乓 磅 螃 彷 滂 逄 耪",beng:"泵 崩 蚌 蹦 迸 绷 甭 嘣 甏 堋",bao:"报 保 包 宝 暴 胞 薄 爆 炮 饱 抱 堡 剥 鲍 曝 葆 瀑 豹 刨 褒 雹 孢 苞 煲 褓 趵 鸨 龅 勹",bu:"不 部 步 布 补 捕 堡 埔 卜 埠 簿 哺 怖 钚 卟 瓿 逋 晡 醭 钸",pu:"普 暴 铺 浦 朴 堡 葡 谱 埔 扑 仆 蒲 曝 瀑 溥 莆 圃 璞 濮 菩 蹼 匍 噗 氆 攵 镨 攴 镤",mian:"面 棉 免 绵 缅 勉 眠 冕 娩 腼 渑 湎 沔 黾 宀 眄",po:"破 繁 坡 迫 颇 朴 泊 婆 泼 魄 粕 鄱 珀 陂 叵 笸 泺 皤 钋 钷",fan:"反 范 犯 繁 饭 泛 翻 凡 返 番 贩 烦 拚 帆 樊 藩 矾 梵 蕃 钒 幡 畈 蘩 蹯 燔",fu:"府 服 副 负 富 复 福 夫 妇 幅 付 扶 父 符 附 腐 赴 佛 浮 覆 辅 傅 伏 抚 赋 辐 腹 弗 肤 阜 袱 缚 甫 氟 斧 孚 敷 俯 拂 俘 咐 腑 孵 芙 涪 釜 脯 茯 馥 宓 绂 讣 呋 罘 麸 蝠 匐 芾 蜉 跗 凫 滏 蝮 驸 绋 蚨 砩 桴 赙 菔 呒 趺 苻 拊 阝 鲋 怫 稃 郛 莩 幞 祓 艴 黻 黼 鳆",ben:"本 体 奔 苯 笨 夯 贲 锛 畚 坌",feng:"风 丰 封 峰 奉 凤 锋 冯 逢 缝 蜂 枫 疯 讽 烽 俸 沣 酆 砜 葑 唪",bian:"变 便 边 编 遍 辩 鞭 辨 贬 匾 扁 卞 汴 辫 砭 苄 蝙 鳊 弁 窆 笾 煸 褊 碥 忭 缏",pian:"便 片 篇 偏 骗 翩 扁 骈 胼 蹁 谝 犏 缏",zhen:"镇 真 针 圳 振 震 珍 阵 诊 填 侦 臻 贞 枕 桢 赈 祯 帧 甄 斟 缜 箴 疹 砧 榛 鸩 轸 稹 溱 蓁 胗 椹 朕 畛 浈",biao:"表 标 彪 镖 裱 飚 膘 飙 镳 婊 骠 飑 杓 髟 鳔 灬 瘭",piao:"票 朴 漂 飘 嫖 瓢 剽 缥 殍 瞟 骠 嘌 莩 螵",huo:"和 活 或 货 获 火 伙 惑 霍 祸 豁 嚯 藿 锪 蠖 钬 耠 镬 夥 灬 劐 攉",bie:"别 鳖 憋 瘪 蹩",min:"民 敏 闽 闵 皿 泯 岷 悯 珉 抿 黾 缗 玟 愍 苠 鳘",fen:"分 份 纷 奋 粉 氛 芬 愤 粪 坟 汾 焚 酚 吩 忿 棼 玢 鼢 瀵 偾 鲼",bing:"并 病 兵 冰 屏 饼 炳 秉 丙 摒 柄 槟 禀 枋 邴 冫",geng:"更 耕 颈 庚 耿 梗 埂 羹 哽 赓 绠 鲠",fang:"方 放 房 防 访 纺 芳 仿 坊 妨 肪 邡 舫 彷 枋 鲂 匚 钫",xian:"现 先 县 见 线 限 显 险 献 鲜 洗 宪 纤 陷 闲 贤 仙 衔 掀 咸 嫌 掺 羡 弦 腺 痫 娴 舷 馅 酰 铣 冼 涎 暹 籼 锨 苋 蚬 跹 岘 藓 燹 鹇 氙 莶 霰 跣 猃 彡 祆 筅",fou:"不 否 缶",ca:"拆 擦 嚓 礤",cha:"查 察 差 茶 插 叉 刹 茬 楂 岔 诧 碴 嚓 喳 姹 杈 汊 衩 搽 槎 镲 苴 檫 馇 锸 猹",cai:"才 采 财 材 菜 彩 裁 蔡 猜 踩 睬",can:"参 残 餐 灿 惨 蚕 掺 璨 惭 粲 孱 骖 黪",shen:"信 深 参 身 神 什 审 申 甚 沈 伸 慎 渗 肾 绅 莘 呻 婶 娠 砷 蜃 哂 椹 葚 吲 糁 渖 诜 谂 矧 胂",cen:"参 岑 涔",san:"三 参 散 伞 叁 糁 馓 毵",cang:"藏 仓 苍 沧 舱 臧 伧",zang:"藏 脏 葬 赃 臧 奘 驵",chen:"称 陈 沈 沉 晨 琛 臣 尘 辰 衬 趁 忱 郴 宸 谌 碜 嗔 抻 榇 伧 谶 龀 肜",cao:"草 操 曹 槽 糙 嘈 漕 螬 艚 屮",ce:"策 测 册 侧 厕 栅 恻",ze:"责 则 泽 择 侧 咋 啧 仄 箦 赜 笮 舴 昃 迮 帻",zhai:"债 择 齐 宅 寨 侧 摘 窄 斋 祭 翟 砦 瘵 哜",dao:"到 道 导 岛 倒 刀 盗 稻 蹈 悼 捣 叨 祷 焘 氘 纛 刂 帱 忉",ceng:"层 曾 蹭 噌",zha:"查 扎 炸 诈 闸 渣 咋 乍 榨 楂 札 栅 眨 咤 柞 喳 喋 铡 蚱 吒 怍 砟 揸 痄 哳 齄",chai:"差 拆 柴 钗 豺 侪 虿 瘥",ci:"次 此 差 词 辞 刺 瓷 磁 兹 慈 茨 赐 祠 伺 雌 疵 鹚 糍 呲 粢",zi:"资 自 子 字 齐 咨 滋 仔 姿 紫 兹 孜 淄 籽 梓 鲻 渍 姊 吱 秭 恣 甾 孳 訾 滓 锱 辎 趑 龇 赀 眦 缁 呲 笫 谘 嵫 髭 茈 粢 觜 耔",cuo:"措 错 磋 挫 搓 撮 蹉 锉 厝 嵯 痤 矬 瘥 脞 鹾",chan:"产 单 阐 崭 缠 掺 禅 颤 铲 蝉 搀 潺 蟾 馋 忏 婵 孱 觇 廛 谄 谗 澶 骣 羼 躔 蒇 冁",shan:"山 单 善 陕 闪 衫 擅 汕 扇 掺 珊 禅 删 膳 缮 赡 鄯 栅 煽 姗 跚 鳝 嬗 潸 讪 舢 苫 疝 掸 膻 钐 剡 蟮 芟 埏 彡 骟",zhan:"展 战 占 站 崭 粘 湛 沾 瞻 颤 詹 斩 盏 辗 绽 毡 栈 蘸 旃 谵 搌",xin:"新 心 信 辛 欣 薪 馨 鑫 芯 锌 忻 莘 昕 衅 歆 囟 忄 镡",lian:"联 连 练 廉 炼 脸 莲 恋 链 帘 怜 涟 敛 琏 镰 濂 楝 鲢 殓 潋 裢 裣 臁 奁 莶 蠊 蔹",chang:"场 长 厂 常 偿 昌 唱 畅 倡 尝 肠 敞 倘 猖 娼 淌 裳 徜 昶 怅 嫦 菖 鲳 阊 伥 苌 氅 惝 鬯",zhang:"长 张 章 障 涨 掌 帐 胀 彰 丈 仗 漳 樟 账 杖 璋 嶂 仉 瘴 蟑 獐 幛 鄣 嫜",chao:"超 朝 潮 炒 钞 抄 巢 吵 剿 绰 嘲 晁 焯 耖 怊",zhao:"着 照 招 找 召 朝 赵 兆 昭 肇 罩 钊 沼 嘲 爪 诏 濯 啁 棹 笊",zhou:"调 州 周 洲 舟 骤 轴 昼 宙 粥 皱 肘 咒 帚 胄 绉 纣 妯 啁 诌 繇 碡 籀 酎 荮",che:"车 彻 撤 尺 扯 澈 掣 坼 砗 屮",ju:"车 局 据 具 举 且 居 剧 巨 聚 渠 距 句 拒 俱 柜 菊 拘 炬 桔 惧 矩 鞠 驹 锯 踞 咀 瞿 枸 掬 沮 莒 橘 飓 疽 钜 趄 踽 遽 琚 龃 椐 苣 裾 榘 狙 倨 榉 苴 讵 雎 锔 窭 鞫 犋 屦 醵",cheng:"成 程 城 承 称 盛 抢 乘 诚 呈 净 惩 撑 澄 秤 橙 骋 逞 瞠 丞 晟 铛 埕 塍 蛏 柽 铖 酲 裎 枨",rong:"容 荣 融 绒 溶 蓉 熔 戎 榕 茸 冗 嵘 肜 狨 蝾",sheng:"生 声 升 胜 盛 乘 圣 剩 牲 甸 省 绳 笙 甥 嵊 晟 渑 眚",deng:"等 登 邓 灯 澄 凳 瞪 蹬 噔 磴 嶝 镫 簦 戥",zhi:"制 之 治 质 职 只 志 至 指 织 支 值 知 识 直 致 执 置 止 植 纸 拓 智 殖 秩 旨 址 滞 氏 枝 芝 脂 帜 汁 肢 挚 稚 酯 掷 峙 炙 栉 侄 芷 窒 咫 吱 趾 痔 蜘 郅 桎 雉 祉 郦 陟 痣 蛭 帙 枳 踯 徵 胝 栀 贽 祗 豸 鸷 摭 轵 卮 轾 彘 觯 絷 跖 埴 夂 黹 忮 骘 膣 踬",zheng:"政 正 证 争 整 征 郑 丁 症 挣 蒸 睁 铮 筝 拯 峥 怔 诤 狰 徵 钲",tang:"堂 唐 糖 汤 塘 躺 趟 倘 棠 烫 淌 膛 搪 镗 傥 螳 溏 帑 羰 樘 醣 螗 耥 铴 瑭",chi:"持 吃 池 迟 赤 驰 尺 斥 齿 翅 匙 痴 耻 炽 侈 弛 叱 啻 坻 眙 嗤 墀 哧 茌 豉 敕 笞 饬 踟 蚩 柢 媸 魑 篪 褫 彳 鸱 螭 瘛 眵 傺",shi:"是 时 实 事 市 十 使 世 施 式 势 视 识 师 史 示 石 食 始 士 失 适 试 什 泽 室 似 诗 饰 殖 释 驶 氏 硕 逝 湿 蚀 狮 誓 拾 尸 匙 仕 柿 矢 峙 侍 噬 嗜 栅 拭 嘘 屎 恃 轼 虱 耆 舐 莳 铈 谥 炻 豕 鲥 饣 螫 酾 筮 埘 弑 礻 蓍 鲺 贳",qi:"企 其 起 期 气 七 器 汽 奇 齐 启 旗 棋 妻 弃 揭 枝 歧 欺 骑 契 迄 亟 漆 戚 岂 稽 岐 琦 栖 缉 琪 泣 乞 砌 祁 崎 绮 祺 祈 凄 淇 杞 脐 麒 圻 憩 芪 伎 俟 畦 耆 葺 沏 萋 骐 鳍 綦 讫 蕲 屺 颀 亓 碛 柒 啐 汔 綮 萁 嘁 蛴 槭 欹 芑 桤 丌 蜞",chuai:"揣 踹 啜 搋 膪",tuo:"托 脱 拓 拖 妥 驼 陀 沱 鸵 驮 唾 椭 坨 佗 砣 跎 庹 柁 橐 乇 铊 沲 酡 鼍 箨 柝",duo:"多 度 夺 朵 躲 铎 隋 咄 堕 舵 垛 惰 哆 踱 跺 掇 剁 柁 缍 沲 裰 哚 隳",xue:"学 血 雪 削 薛 穴 靴 谑 噱 鳕 踅 泶 彐",chong:"重 种 充 冲 涌 崇 虫 宠 忡 憧 舂 茺 铳 艟",chou:"筹 抽 绸 酬 愁 丑 臭 仇 畴 稠 瞅 踌 惆 俦 瘳 雠 帱",qiu:"求 球 秋 丘 邱 仇 酋 裘 龟 囚 遒 鳅 虬 蚯 泅 楸 湫 犰 逑 巯 艽 俅 蝤 赇 鼽 糗",xiu:"修 秀 休 宿 袖 绣 臭 朽 锈 羞 嗅 岫 溴 庥 馐 咻 髹 鸺 貅",chu:"出 处 础 初 助 除 储 畜 触 楚 厨 雏 矗 橱 锄 滁 躇 怵 绌 搐 刍 蜍 黜 杵 蹰 亍 樗 憷 楮",tuan:"团 揣 湍 疃 抟 彖",zhui:"追 坠 缀 揣 椎 锥 赘 惴 隹 骓 缒",chuan:"传 川 船 穿 串 喘 椽 舛 钏 遄 氚 巛 舡",zhuan:"专 转 传 赚 砖 撰 篆 馔 啭 颛",yuan:"元 员 院 原 源 远 愿 园 援 圆 缘 袁 怨 渊 苑 宛 冤 媛 猿 垣 沅 塬 垸 鸳 辕 鸢 瑗 圜 爰 芫 鼋 橼 螈 眢 箢 掾",cuan:"窜 攒 篡 蹿 撺 爨 汆 镩",chuang:"创 床 窗 闯 幢 疮 怆",zhuang:"装 状 庄 壮 撞 妆 幢 桩 奘 僮 戆",chui:"吹 垂 锤 炊 椎 陲 槌 捶 棰",chun:"春 纯 醇 淳 唇 椿 蠢 鹑 朐 莼 肫 蝽",zhun:"准 屯 淳 谆 肫 窀",cu:"促 趋 趣 粗 簇 醋 卒 蹴 猝 蹙 蔟 殂 徂",dun:"吨 顿 盾 敦 蹲 墩 囤 沌 钝 炖 盹 遁 趸 砘 礅",qu:"区 去 取 曲 趋 渠 趣 驱 屈 躯 衢 娶 祛 瞿 岖 龋 觑 朐 蛐 癯 蛆 苣 阒 诎 劬 蕖 蘧 氍 黢 蠼 璩 麴 鸲 磲",xu:"需 许 续 须 序 徐 休 蓄 畜 虚 吁 绪 叙 旭 邪 恤 墟 栩 絮 圩 婿 戌 胥 嘘 浒 煦 酗 诩 朐 盱 蓿 溆 洫 顼 勖 糈 砉 醑",chuo:"辍 绰 戳 淖 啜 龊 踔 辶",zu:"组 族 足 祖 租 阻 卒 俎 诅 镞 菹",ji:"济 机 其 技 基 记 计 系 期 际 及 集 级 几 给 积 极 己 纪 即 继 击 既 激 绩 急 奇 吉 季 齐 疾 迹 鸡 剂 辑 籍 寄 挤 圾 冀 亟 寂 暨 脊 跻 肌 稽 忌 饥 祭 缉 棘 矶 汲 畸 姬 藉 瘠 骥 羁 妓 讥 稷 蓟 悸 嫉 岌 叽 伎 鲫 诘 楫 荠 戟 箕 霁 嵇 觊 麂 畿 玑 笈 犄 芨 唧 屐 髻 戢 佶 偈 笄 跽 蒺 乩 咭 赍 嵴 虮 掎 齑 殛 鲚 剞 洎 丌 墼 蕺 彐 芰 哜",cong:"从 丛 匆 聪 葱 囱 琮 淙 枞 骢 苁 璁",zong:"总 从 综 宗 纵 踪 棕 粽 鬃 偬 枞 腙",cou:"凑 辏 腠 楱",cui:"衰 催 崔 脆 翠 萃 粹 摧 璀 瘁 悴 淬 啐 隹 毳 榱",wei:"为 位 委 未 维 卫 围 违 威 伟 危 味 微 唯 谓 伪 慰 尾 魏 韦 胃 畏 帷 喂 巍 萎 蔚 纬 潍 尉 渭 惟 薇 苇 炜 圩 娓 诿 玮 崴 桅 偎 逶 倭 猥 囗 葳 隗 痿 猬 涠 嵬 韪 煨 艉 隹 帏 闱 洧 沩 隈 鲔 軎",cun:"村 存 寸 忖 皴",zuo:"作 做 座 左 坐 昨 佐 琢 撮 祚 柞 唑 嘬 酢 怍 笮 阼 胙",zuan:"钻 纂 攥 缵 躜",da:"大 达 打 答 搭 沓 瘩 惮 嗒 哒 耷 鞑 靼 褡 笪 怛 妲",dai:"大 代 带 待 贷 毒 戴 袋 歹 呆 隶 逮 岱 傣 棣 怠 殆 黛 甙 埭 诒 绐 玳 呔 迨",tai:"大 台 太 态 泰 抬 胎 汰 钛 苔 薹 肽 跆 邰 鲐 酞 骀 炱",ta:"他 它 她 拓 塔 踏 塌 榻 沓 漯 獭 嗒 挞 蹋 趿 遢 铊 鳎 溻 闼",dan:"但 单 石 担 丹 胆 旦 弹 蛋 淡 诞 氮 郸 耽 殚 惮 儋 眈 疸 澹 掸 膻 啖 箪 聃 萏 瘅 赕",lu:"路 六 陆 录 绿 露 鲁 卢 炉 鹿 禄 赂 芦 庐 碌 麓 颅 泸 卤 潞 鹭 辘 虏 璐 漉 噜 戮 鲈 掳 橹 轳 逯 渌 蓼 撸 鸬 栌 氇 胪 镥 簏 舻 辂 垆",tan:"谈 探 坦 摊 弹 炭 坛 滩 贪 叹 谭 潭 碳 毯 瘫 檀 痰 袒 坍 覃 忐 昙 郯 澹 钽 锬",ren:"人 任 认 仁 忍 韧 刃 纫 饪 妊 荏 稔 壬 仞 轫 亻 衽",jie:"家 结 解 价 界 接 节 她 届 介 阶 街 借 杰 洁 截 姐 揭 捷 劫 戒 皆 竭 桔 诫 楷 秸 睫 藉 拮 芥 诘 碣 嗟 颉 蚧 孑 婕 疖 桀 讦 疥 偈 羯 袷 哜 喈 卩 鲒 骱",yan:"研 严 验 演 言 眼 烟 沿 延 盐 炎 燕 岩 宴 艳 颜 殷 彦 掩 淹 阎 衍 铅 雁 咽 厌 焰 堰 砚 唁 焉 晏 檐 蜒 奄 俨 腌 妍 谚 兖 筵 焱 偃 闫 嫣 鄢 湮 赝 胭 琰 滟 阉 魇 酽 郾 恹 崦 芫 剡 鼹 菸 餍 埏 谳 讠 厣 罨",dang:"当 党 档 荡 挡 宕 砀 铛 裆 凼 菪 谠",tao:"套 讨 跳 陶 涛 逃 桃 萄 淘 掏 滔 韬 叨 洮 啕 绦 饕 鼗",tiao:"条 调 挑 跳 迢 眺 苕 窕 笤 佻 啁 粜 髫 铫 祧 龆 蜩 鲦",te:"特 忑 忒 铽 慝",de:"的 地 得 德 底 锝",dei:"得",di:"的 地 第 提 低 底 抵 弟 迪 递 帝 敌 堤 蒂 缔 滴 涤 翟 娣 笛 棣 荻 谛 狄 邸 嘀 砥 坻 诋 嫡 镝 碲 骶 氐 柢 籴 羝 睇 觌",ti:"体 提 题 弟 替 梯 踢 惕 剔 蹄 棣 啼 屉 剃 涕 锑 倜 悌 逖 嚏 荑 醍 绨 鹈 缇 裼",tui:"推 退 弟 腿 褪 颓 蜕 忒 煺",you:"有 由 又 优 游 油 友 右 邮 尤 忧 幼 犹 诱 悠 幽 佑 釉 柚 铀 鱿 囿 酉 攸 黝 莠 猷 蝣 疣 呦 蚴 莸 莜 铕 宥 繇 卣 牖 鼬 尢 蚰 侑",dian:"电 点 店 典 奠 甸 碘 淀 殿 垫 颠 滇 癫 巅 惦 掂 癜 玷 佃 踮 靛 钿 簟 坫 阽",tian:"天 田 添 填 甜 甸 恬 腆 佃 舔 钿 阗 忝 殄 畋 栝 掭",zhu:"主 术 住 注 助 属 逐 宁 著 筑 驻 朱 珠 祝 猪 诸 柱 竹 铸 株 瞩 嘱 贮 煮 烛 苎 褚 蛛 拄 铢 洙 竺 蛀 渚 伫 杼 侏 澍 诛 茱 箸 炷 躅 翥 潴 邾 槠 舳 橥 丶 瘃 麈 疰",nian:"年 念 酿 辗 碾 廿 捻 撵 拈 蔫 鲶 埝 鲇 辇 黏",diao:"调 掉 雕 吊 钓 刁 貂 凋 碉 鲷 叼 铫 铞",yao:"要 么 约 药 邀 摇 耀 腰 遥 姚 窑 瑶 咬 尧 钥 谣 肴 夭 侥 吆 疟 妖 幺 杳 舀 窕 窈 曜 鹞 爻 繇 徭 轺 铫 鳐 崾 珧",die:"跌 叠 蝶 迭 碟 爹 谍 牒 耋 佚 喋 堞 瓞 鲽 垤 揲 蹀",she:"设 社 摄 涉 射 折 舍 蛇 拾 舌 奢 慑 赦 赊 佘 麝 歙 畲 厍 猞 揲 滠",ye:"业 也 夜 叶 射 野 液 冶 喝 页 爷 耶 邪 咽 椰 烨 掖 拽 曳 晔 谒 腋 噎 揶 靥 邺 铘 揲",xie:"些 解 协 写 血 叶 谢 械 鞋 胁 斜 携 懈 契 卸 谐 泄 蟹 邪 歇 泻 屑 挟 燮 榭 蝎 撷 偕 亵 楔 颉 缬 邂 鲑 瀣 勰 榍 薤 绁 渫 廨 獬 躞",zhe:"这 者 着 著 浙 折 哲 蔗 遮 辙 辄 柘 锗 褶 蜇 蛰 鹧 谪 赭 摺 乇 磔 螫",ding:"定 订 顶 丁 鼎 盯 钉 锭 叮 仃 铤 町 酊 啶 碇 腚 疔 玎 耵",diu:"丢 铥",ting:"听 庭 停 厅 廷 挺 亭 艇 婷 汀 铤 烃 霆 町 蜓 葶 梃 莛",dong:"动 东 董 冬 洞 懂 冻 栋 侗 咚 峒 氡 恫 胴 硐 垌 鸫 岽 胨",tong:"同 通 统 童 痛 铜 桶 桐 筒 彤 侗 佟 潼 捅 酮 砼 瞳 恸 峒 仝 嗵 僮 垌 茼",zhong:"中 重 种 众 终 钟 忠 仲 衷 肿 踵 冢 盅 蚣 忪 锺 舯 螽 夂",dou:"都 斗 读 豆 抖 兜 陡 逗 窦 渎 蚪 痘 蔸 钭 篼",du:"度 都 独 督 读 毒 渡 杜 堵 赌 睹 肚 镀 渎 笃 竺 嘟 犊 妒 牍 蠹 椟 黩 芏 髑",duan:"断 段 短 端 锻 缎 煅 椴 簖",dui:"对 队 追 敦 兑 堆 碓 镦 怼 憝",rui:"瑞 兑 锐 睿 芮 蕊 蕤 蚋 枘",yue:"月 说 约 越 乐 跃 兑 阅 岳 粤 悦 曰 钥 栎 钺 樾 瀹 龠 哕 刖",tun:"吞 屯 囤 褪 豚 臀 饨 暾 氽",hui:"会 回 挥 汇 惠 辉 恢 徽 绘 毁 慧 灰 贿 卉 悔 秽 溃 荟 晖 彗 讳 诲 珲 堕 诙 蕙 晦 睢 麾 烩 茴 喙 桧 蛔 洄 浍 虺 恚 蟪 咴 隳 缋 哕",wu:"务 物 无 五 武 午 吴 舞 伍 污 乌 误 亡 恶 屋 晤 悟 吾 雾 芜 梧 勿 巫 侮 坞 毋 诬 呜 钨 邬 捂 鹜 兀 婺 妩 於 戊 鹉 浯 蜈 唔 骛 仵 焐 芴 鋈 庑 鼯 牾 怃 圬 忤 痦 迕 杌 寤 阢",ya:"亚 压 雅 牙 押 鸭 呀 轧 涯 崖 邪 芽 哑 讶 鸦 娅 衙 丫 蚜 碣 垭 伢 氩 桠 琊 揠 吖 睚 痖 疋 迓 岈 砑",he:"和 合 河 何 核 盖 贺 喝 赫 荷 盒 鹤 吓 呵 苛 禾 菏 壑 褐 涸 阂 阖 劾 诃 颌 嗬 貉 曷 翮 纥 盍",wo:"我 握 窝 沃 卧 挝 涡 斡 渥 幄 蜗 喔 倭 莴 龌 肟 硪",en:"恩 摁 蒽",n:"嗯 唔",er:"而 二 尔 儿 耳 迩 饵 洱 贰 铒 珥 佴 鸸 鲕",fa:"发 法 罚 乏 伐 阀 筏 砝 垡 珐",quan:"全 权 券 泉 圈 拳 劝 犬 铨 痊 诠 荃 醛 蜷 颧 绻 犭 筌 鬈 悛 辁 畎",fei:"费 非 飞 肥 废 菲 肺 啡 沸 匪 斐 蜚 妃 诽 扉 翡 霏 吠 绯 腓 痱 芾 淝 悱 狒 榧 砩 鲱 篚 镄",pei:"配 培 坏 赔 佩 陪 沛 裴 胚 妃 霈 淠 旆 帔 呸 醅 辔 锫",ping:"平 评 凭 瓶 冯 屏 萍 苹 乒 坪 枰 娉 俜 鲆",fo:"佛",hu:"和 护 许 户 核 湖 互 乎 呼 胡 戏 忽 虎 沪 糊 壶 葫 狐 蝴 弧 瑚 浒 鹄 琥 扈 唬 滹 惚 祜 囫 斛 笏 芴 醐 猢 怙 唿 戽 槲 觳 煳 鹕 冱 瓠 虍 岵 鹱 烀 轷",ga:"夹 咖 嘎 尬 噶 旮 伽 尕 钆 尜",ge:"个 合 各 革 格 歌 哥 盖 隔 割 阁 戈 葛 鸽 搁 胳 舸 疙 铬 骼 蛤 咯 圪 镉 颌 仡 硌 嗝 鬲 膈 纥 袼 搿 塥 哿 虼",ha:"哈 蛤 铪",xia:"下 夏 峡 厦 辖 霞 夹 虾 狭 吓 侠 暇 遐 瞎 匣 瑕 唬 呷 黠 硖 罅 狎 瘕 柙",gai:"改 该 盖 概 溉 钙 丐 芥 赅 垓 陔 戤",hai:"海 还 害 孩 亥 咳 骸 骇 氦 嗨 胲 醢",gan:"干 感 赶 敢 甘 肝 杆 赣 乾 柑 尴 竿 秆 橄 矸 淦 苷 擀 酐 绀 泔 坩 旰 疳 澉",gang:"港 钢 刚 岗 纲 冈 杠 缸 扛 肛 罡 戆 筻",jiang:"将 强 江 港 奖 讲 降 疆 蒋 姜 浆 匠 酱 僵 桨 绛 缰 犟 豇 礓 洚 茳 糨 耩",hang:"行 航 杭 巷 夯 吭 桁 沆 绗 颃",gong:"工 公 共 供 功 红 贡 攻 宫 巩 龚 恭 拱 躬 弓 汞 蚣 珙 觥 肱 廾",hong:"红 宏 洪 轰 虹 鸿 弘 哄 烘 泓 訇 蕻 闳 讧 荭 黉 薨",guang:"广 光 逛 潢 犷 胱 咣 桄",qiong:"穷 琼 穹 邛 茕 筇 跫 蛩 銎",gao:"高 告 搞 稿 膏 糕 镐 皋 羔 锆 杲 郜 睾 诰 藁 篙 缟 槁 槔",hao:"好 号 毫 豪 耗 浩 郝 皓 昊 皋 蒿 壕 灏 嚎 濠 蚝 貉 颢 嗥 薅 嚆",li:"理 力 利 立 里 李 历 例 离 励 礼 丽 黎 璃 厉 厘 粒 莉 梨 隶 栗 荔 沥 犁 漓 哩 狸 藜 罹 篱 鲤 砺 吏 澧 俐 骊 溧 砾 莅 锂 笠 蠡 蛎 痢 雳 俪 傈 醴 栎 郦 俚 枥 喱 逦 娌 鹂 戾 砬 唳 坜 疠 蜊 黧 猁 鬲 粝 蓠 呖 跞 疬 缡 鲡 鳢 嫠 詈 悝 苈 篥 轹",jia:"家 加 价 假 佳 架 甲 嘉 贾 驾 嫁 夹 稼 钾 挟 拮 迦 伽 颊 浃 枷 戛 荚 痂 颉 镓 笳 珈 岬 胛 袈 郏 葭 袷 瘕 铗 跏 蛱 恝 哿",luo:"落 罗 络 洛 逻 螺 锣 骆 萝 裸 漯 烙 摞 骡 咯 箩 珞 捋 荦 硌 雒 椤 镙 跞 瘰 泺 脶 猡 倮 蠃",ke:"可 科 克 客 刻 课 颗 渴 壳 柯 棵 呵 坷 恪 苛 咳 磕 珂 稞 瞌 溘 轲 窠 嗑 疴 蝌 岢 铪 颏 髁 蚵 缂 氪 骒 钶 锞",qia:"卡 恰 洽 掐 髂 袷 咭 葜",gei:"给",gen:"根 跟 亘 艮 哏 茛",hen:"很 狠 恨 痕 哏",gou:"构 购 够 句 沟 狗 钩 拘 勾 苟 垢 枸 篝 佝 媾 诟 岣 彀 缑 笱 鞲 觏 遘",kou:"口 扣 寇 叩 抠 佝 蔻 芤 眍 筘",gu:"股 古 顾 故 固 鼓 骨 估 谷 贾 姑 孤 雇 辜 菇 沽 咕 呱 锢 钴 箍 汩 梏 痼 崮 轱 鸪 牯 蛊 诂 毂 鹘 菰 罟 嘏 臌 觚 瞽 蛄 酤 牿 鲴",pai:"牌 排 派 拍 迫 徘 湃 俳 哌 蒎",gua:"括 挂 瓜 刮 寡 卦 呱 褂 剐 胍 诖 鸹 栝 呙",tou:"投 头 透 偷 愉 骰 亠",guai:"怪 拐 乖",kuai:"会 快 块 筷 脍 蒯 侩 浍 郐 蒉 狯 哙",guan:"关 管 观 馆 官 贯 冠 惯 灌 罐 莞 纶 棺 斡 矜 倌 鹳 鳏 盥 掼 涫",wan:"万 完 晚 湾 玩 碗 顽 挽 弯 蔓 丸 莞 皖 宛 婉 腕 蜿 惋 烷 琬 畹 豌 剜 纨 绾 脘 菀 芄 箢",ne:"呢 哪 呐 讷 疒",gui:"规 贵 归 轨 桂 柜 圭 鬼 硅 瑰 跪 龟 匮 闺 诡 癸 鳜 桧 皈 鲑 刽 晷 傀 眭 妫 炅 庋 簋 刿 宄 匦",jun:"军 均 俊 君 峻 菌 竣 钧 骏 龟 浚 隽 郡 筠 皲 麇 捃",jiong:"窘 炯 迥 炅 冂 扃",jue:"决 绝 角 觉 掘 崛 诀 獗 抉 爵 嚼 倔 厥 蕨 攫 珏 矍 蹶 谲 镢 鳜 噱 桷 噘 撅 橛 孓 觖 劂 爝",gun:"滚 棍 辊 衮 磙 鲧 绲 丨",hun:"婚 混 魂 浑 昏 棍 珲 荤 馄 诨 溷 阍",guo:"国 过 果 郭 锅 裹 帼 涡 椁 囗 蝈 虢 聒 埚 掴 猓 崞 蜾 呙 馘",hei:"黑 嘿 嗨",kan:"看 刊 勘 堪 坎 砍 侃 嵌 槛 瞰 阚 龛 戡 凵 莰",heng:"衡 横 恒 亨 哼 珩 桁 蘅",mo:"万 没 么 模 末 冒 莫 摩 墨 默 磨 摸 漠 脉 膜 魔 沫 陌 抹 寞 蘑 摹 蓦 馍 茉 嘿 谟 秣 蟆 貉 嫫 镆 殁 耱 嬷 麽 瘼 貊 貘",peng:"鹏 朋 彭 膨 蓬 碰 苹 棚 捧 亨 烹 篷 澎 抨 硼 怦 砰 嘭 蟛 堋",hou:"后 候 厚 侯 猴 喉 吼 逅 篌 糇 骺 後 鲎 瘊 堠",hua:"化 华 划 话 花 画 滑 哗 豁 骅 桦 猾 铧 砉",huai:"怀 坏 淮 徊 槐 踝",huan:"还 环 换 欢 患 缓 唤 焕 幻 痪 桓 寰 涣 宦 垸 洹 浣 豢 奂 郇 圜 獾 鲩 鬟 萑 逭 漶 锾 缳 擐",xun:"讯 训 迅 孙 寻 询 循 旬 巡 汛 勋 逊 熏 徇 浚 殉 驯 鲟 薰 荀 浔 洵 峋 埙 巽 郇 醺 恂 荨 窨 蕈 曛 獯",huang:"黄 荒 煌 皇 凰 慌 晃 潢 谎 惶 簧 璜 恍 幌 湟 蝗 磺 隍 徨 遑 肓 篁 鳇 蟥 癀",nai:"能 乃 奶 耐 奈 鼐 萘 氖 柰 佴 艿",luan:"乱 卵 滦 峦 鸾 栾 銮 挛 孪 脔 娈",qie:"切 且 契 窃 茄 砌 锲 怯 伽 惬 妾 趄 挈 郄 箧 慊",jian:"建 间 件 见 坚 检 健 监 减 简 艰 践 兼 鉴 键 渐 柬 剑 尖 肩 舰 荐 箭 浅 剪 俭 碱 茧 奸 歼 拣 捡 煎 贱 溅 槛 涧 堑 笺 谏 饯 锏 缄 睑 謇 蹇 腱 菅 翦 戬 毽 笕 犍 硷 鞯 牮 枧 湔 鲣 囝 裥 踺 搛 缣 鹣 蒹 谫 僭 戋 趼 楗",nan:"南 难 男 楠 喃 囡 赧 腩 囝 蝻",qian:"前 千 钱 签 潜 迁 欠 纤 牵 浅 遣 谦 乾 铅 歉 黔 谴 嵌 倩 钳 茜 虔 堑 钎 骞 阡 掮 钤 扦 芊 犍 荨 仟 芡 悭 缱 佥 愆 褰 凵 肷 岍 搴 箝 慊 椠",qiang:"强 抢 疆 墙 枪 腔 锵 呛 羌 蔷 襁 羟 跄 樯 戕 嫱 戗 炝 镪 锖 蜣",xiang:"向 项 相 想 乡 象 响 香 降 像 享 箱 羊 祥 湘 详 橡 巷 翔 襄 厢 镶 飨 饷 缃 骧 芗 庠 鲞 葙 蟓",jiao:"教 交 较 校 角 觉 叫 脚 缴 胶 轿 郊 焦 骄 浇 椒 礁 佼 蕉 娇 矫 搅 绞 酵 剿 嚼 饺 窖 跤 蛟 侥 狡 姣 皎 茭 峤 铰 醮 鲛 湫 徼 鹪 僬 噍 艽 挢 敫",zhuo:"着 著 缴 桌 卓 捉 琢 灼 浊 酌 拙 茁 涿 镯 淖 啄 濯 焯 倬 擢 斫 棹 诼 浞 禚",qiao:"桥 乔 侨 巧 悄 敲 俏 壳 雀 瞧 翘 窍 峭 锹 撬 荞 跷 樵 憔 鞘 橇 峤 诮 谯 愀 鞒 硗 劁 缲",xiao:"小 效 销 消 校 晓 笑 肖 削 孝 萧 俏 潇 硝 宵 啸 嚣 霄 淆 哮 筱 逍 姣 箫 骁 枭 哓 绡 蛸 崤 枵 魈",si:"司 四 思 斯 食 私 死 似 丝 饲 寺 肆 撕 泗 伺 嗣 祀 厮 驷 嘶 锶 俟 巳 蛳 咝 耜 笥 纟 糸 鸶 缌 澌 姒 汜 厶 兕",kai:"开 凯 慨 岂 楷 恺 揩 锴 铠 忾 垲 剀 锎 蒈",jin:"进 金 今 近 仅 紧 尽 津 斤 禁 锦 劲 晋 谨 筋 巾 浸 襟 靳 瑾 烬 缙 钅 矜 觐 堇 馑 荩 噤 廑 妗 槿 赆 衿 卺",qin:"亲 勤 侵 秦 钦 琴 禽 芹 沁 寝 擒 覃 噙 矜 嗪 揿 溱 芩 衾 廑 锓 吣 檎 螓",jing:"经 京 精 境 竞 景 警 竟 井 惊 径 静 劲 敬 净 镜 睛 晶 颈 荆 兢 靖 泾 憬 鲸 茎 腈 菁 胫 阱 旌 粳 靓 痉 箐 儆 迳 婧 肼 刭 弪 獍",ying:"应 营 影 英 景 迎 映 硬 盈 赢 颖 婴 鹰 荧 莹 樱 瑛 蝇 萦 莺 颍 膺 缨 瀛 楹 罂 荥 萤 鹦 滢 蓥 郢 茔 嘤 璎 嬴 瘿 媵 撄 潆",jiu:"就 究 九 酒 久 救 旧 纠 舅 灸 疚 揪 咎 韭 玖 臼 柩 赳 鸠 鹫 厩 啾 阄 桕 僦 鬏",zui:"最 罪 嘴 醉 咀 蕞 觜",juan:"卷 捐 圈 眷 娟 倦 绢 隽 镌 涓 鹃 鄄 蠲 狷 锩 桊",suan:"算 酸 蒜 狻",yun:"员 运 云 允 孕 蕴 韵 酝 耘 晕 匀 芸 陨 纭 郧 筠 恽 韫 郓 氲 殒 愠 昀 菀 狁",qun:"群 裙 逡 麇",ka:"卡 喀 咖 咔 咯 佧 胩",kang:"康 抗 扛 慷 炕 亢 糠 伉 钪 闶",keng:"坑 铿 吭",kao:"考 靠 烤 拷 铐 栲 尻 犒",ken:"肯 垦 恳 啃 龈 裉",yin:"因 引 银 印 音 饮 阴 隐 姻 殷 淫 尹 荫 吟 瘾 寅 茵 圻 垠 鄞 湮 蚓 氤 胤 龈 窨 喑 铟 洇 狺 夤 廴 吲 霪 茚 堙",kong:"空 控 孔 恐 倥 崆 箜",ku:"苦 库 哭 酷 裤 枯 窟 挎 骷 堀 绔 刳 喾",kua:"跨 夸 垮 挎 胯 侉",kui:"亏 奎 愧 魁 馈 溃 匮 葵 窥 盔 逵 睽 馗 聩 喟 夔 篑 岿 喹 揆 隗 傀 暌 跬 蒉 愦 悝 蝰",kuan:"款 宽 髋",kuang:"况 矿 框 狂 旷 眶 匡 筐 邝 圹 哐 贶 夼 诳 诓 纩",que:"确 却 缺 雀 鹊 阙 瘸 榷 炔 阕 悫",kun:"困 昆 坤 捆 琨 锟 鲲 醌 髡 悃 阃",kuo:"扩 括 阔 廓 蛞",la:"拉 落 垃 腊 啦 辣 蜡 喇 剌 旯 砬 邋 瘌",lai:"来 莱 赖 睐 徕 籁 涞 赉 濑 癞 崃 疠 铼",lan:"兰 览 蓝 篮 栏 岚 烂 滥 缆 揽 澜 拦 懒 榄 斓 婪 阑 褴 罱 啉 谰 镧 漤",lin:"林 临 邻 赁 琳 磷 淋 麟 霖 鳞 凛 拎 遴 蔺 吝 粼 嶙 躏 廪 檩 啉 辚 膦 瞵 懔",lang:"浪 朗 郎 廊 狼 琅 榔 螂 阆 锒 莨 啷 蒗 稂",liang:"量 两 粮 良 辆 亮 梁 凉 谅 粱 晾 靓 踉 莨 椋 魉 墚",lao:"老 劳 落 络 牢 捞 涝 烙 姥 佬 崂 唠 酪 潦 痨 醪 铑 铹 栳 耢",mu:"目 模 木 亩 幕 母 牧 莫 穆 姆 墓 慕 牟 牡 募 睦 缪 沐 暮 拇 姥 钼 苜 仫 毪 坶",le:"了 乐 勒 肋 叻 鳓 嘞 仂 泐",lei:"类 累 雷 勒 泪 蕾 垒 磊 擂 镭 肋 羸 耒 儡 嫘 缧 酹 嘞 诔 檑",sui:"随 岁 虽 碎 尿 隧 遂 髓 穗 绥 隋 邃 睢 祟 濉 燧 谇 眭 荽",lie:"列 烈 劣 裂 猎 冽 咧 趔 洌 鬣 埒 捩 躐",leng:"冷 愣 棱 楞 塄",ling:"领 令 另 零 灵 龄 陵 岭 凌 玲 铃 菱 棱 伶 羚 苓 聆 翎 泠 瓴 囹 绫 呤 棂 蛉 酃 鲮 柃",lia:"俩",liao:"了 料 疗 辽 廖 聊 寥 缪 僚 燎 缭 撂 撩 嘹 潦 镣 寮 蓼 獠 钌 尥 鹩",liu:"流 刘 六 留 柳 瘤 硫 溜 碌 浏 榴 琉 馏 遛 鎏 骝 绺 镏 旒 熘 鹨 锍",lun:"论 轮 伦 仑 纶 沦 抡 囵",lv:"率 律 旅 绿 虑 履 吕 铝 屡 氯 缕 滤 侣 驴 榈 闾 偻 褛 捋 膂 稆",lou:"楼 露 漏 陋 娄 搂 篓 喽 镂 偻 瘘 髅 耧 蝼 嵝 蒌",mao:"贸 毛 矛 冒 貌 茂 茅 帽 猫 髦 锚 懋 袤 牦 卯 铆 耄 峁 瑁 蟊 茆 蝥 旄 泖 昴 瞀",long:"龙 隆 弄 垄 笼 拢 聋 陇 胧 珑 窿 茏 咙 砻 垅 泷 栊 癃",nong:"农 浓 弄 脓 侬 哝",shuang:"双 爽 霜 孀 泷",shu:"术 书 数 属 树 输 束 述 署 朱 熟 殊 蔬 舒 疏 鼠 淑 叔 暑 枢 墅 俞 曙 抒 竖 蜀 薯 梳 戍 恕 孰 沭 赎 庶 漱 塾 倏 澍 纾 姝 菽 黍 腧 秫 毹 殳 疋 摅",shuai:"率 衰 帅 摔 甩 蟀",lve:"略 掠 锊",ma:"么 马 吗 摩 麻 码 妈 玛 嘛 骂 抹 蚂 唛 蟆 犸 杩",me:"么 麽",mai:"买 卖 麦 迈 脉 埋 霾 荬 劢",man:"满 慢 曼 漫 埋 蔓 瞒 蛮 鳗 馒 幔 谩 螨 熳 缦 镘 颟 墁 鞔",mi:"米 密 秘 迷 弥 蜜 谜 觅 靡 泌 眯 麋 猕 谧 咪 糜 宓 汨 醚 嘧 弭 脒 冖 幂 祢 縻 蘼 芈 糸 敉",men:"们 门 闷 瞒 汶 扪 焖 懑 鞔 钔",mang:"忙 盲 茫 芒 氓 莽 蟒 邙 硭 漭",meng:"蒙 盟 梦 猛 孟 萌 氓 朦 锰 檬 勐 懵 蟒 蜢 虻 黾 蠓 艨 甍 艋 瞢 礞",miao:"苗 秒 妙 描 庙 瞄 缪 渺 淼 藐 缈 邈 鹋 杪 眇 喵",mou:"某 谋 牟 缪 眸 哞 鍪 蛑 侔 厶",miu:"缪 谬",mei:"美 没 每 煤 梅 媒 枚 妹 眉 魅 霉 昧 媚 玫 酶 镁 湄 寐 莓 袂 楣 糜 嵋 镅 浼 猸 鹛",wen:"文 问 闻 稳 温 纹 吻 蚊 雯 紊 瘟 汶 韫 刎 璺 玟 阌",mie:"灭 蔑 篾 乜 咩 蠛",ming:"明 名 命 鸣 铭 冥 茗 溟 酩 瞑 螟 暝",na:"内 南 那 纳 拿 哪 娜 钠 呐 捺 衲 镎 肭",nei:"内 那 哪 馁",nuo:"难 诺 挪 娜 糯 懦 傩 喏 搦 锘",ruo:"若 弱 偌 箬",nang:"囊 馕 囔 曩 攮",nao:"脑 闹 恼 挠 瑙 淖 孬 垴 铙 桡 呶 硇 猱 蛲",ni:"你 尼 呢 泥 疑 拟 逆 倪 妮 腻 匿 霓 溺 旎 昵 坭 铌 鲵 伲 怩 睨 猊",nen:"嫩 恁",neng:"能",nin:"您 恁",niao:"鸟 尿 溺 袅 脲 茑 嬲",nie:"摄 聂 捏 涅 镍 孽 捻 蘖 啮 蹑 嗫 臬 镊 颞 乜 陧",niang:"娘 酿",ning:"宁 凝 拧 泞 柠 咛 狞 佞 聍 甯",nu:"努 怒 奴 弩 驽 帑 孥 胬",nv:"女 钕 衄 恧",ru:"入 如 女 乳 儒 辱 汝 茹 褥 孺 濡 蠕 嚅 缛 溽 铷 洳 薷 襦 颥 蓐",nuan:"暖",nve:"虐 疟",re:"热 若 惹 喏",ou:"区 欧 偶 殴 呕 禺 藕 讴 鸥 瓯 沤 耦 怄",pao:"跑 炮 泡 抛 刨 袍 咆 疱 庖 狍 匏 脬",pou:"剖 掊 裒",pen:"喷 盆 湓",pie:"瞥 撇 苤 氕 丿",pin:"品 贫 聘 频 拼 拚 颦 姘 嫔 榀 牝",se:"色 塞 瑟 涩 啬 穑 铯 槭",qing:"情 青 清 请 亲 轻 庆 倾 顷 卿 晴 氢 擎 氰 罄 磬 蜻 箐 鲭 綮 苘 黥 圊 檠 謦",zan:"赞 暂 攒 堑 昝 簪 糌 瓒 錾 趱 拶",shao:"少 绍 召 烧 稍 邵 哨 韶 捎 勺 梢 鞘 芍 苕 劭 艄 筲 杓 潲",sao:"扫 骚 嫂 梢 缫 搔 瘙 臊 埽 缲 鳋",sha:"沙 厦 杀 纱 砂 啥 莎 刹 杉 傻 煞 鲨 霎 嗄 痧 裟 挲 铩 唼 歃",xuan:"县 选 宣 券 旋 悬 轩 喧 玄 绚 渲 璇 炫 萱 癣 漩 眩 暄 煊 铉 楦 泫 谖 痃 碹 揎 镟 儇",ran:"然 染 燃 冉 苒 髯 蚺",rang:"让 壤 攘 嚷 瓤 穰 禳",rao:"绕 扰 饶 娆 桡 荛",reng:"仍 扔",ri:"日",rou:"肉 柔 揉 糅 鞣 蹂",ruan:"软 阮 朊",run:"润 闰",sa:"萨 洒 撒 飒 卅 仨 脎",suo:"所 些 索 缩 锁 莎 梭 琐 嗦 唆 唢 娑 蓑 羧 挲 桫 嗍 睃",sai:"思 赛 塞 腮 噻 鳃",shui:"说 水 税 谁 睡 氵",sang:"桑 丧 嗓 搡 颡 磉",sen:"森",seng:"僧",shai:"筛 晒",shang:"上 商 尚 伤 赏 汤 裳 墒 晌 垧 觞 殇 熵 绱",xing:"行 省 星 腥 猩 惺 兴 刑 型 形 邢 饧 醒 幸 杏 性 姓 陉 荇 荥 擤 悻 硎",shou:"收 手 受 首 售 授 守 寿 瘦 兽 狩 绶 艏 扌",shuo:"说 数 硕 烁 朔 铄 妁 槊 蒴 搠",su:"速 素 苏 诉 缩 塑 肃 俗 宿 粟 溯 酥 夙 愫 簌 稣 僳 谡 涑 蔌 嗉 觫",shua:"刷 耍 唰",shuan:"栓 拴 涮 闩",shun:"顺 瞬 舜 吮",song:"送 松 宋 讼 颂 耸 诵 嵩 淞 怂 悚 崧 凇 忪 竦 菘",sou:"艘 搜 擞 嗽 嗖 叟 馊 薮 飕 嗾 溲 锼 螋 瞍",sun:"损 孙 笋 荪 榫 隼 狲 飧",teng:"腾 疼 藤 滕 誊",tie:"铁 贴 帖 餮 萜",tu:"土 突 图 途 徒 涂 吐 屠 兔 秃 凸 荼 钍 菟 堍 酴",wai:"外 歪 崴",wang:"王 望 往 网 忘 亡 旺 汪 枉 妄 惘 罔 辋 魍",weng:"翁 嗡 瓮 蓊 蕹",zhua:"抓 挝 爪",yang:"样 养 央 阳 洋 扬 杨 羊 详 氧 仰 秧 痒 漾 疡 泱 殃 恙 鸯 徉 佯 怏 炀 烊 鞅 蛘",xiong:"雄 兄 熊 胸 凶 匈 汹 芎",yo:"哟 唷",yong:"用 永 拥 勇 涌 泳 庸 俑 踊 佣 咏 雍 甬 镛 臃 邕 蛹 恿 慵 壅 痈 鳙 墉 饔 喁",za:"杂 扎 咱 砸 咋 匝 咂 拶",zai:"在 再 灾 载 栽 仔 宰 哉 崽 甾",zao:"造 早 遭 枣 噪 灶 燥 糟 凿 躁 藻 皂 澡 蚤 唣",zei:"贼",zen:"怎 谮",zeng:"增 曾 综 赠 憎 锃 甑 罾 缯",zhei:"这",zou:"走 邹 奏 揍 诹 驺 陬 楱 鄹 鲰",zhuai:"转 拽",zun:"尊 遵 鳟 樽 撙",dia:"嗲",nou:"耨"}},h={layout:{default:["; + ě š č ř ž ý á í é ´ {bksp}","{tab} q w e r t y u i o p ú ) ¨","{lock} a s d f g h j k l ů § {enter}","{shift} \\ z x c v b n m , . - {shift}",".com @ {space}"],shift:["° 1 2 3 4 5 6 7 8 9 0 % ˇ {bksp}","{tab} Q W E R T Y U I O P / ( '",'{lock} A S D F G H J K L " ! {enter}',"{shift} | Z X C V B N M ? : _ {shift}",".com @ {space}"]}},u={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}},f={layout:{default:["` ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰ - = {bksp}","{tab} ض ص ث ق ف غ ع ه خ ح ج چ \\","{lock} ش س ی ب ل ا ت ن م ک گ {enter}","{shift} ظ ط ز ر ذ د پ و . / {shift}",".com @ {space}"],shift:["÷ ! ٬ ٫ ﷼ ٪ × ۷ * ) ( ـ + {bksp}","{tab} ْ ٌ ٍ ً ُ ِ َ ّ ] [ } {","{lock} ؤ ئ ي إ أ آ ة » « : ؛ {enter}","{shift} ك ٓ ژ ٰ ‌ ٔ ء < > ؟ {shift}",".com @ {space}"]}},l={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 ° + {bksp}","{tab} a z e r t y u i o p ^ $","{lock} q s d f g h j k l m ù * {enter}","{shift} < w x c v b n , ; : ! {shift}",".com @ {space}"],shift:["² & é \" ' ( - è _ ç à ) = {bksp}","{tab} A Z E R T Y U I O P ¨ £","{lock} Q S D F G H J K L M % µ {enter}","{shift} > W X C V B N ? . / § {shift}",".com @ {space}"]}},p={layout:{default:["„ 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} ქ წ ე რ ტ ყ უ ი ო პ [ ] \\","{lock} ა ს დ ფ გ ჰ ჯ კ ლ ; ' {enter}","{shift} ზ ხ ც ვ ბ ნ მ , . / {shift}",".com @ {space}"],shift:["“ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} ქ ჭ ე ღ თ ყ უ ი ო პ { } | ~",'{lock} ა შ დ ფ გ ჰ ჟ კ ₾ : " {enter}',"{shift} ძ ხ ჩ ვ ბ ნ მ < > ? {shift}",".com @ {space}"]}},b={layout:{default:["^ 1 2 3 4 5 6 7 8 9 0 ß ´ {bksp}","{tab} q w e r t z u i o p ü +","{lock} a s d f g h j k l ö ä # {enter}","{shift} < y x c v b n m , . - {shift}",".com @ {space}"],shift:['° ! " § $ % & / ( ) = ? ` {bksp}',"{tab} Q W E R T Z U I O P Ü *","{lock} A S D F G H J K L Ö Ä ' {enter}","{shift} > Y X C V B N M ; : _ {shift}",".com @ {space}"]}},k={layout:{default:["ٚ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰ - = {bksp}","{tab} ض ص ئ ق ف غ ع ه خ ح ج چ أ","{lock} ش س ي ب ل ا ت ن م ک گ {enter}","{shift} ؤ ۊ ز ر ذ د پ و . / {shift}",".com @ {space}"],shift:["ˇ ! @ # ﷼ ٪ × ، * ) ( ـ + {bksp}","{tab} ك ة ث َ ^ ° ُ ÷ ] [ } { ٰ","{lock} ۋ ً ی ِ ' آ ى , \\ : ؛ {enter}",'{shift} ظ ط ژ " ٔ » « < > ؟ {shift}',".com @ {space}"]}},r={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} ; ς ε ρ τ υ θ ι ο π [ ] \\","{lock} α σ δ φ γ η ξ κ λ ΄ ' {enter}","{shift} < ζ χ ψ ω β ν μ , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} : ΅ Ε Ρ Τ Υ Θ Ι Ο Π { } |",'{lock} Α Σ Δ Φ Γ Η Ξ Κ Λ ¨ " {enter}',"{shift} > Ζ Χ Ψ Ω Β Ν Μ < > ? {shift}",".com @ {space}"]}},g={layout:{default:[" 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} / ' ק ר א ט ו ן ם פ ] [ :","{lock} ש ד ג כ ע י ח ל ך ף , {enter}","{shift} ז ס ב ה נ מ צ ת ץ . {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}},m={layout:{default:["` ऍ ॅ ्र र् ज्ञ त्र क्ष श्र ९ ० - ृ {bksp}","{tab} ौ ै ा ी ू ब ह ग द ज ड ़ ॉ \\","{lock} ो े ् ि ु प र क त च ट {enter}","{shift} ं म न व ल स , . य {shift}",".com @ {space}"],shift:["~ १ २ ३ ४ ५ ६ ७ ८ ९ ० ः ऋ {bksp}","{tab} औ ऐ आ ई ऊ भ ङ घ ध झ ढ ञ ऑ","{lock} ओ ए अ इ उ फ ऱ ख थ छ ठ {enter}",'{shift} "" ँ ण न व ळ श ष । य़ {shift}',".com @ {space}"]}},d={layout:{default:["\\ 1 2 3 4 5 6 7 8 9 0 ' ì {bksp}","{tab} q w e r t y u i o p è +","{lock} a s d f g h j k l ò à ù {enter}","{shift} < z x c v b n m , . - {shift}",".com @ {space}"],shift:['| ! " £ $ % & / ( ) = ? ^ {bksp}',"{tab} Q W E R T Y U I O P é *","{lock} A S D F G H J K L ç ° § {enter}","{shift} > Z X C V B N M ; : _ {shift}",".com @ {space}"]}},y={layout:{default:["1 2 3 4 5 6 7 8 9 0 - ^ ¥ {bksp}","{tab} た て い す か ん な に ら せ ゛ ゜ む","{lock} ち と し は き く ま の り れ け {enter}","{shift} つ さ そ ひ こ み も ね る め {shift}",".com @ {space}"],shift:["! \" # $ % & ' ( ) ́ = ~ | {bksp}","{tab} た て ぃ す か ん な に ら せ 「 」 む","{lock} ち と し は き く ま の り れ け {enter}","{shift} っ さ そ ひ こ み も 、 。 ・ {shift}",".com @ {space}"]}},z={layout:{default:["ೊ 1 2 3 4 5 6 7 8 9 0 - ೃ {bksp}","{tab} ೌ ೈ ಾ ೀ ೂ ಬ ಹ ಗ ದ ಜ ಡ","ೋ ೇ ್ ಿ ು ಪ ರ ಕ ತ ಚ ಟ {enter}","{shift} ೆ ಂ ಮ ನ ವ ಲ ಸ , . / {shift}",".com @ {space}"],shift:["ಒ ್ರ ರ್ ಜ್ಞ ತ್ರ ಕ್ಷ ಶ್ರ ( ) ಃ ಋ {bksp}","{tab} ಔ ಐ ಆ ಈ ಊ ಭ ಙ ಘ ಧ ಝ ಢ ಞ","ಓ ಏ ಅ ಇ ಉ ಫ ಱ ಖ ಥ ಛ ಠ {enter}","{shift} ಎ ಣ ಳ ಶ ಷ | / {shift}",".com @ {space}"]}},j={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} ᄇ ᄌ ᄃ ᄀ ᄉ ᅭ ᅧ ᅣ ᅢ ᅦ [ ] ₩","{lock} ᄆ ᄂ ᄋ ᄅ ᄒ ᅩ ᅥ ᅡ ᅵ ; ' {enter}","{shift} ᄏ ᄐ ᄎ ᄑ ᅲ ᅮ ᅳ , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} ᄈ ᄍ ᄄ ᄁ ᄊ ᅭ ᅧ ᅣ ᅤ ᅨ { } |",'{lock} ᄆ ᄂ ᄋ ᄅ ᄒ ᅩ ᅥ ᅡ ᅵ : " {enter}',"{shift} ᄏ ᄐ ᄎ ᄑ ᅲ ᅮ ᅳ < > ? {shift}",".com @ {space}"]}},x={layout:{default:["ˊ 1 2 3 4 5 6 7 8 9 0 ɗ ƙ {bksp}","{tab} q w e r t y u i o p ụ ị","{lock} a s d f g h j k l ọ ẹ ǝ {enter}","{shift} z y x c v b n m , . ṣ {shift}",".com @ {space}"],shift:['ˆ ! " / _ ₦ % = - | ( ) Ɗ Ƙ {bksp}',"{tab} Q W E R T Y U I O P Ụ Ị","{lock} A S D F G H J K L Ọ Ẹ Ǝ {enter}","{shift} Z Ɓ C V B N M ; : Ṣ {shift}",".com @ {space}"]}},w={layout:{default:["§ 1 2 3 4 5 6 7 8 9 0 + ´ {bksp}","{tab} q w e r t y u i o p å ¨","{lock} a s d f g h j k l ø æ ' {enter}","{shift} < z x c v b n m , . - {shift}",".com @ {space}"],shift:['° ! " # $ % & / ( ) = ? ` {bksp}',"{tab} Q W E R T Y U I O P Å ^","{lock} A S D F G H J K L Ø Æ * {enter}","{shift} > Z X C V B N M ; : _ {shift}",".com @ {space}"]}},q={layout:{default:["˛ 1 2 3 4 5 6 7 8 9 0 + ' {bksp}","{tab} q w e r t z u i o p ż ś","{lock} a s d f g h j k l ł ą ó {enter}","{shift} < y x c v b n m , . - {shift}",".com @ {space}"],shift:['· ! " # ¤ % & / ( ) = ? * {bksp}',"{tab} Q W E R T Z U I O P ń ć","{lock} A S D F G H J K L Ł ę ź {enter}","{shift} > Y X C V B N M ; : _ {shift}",".com @ {space}"]}},_={layout:{default:["ё 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} й ц у к е н г ш щ з х ъ \\","{lock} ф ы в а п р о л д ж э {enter}","{shift} / я ч с м и т ь б ю . {shift}",".com @ {space}"],shift:['Ё ! " № ; % : ? * ( ) _ + {bksp}',"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ /","{lock} Ф Ы В А П Р О Л Д Ж Э {enter}","{shift} | Я Ч С М И Т Ь Б Ю , {shift}",".com @ {space}"]}},v={layout:{default:["ё 1 2 3 4 5 6 7 8 9 0 ц э {bksp}","{tab} й i у к е н г ш щ з х ѳ \\","{lock} ф ы в ъ а п р о л д ж ѵ {enter}","{shift} / я ѣ ч с м и т ь б ю . {shift}",".com @ {space}"],shift:['Ё ! " № ; % : ? * ( ) Ц Э {bksp}',"{tab} Й I У К Е Н Г Ш Щ З Х Ѳ /","{lock} Ф Ы В Ъ А П Р О Л Д Ж Ѵ {enter}","{shift} | Я Ѣ Ч С М И Т Ь Б Ю , {shift}",".com @ {space}"]}},O={layout:{default:["` ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٠ - = {bksp}","{tab} ق ﻭ ع ر ت ڀ ء ي ﮦ پ [ ]","{lock} ا س د ف گ ھ ج ک ل ؛ ، {enter}","{shift} ز ش چ ط ب ن م ڇ , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ ٪ ^ & * ( ) _ + {bksp}","{tab} ﹰ ڌ ڪ ڙ ٽ ﹺ ﻻ ﺋ ڦ | { }","{lock} ٻ ص ڊ ؍ غ ح ض خ ۔ ܃ ״ {enter}","{shift} ذ ٿ ث ظ ٺ ٫ ـ < > ؟ {shift}",".com @ {space}"]}},S={layout:{default:["| 1 2 3 4 5 6 7 8 9 0 ' ¿ {bksp}","{tab} q w e r t y u i o p ́ +","{lock} a s d f g h j k l ñ { } {enter}","{shift} < z x c v b n m , . - {shift}",".com @ {space}"],shift:['° ! " # $ % & / ( ) = ? ¡ {bksp}',"{tab} Q W E R T Y U I O P ̈ *","{lock} A S D F G H J K L Ñ [ ] {enter}","{shift} > Z X C V B N M ; : _ {shift}",".com @ {space}"]}},$={layout:{default:["§ 1 2 3 4 5 6 7 8 9 0 + ´ {bksp}","{tab} q w e r t y u i o p å ¨","{lock} a s d f g h j k l ö ä ' {enter}","{shift} < z x c v b n m , . - {shift}",".com @ {space}"],shift:['° ! " # $ % & / ( ) = ? ` {bksp}',"{tab} Q W E R T Y U I O P Å ^","{lock} A S D F G H J K L Ö Ä * {enter}","{shift} > Z X C V B N M ; : _ {shift}",".com @ {space}"]}},P={layout:{default:["_ ๅ / - ภ ถ ุ ึ ค ฅ จ ข ช {bksp}","{tab} ๆ ไ ำ พ ะ ั ี ร น ย บ ล ฃ","{lock} ฟ ห ก ด เ ้ ่ า ส ว ง {enter}","{shift} ผ ป แ อ ิ ื ท ม ใ ฝ {shift}",".com @ {space}"],shift:["% + ๑ ๒ ๓ ๔ ู ฿ ๕ ๖ ๗ ๘ ๙ {bksp}",'{tab} ๐ " ฎ ฑ ธ ํ ๊ ณ ฯ ญ ฐ , ฅ',"{lock} ฤ ฆ ฏ โ ฌ ็ ๋ ษ ศ ซ . {enter}","{shift} ( ) ฉ ฮ ฺ ์ ? ฒ ฬ ฦ {shift}",".com @ {space}"]}},T={layout:{default:['" 1 2 3 4 5 6 7 8 9 0 * - # {bksp}',"{tab} q w e r t y u ı o p ğ ü [ ]","{lock} a s d f g h j k l ş i , {enter}","{shift} < z x c v b n m ö ç . | $ € {shift}",".com @ {space}"],shift:["é ! ' ^ + % & / ( ) = ? _ ~ {bksp}","{tab} Q W E R T Y U I O P Ğ Ü { }","{lock} A S D F G H J K L Ş İ ; {enter}","{shift} > Z X C V B N M Ö Ç : \\ ` ´ {shift}",".com @ {space}"]}},C={layout:{default:["' 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} й ц у к е н г ш щ з х ї ґ \\","{lock} ф і в а п р о л д ж є {enter}","{shift} / я ч с м и т ь б ю . {shift}",".com @ {space}"],shift:['₴ ! " № ; % : ? * ( ) _ + {bksp}',"{tab} Й Ц У К Е Н Г Ш Щ З Х Ї Ґ /","{lock} Ф І В А П Р О Л Д Ж Є {enter}","{shift} | Я Ч С М И Т Ь Б Ю , {shift}",".com @ {space}"]}},K={layout:{default:["` ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٠ - = {bksp}","{tab} ق ﻭ ع ر ت ے ء ى ﮦ پ [ ]","{lock} ا س د ف گ ھ ج ک ل ؛ ، {enter}","{shift} ز ش چ ط ب ن م ۤ , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ ٪ ^ & * ( ) _ + {bksp}","{tab} ﹰ ﹷ ﹹ ڑ ٹ ﹺ ﻻ ﺋ ة | { }","{lock} آ ص ڈ ؍ غ ح ض خ ۔ ܃ ״ {enter}","{shift} ذ ژ ث ظ ں ٫ ـ < > ؟ {shift}",".com @ {space}"]}},L={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} چ ۋ ې ر ت ي ۇ ڭ و پ ] [ /","{lock} ھ س د ا ە ى ق ك ل ؛ : {enter}","{shift} ز ش غ ۈ ب ن م ، . ئ {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ) ( - + {bksp}","{tab} چ ۋ ې ر ت ي ۇ ڭ و » « \\","{lock} ھ س ژ ف گ خ ج ۆ ل ؛ | {enter}","{shift} ز ش غ ۈ ب ن م ‹ › ؟ {shift}",".com @ {space}"]}};function M(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var E=function t(){var a=this;!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,"layouts",{arabic:e,assamese:s,belarusian:i,bengali:n,burmese:o,chinese:c,czech:h,english:u,farsi:f,french:l,georgian:p,german:b,gilaki:k,greek:r,hebrew:g,hindi:m,italian:d,japanese:y,kannada:z,korean:j,nigerian:x,norwegian:w,polish:q,russian:_,russianOld:v,sindhi:O,spanish:S,swedish:$,thai:P,turkish:T,ukrainian:C,urdu:K,uyghur:L}),M(this,"get",(function(t){return t?a.layouts[t]:a.layouts}))};return a}()}));