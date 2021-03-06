﻿var strings = new Array();

strings['pt-BR'] =  {
     tutorial1:"Hey! Vamos começar!<br/>Primeiro, você NUNCA pode tocar no bloco <b>PRETO</b>. Se você tocar... Game Over :("
    ,tutorial2:"Este é o primeiro bloco, ele deve ser o primeiro a ser tocado para iniciar o jogo <br/>Mas cuidado, uma vez que você tocou no bloco <b>AZUL</b>, não pode mais tirar o dedo até passar de fase ok?"
    ,tutorial3:"No bloco normal você pode deslizar o dedo livremente, MAS somente uma vez<br/>o que significa que passando por esse bloco <b>BRANCO</b> você não poderá retornar por ele"
    ,tutorial4:"Este é o bloco conhecido como bloco de passagem<br/>O numero dentro do bloco e a cor indicam quantas vezes você DEVE deslizar o dedo sobre ele para terminar a partida!"
    ,tutorial5:"Este bloco é igual ao anterior, porém, você DEVE passar 3 vezes por ele!"
    ,tutorial6:"Aqui você pode verificar a fase que está e os pontos que já fez. Algumas fases possuem tempo para o termino, então corra como se não houvesse amanhã!"
    ,tutorial7:"Um último aviso: Você só pode tocar nos blocos a esquerda, direita, cima e baixo de onde seu dedo está, <b>NUNCA NAS DIAGONAIS</b>"
    ,tutorial8:"Vamos tentar!<br/>Na próxima tela, toque no bloco <b>AZUL</b> e deslize o dedo nos outros blocos"
    ,gameOverTitle:"Game over :("
    ,gameOverTouchEnd:"Uma vez que você toca na tela, não pode tirar o dedo da tela durante a partida"
    ,gameOverTimeOver:"Seu tempo acabou"
    ,gameOverWrong:"Você não pode tocar neste bloco agora"
    ,passLevelTitle:"Muito bom!"
    ,passLevelMessage:"Você passou para a próxima fase!"
    ,passTutorialMessage:"Você passou do tutorial! Daqui para frente é com você. BOA SORTE!"
    ,playBtn:"Jogar"
    ,tutorialBtn:"Tutorial"
    ,levelLabel:"Fase"
    ,scoreLabel:"Pontos"
    ,timerLabel:"Tempo"
    ,nextBtn:"Próximo"
    ,finishBtn:"Fim"
	,experienceTip:"Melhor experiência em navegadores mobile"
	,winTitle:"\\o/ PARABÉNS \\o/"
	,winMessage:"Você terminou o game! Não deixe de enviar o seu feedback para wd.cristian@gmail.com"
}

strings['en-EN'] = {
     tutorial1:"Hey! Let's start!<br/>First, you never can touch in <b>BLACK</b> blocks. If you touch... Game Over :("
    ,tutorial2:"This block is the first block, you must place your finger here to start<br/>But take care, when you touch <b>BLUE</b> block, you can't remove your finger from the screen until next stage ok?"
    ,tutorial3:"The normal block is free to touch, BUT... just one time<br/> which means that if you cross this <b>WHITE</b> block, you can not return it"
    ,tutorial4:"This is a pass block, the number in the block and the color indicate how many times you MUST cross this block"
    ,tutorial5:"The same of last block, but you MUST cross three times!"
    ,tutorial6:"Here you can check your level, points and in some levels, you'll face a timer to finish the level! Run! Run like there's no tomorrow"
    ,tutorial7:"One last warning: You can only play the blocks left, right, up and down where your finger is, <b> NEVER IN DIAGONAL </b>"
    ,tutorial8:"Let's try!<br/> In the next screen, touch in <b>BLUE</b> block and swipe to other blocks"
    ,gameOverTitle:"Game over :("
    ,gameOverTouchEnd:"You can not take your finger from the screen during the game"
    ,gameOverTimeOver:"Time is over"
    ,gameOverWrong:"You can not touch this block right now"
    ,passLevelTitle:"Good job!"
    ,passLevelMessage:"You pass to the next level!"
    ,passTutorialMessage:"You passed this tutorial! From now on, it's with you. GOOD LUCK!"
    ,playBtn:"play"
    ,tutorialBtn:"Tutorial"
    ,levelLabel:"Level"
    ,scoreLabel:"Score"
    ,timerLabel:"Timer"
    ,nextBtn:"Next"
    ,finishBtn:"Finish"
	,experienceTip:"Best experience in mobile browsers"
	,winTitle:"\\o/ CONGRATS \\o/"
	,winMessage:"You finished the game! please, share your feedback to wd.cristian@gmail.com"
}

var culture = (navigator.language || navigator.userLanguage) == 'pt-BR' ? 'pt-BR' : 'en-EN' ;
globals.culture = strings[culture];