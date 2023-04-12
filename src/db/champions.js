const champions = [

  {
    name: 'Aatrox',
    description: 'a Espada Darkin',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Aatrox.png'     
    }
  } ,
  
  {
    name: 'Ahri',
    description: 'a Raposa de Nove Caudas',
    tags: [ 'Mage', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',  
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ahri.png'       
    }
  } ,
  
  {
    name: 'Akali',
    description: 'a Assassina Renegada',
    tags: [ 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg', 
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Akali.png'      
    }
  } ,
  
  {
    name: 'Akshan',
    description: 'o Sentinela Rebelde',
    tags: [ 'Marksman', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Akshan.png'
    }
  } ,
  
  {
    name: 'Alistar',
    description: 'o Minotauro',
    tags: [ 'Tank', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Alistar.png'
    }
  } ,
  
  {
    name: 'Amumu',
    description: 'a Múmia Triste',
    tags: [ 'Tank', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Amumu.png'
    }
  } ,
  
  {
    name: 'Anivia',
    description: 'a Criofênix',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Anivia.png'
    }
  } ,
  
  {
    name: 'Annie',
    description: 'a Criança Sombria',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Annie.png'
    }
  } ,
  
  {
    name: 'Aphelios',
    description: 'a Arma dos Devotos',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Aphelios.png'
    }
  } ,
  
  {
    name: 'Ashe',
    description: 'a Arqueira do Gelo',
    tags: [ 'Marksman', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ashe.png'
    }
  } ,
  
  {
    name: 'AurelionSol',
    description: 'o Forjador de Estrelas',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/AurelionSol.png'
    }
  } ,
  
  {
    name: 'Azir',
    description: 'o Imperador das Areias',
    tags: [ 'Mage', 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Azir.png'
    }
  } ,
  
  {
    name: 'Bard',
    description: 'o Protetor Andarilho',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Bard.png'
    }
  } ,
  
  {
    name: 'Belveth',
    description: 'a Imperatriz do Vazio',
    tags: [ 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Belveth.png'
    }
  } ,
  
  {
    name: 'Blitzcrank',
    description: 'o Grande Golem a Vapor',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Blitzcrank.png'
    }
  } ,
  
  {
    name: 'Brand',
    description: 'a Vingança Flamejante',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Brand.png'
    }
  } ,
  
  {
    name: 'Braum',
    description: 'o Coração de Freljord',
    tags: [ 'Support', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Braum.png'
    }
  } ,
  
  {
    name: 'Caitlyn',
    description: 'a Xerife de Piltover',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Caitlyn.png'
    }
  } ,
  
  {
    name: 'Camille',
    description: 'a Sombra de Aço',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Camille.png'
    }
  } ,
  
  {
    name: 'Cassiopeia',
    description: 'o Abraço da Serpente',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Cassiopeia.png'
    }
  } ,
  
  {
    name: 'Chogath',
    description: 'o Terror do Vazio',
    tags: [ 'Tank', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Chogath.png'
    }
  } ,
  
  {
    name: 'Corki',
    description: 'o Bombardeiro Ousado',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Corki.png'
    }
  } ,
  
  {
    name: 'Darius',
    description: 'a Mão de Noxus',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Darius.png'
    }
  } ,
  
  {
    name: 'Diana',
    description: 'o Escárnio da Lua',
    tags: [ 'Fighter', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Diana.png'
    }
  } ,
  
  {
    name: 'Draven',
    description: 'o Carrasco de Noxus',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Draven.png'
    }
  } ,
  
  {
    name: 'DrMundo',
    description: 'o Louco de Zaun',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/DrMundo.png'
    }
  } ,
  
  {
    name: 'Ekko',
    description: 'o Rapaz que Estilhaçou o Tempo',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ekko.png'
    }
  } ,
  
  {
    name: 'Elise',
    description: 'a Aranha Rainha',
    tags: [ 'Mage', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Elise.png'
    }
  } ,
  
  {
    name: 'Evelynn',
    description: 'o Abraço da Agonia',
    tags: [ 'Assassin', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Evelynn.png'
    }
  } ,
  
  {
    name: 'Ezreal',
    description: 'o Explorador Pródigo',
    tags: [ 'Marksman', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ezreal.png'
    }
  } ,
  
  {
    name: 'Fiddlesticks',
    description: 'o Terror Ancestral',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Fiddlesticks.png'
    }
  } ,
  
  {
    name: 'Fiora',
    description: 'a Grande Duelista',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Fiora.png'
    }
  } ,
  
  {
    name: 'Fizz',
    description: 'o Trapaceiro das Marés',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Fizz.png'
    }
  } ,
  
  {
    name: 'Galio',
    description: 'o Colosso',
    tags: [ 'Tank', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Galio.png'
    }
  } ,
  
  {
    name: 'Gangplank',
    description: 'o Terror dos Doze Mares',
    tags: [ 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Gangplank.png'
    }
  } ,
  
  {
    name: 'Garen',
    description: 'o Poder de Demacia',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Garen.png'
    }
  } ,
  
  {
    name: 'Gnar',
    description: 'o Yordle Pré-Histórico',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Gnar.png'
    }
  } ,
  
  {
    name: 'Gragas',
    description: 'o Badernista',
    tags: [ 'Fighter', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Gragas.png'
    }
  } ,
  
  {
    name: 'Graves',
    description: 'o Foragido',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Graves.png'
    }
  } ,
  
  {
    name: 'Gwen',
    description: 'A Costureira Encantada',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Gwen.png'
    }
  } ,
  {
    name: 'Hecarim',
    description: 'a Sombra da Guerra',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg',     
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Hecarim.png'
    }
  } ,
  
  {
    name: 'Heimerdinger',
    description: 'o Inventor Idolatrado',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Heimerdinger.png'     
    }
  } ,
  
  {
    name: 'Illaoi',
    description: 'a Sacerdotisa Cráquem',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Illaoi.png'
    }
  } ,
  
  {
    name: 'Irelia',
    description: 'a Dançarina das Lâminas',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Irelia.png'
    }
  } ,
  
  {
    name: 'Ivern',
    description: 'o Pai do Verde',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ivern.png'
    }
  } ,
  
  {
    name: 'Janna',
    description: 'a Fúria da Tormenta',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Janna.png'
    }
  } ,
  
  {
    name: 'JarvanIV',
    description: 'o Exemplo de Demacia',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/JarvanIV.png'
    }
  } ,
  
  {
    name: 'Jax',
    description: 'o Grão-Mestre das Armas',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Jax.png'
    }
  } ,
  
  {
    name: 'Jayce',
    description: 'o Defensor do Amanhã',
    tags: [ 'Fighter', 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Jayce.png'
    }
  } ,
  
  {
    name: 'Jhin',
    description: 'o Virtuoso',
    tags: [ 'Marksman', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Jhin.png'
    }
  } ,
  
  {
    name: 'Jinx',
    description: 'o Gatilho Desenfreado',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Jinx.png'
    }
  } ,
  
  {
    name: 'Kaisa',
    description: 'a Filha do Vazio',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kaisa.png'
    }
  } ,
  
  {
    name: 'Kalista',
    description: 'a Lança da Vingança',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kalista.png'
    }
  } ,
  
  {
    name: 'Karma',
    description: 'a Iluminada',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Karma.png'
    }
  } ,
  
  {
    name: 'Karthus',
    description: 'a Voz Mortal',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Karthus.png'
    }
  } ,
  
  {
    name: 'Kassadin',
    description: 'o Andarilho do Vazio',
    tags: [ 'Assassin', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kassadin.png'
    }
  } ,
  
  {
    name: 'Katarina',
    description: 'a Lâmina Sinistra',
    tags: [ 'Assassin', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Katarina.png'
    }
  } ,
  
  {
    name: 'Kayle',
    description: 'a Justa',
    tags: [ 'Fighter', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kayle.png'
    }
  } ,
  
  {
    name: 'Kayn',
    description: 'o Ceifador das Sombras',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kayn.png'
    }
  } ,
  
  {
    name: 'Kennen',
    description: 'o Coração da Tempestade',
    tags: [ 'Mage', 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kennen.png'
    }
  } ,
  
  {
    name: 'Khazix',
    description: 'o Ceifador do Vazio',
    tags: [ 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Khazix.png'
    }
  } ,
  
  {
    name: 'Kindred',
    description: 'os Caçadores Eternos',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kindred.png'
    }
  } ,
  
  {
    name: 'Kled',
    description: 'o Cavaleiro Intratável',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Kled.png'
    }
  } ,
  
  {
    name: 'KogMaw',
    description: 'a Boca do Abismo',
    tags: [ 'Marksman', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/KogMaw.png'
    }
  } ,
  
  {
    name: 'KSante',
    description: 'o Orgulho de Nazumah.',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/KSante.png'
    }
  } ,
  
  {
    name: 'Leblanc',
    description: 'a Farsante',
    tags: [ 'Assassin', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Leblanc.png'
    }
  } ,
  
  {
    name: 'LeeSin',
    description: 'o Monge Cego',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/LeeSin.png'
    }
  } ,
  
  {
    name: 'Leona',
    description: 'a Alvorada Radiante',
    tags: [ 'Tank', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Leona.png'
    }
  } ,
  
  {
    name: 'Lillia',
    description: 'o Florir Receoso',
    tags: [ 'Fighter', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Lillia.png'
    }
  } ,
  
  {
    name: 'Lissandra',
    description: 'a Bruxa Gélida',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Lissandra.png'
    }
  } ,
  
  {
    name: 'Lucian',
    description: 'o Purificador',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Lucian.png'
    }
  } ,
  
  {
    name: 'Lulu',
    description: 'a Fada Feiticeira',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Lulu.png'
    }
  } ,
  
  {
    name: 'Lux',
    description: 'a Dama da Luz',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Lux.png'
    }
  } ,
  
  {
    name: 'Malphite',
    description: 'o Fragmento do Monolito',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Malphite.png'
    }
  } ,
  
  {
    name: 'Malzahar',
    description: 'o Profeta do Vazio',
    tags: [ 'Mage', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Malzahar.png'
    }
  } ,
  
  {
    name: 'Maokai',
    description: 'o Ente Sinistro',
    tags: [ 'Tank', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Maokai.png'
    }
  } ,
  
  {
    name: 'MasterYi',
    description: 'o Espadachim Wuju',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/MasterYi.png'
    }
  } ,
  
  {
    name: 'Milio',
    description: 'A Chama Gentil',
    tags: [ 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Milio.png'
    }
  } ,
  
  {
    name: 'MissFortune',
    description: 'a Caçadora de Recompensas',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/MissFortune.png'
    }
  } ,
  
  {
    name: 'MonkeyKing',
    description: 'o Macaco Rei',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/MonkeyKing.png'
    }
  } ,
  
  {
    name: 'Mordekaiser',
    description: 'o Revenã de Ferro',
    tags: [ 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Mordekaiser.png'     
    }
  } ,

  {
    name: 'Morgana',
    description: 'a Caída',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Morgana.png'
    }
  } ,

  {
    name: 'Nami',
    description: 'a Conjuradora das Marés',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nami.png'
    }
  } ,

  {
    name: 'Nasus',
    description: 'o Curador das Areias',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nasus.png'
    }
  } ,

  {
    name: 'Nautilus',
    description: 'o Titã das Profundezas',
    tags: [ 'Tank', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nautilus.png'
    }
  } ,

  {
    name: 'Neeko',
    description: 'a Camaleoa Curiosa',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Neeko.png'
    }
  } ,

  {
    name: 'Nidalee',
    description: 'a Caçadora Bestial',
    tags: [ 'Assassin', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nidalee.png'
    }
  } ,

  {
    name: 'Nilah',
    description: 'a Alegria Irrestrita',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nilah.png'
    }
  } ,

  {
    name: 'Nocturne',
    description: 'o Eterno Pesadelo',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nocturne.png'
    }
  } ,

  {
    name: 'Nunu',
    description: 'o Garoto e seu Yeti',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Nunu.png'
    }
  } ,

  {
    name: 'Olaf',
    description: 'o Berserker',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Olaf.png'
    }
  } ,

  {
    name: 'Orianna',
    description: 'a Donzela Mecânica',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Orianna.png'
    }
  } ,

  {
    name: 'Ornn',
    description: 'O Fogo sob a Montanha',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ornn.png'
    }
  } ,

  {
    name: 'Pantheon',
    description: 'a Lança Indestrutível',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Pantheon.png'
    }
  } ,

  {
    name: 'Poppy',
    description: 'a Guardiã do Martelo',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Poppy.png'
    }
  } ,

  {
    name: 'Pyke',
    description: 'o Estripador das Águas Sangrentas',
    tags: [ 'Support', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Pyke.png'
    }
  } ,

  {
    name: 'Qiyana',
    description: 'a Imperatriz dos Elementos',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Qiyana.png'
    }
  } ,

  {
    name: 'Quinn',
    description: 'as Asas de Demacia',
    tags: [ 'Marksman', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Quinn.png'
    }
  } ,

  {
    name: 'Rakan',
    description: 'O Charmoso',
    tags: [ 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Rakan.png'
    }
  } ,

  {
    name: 'Rammus',
    description: 'o Tatu Blindado',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Rammus.png'
    }
  } ,

  {
    name: 'RekSai',
    description: 'a Escavadora do Vazio',
    tags: [ 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/RekSai.png'
    }
  } ,

  {
    name: 'Rell',
    description: 'a Dama de Ferro',
    tags: [ 'Tank', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Rell.png'
    }
  } ,

  {
    name: 'Renata',
    description: 'a Baronesa da Química',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Renata.png'
    }
  } ,

  {
    name: 'Renekton',
    description: 'o Carniceiro das Areias',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Renekton.png'
    }
  } ,

  {
    name: 'Rengar',
    description: 'o Acossador da Alcateia',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Rengar.png'
    }
  } ,

  {
    name: 'Riven',
    description: 'a Exilada',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Riven.png'
    }
  } ,

  {
    name: 'Rumble',
    description: 'a Ameaça Mecânica',
    tags: [ 'Fighter', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Rumble.png'
    }
  } ,

  {
    name: 'Ryze',
    description: 'o Mago Rúnico',
    tags: [ 'Mage', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ryze.png'
    }
  } ,

  {
    name: 'Samira',
    description: 'a Rosa do Deserto',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Samira.png'
    }
  } ,

  {
    name: 'Sejuani',
    description: 'a Fúria do Norte',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Sejuani.png'
    }
  } ,

  {
    name: 'Senna',
    description: 'A Redentora',
    tags: [ 'Marksman', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Senna.png'
    }
  } ,

  {
    name: 'Seraphine',
    description: 'a Cantora Sonhadora',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Seraphine.png'
    }
  } ,

  {
    name: 'Sett',
    description: 'o Chefe',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Sett.png'
    }
  } ,

  {
    name: 'Shaco',
    description: 'o Bufão Demoníaco',
    tags: [ 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Shaco.png'
    }
  } ,

  {
    name: 'Shen',
    description: 'o Olho do Crepúsculo',
    tags: [ 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Shen.png'
    }
  } ,

  {
    name: 'Shyvana',
    description: 'a Meio-Dragão',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Shyvana.png'
    }
  } ,

  {
    name: 'Singed',
    description: 'o Químico Louco',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Singed.png'
    }
  } ,

  {
    name: 'Sion',
    description: 'o Colosso Morto-Vivo',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Sion.png'
    }
  } ,

  {
    name: 'Sivir',
    description: 'a Mestra da Batalha',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Sivir.png'
    }
  } ,

  {
    name: 'Skarner',
    description: 'a Vanguarda de Cristal',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Skarner.png'
    }
  } ,

  {
    name: 'Sona',
    description: 'a Mestra das Cordas',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Sona.png'
    }
  } ,

  {
    name: 'Soraka',
    description: 'a Filha das Estrelas',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Soraka.png'
    }
  } ,

  {
    name: 'Swain',
    description: 'o Grande General Noxiano',
    tags: [ 'Mage', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Swain.png'
    }
  } ,

  {
    name: 'Sylas',
    description: 'o Abjugado',
    tags: [ 'Mage', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Sylas.png'
    }
  } ,

  {
    name: 'Syndra',
    description: 'a Soberana Sombria',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Syndra.png'
    }
  } ,

  {
    name: 'TahmKench',
    description: 'o Rei do Rio',
    tags: [ 'Support', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/TahmKench.png'
    }
  } ,

  {
    name: 'Taliyah',
    description: 'a Tecelã de Pedras',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Taliyah.png'
    }
  } ,

  {
    name: 'Talon',
    description: 'a Sombra da Lâmina',
    tags: [ 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Talon.png'
    }
  } ,

  {
    name: 'Taric',
    description: 'o Escudo de Valoran',
    tags: [ 'Support', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Taric.png'
    }
  } ,

  {
    name: 'Teemo',
    description: 'o Explorador Veloz',
    tags: [ 'Marksman', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Teemo.png'
    }
  } ,
  {
    name: 'Thresh',
    description: 'o Guardião das Correntes',
    tags: [ 'Support', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',  
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Thresh.png'       
    }
  } ,
  
  {
    name: 'Tristana',
    description: 'a Artilheira Yordle',
    tags: [ 'Marksman', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Tristana.png'     
    }
  } ,
  
  {
    name: 'Trundle',
    description: 'o Rei dos Trolls',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Trundle.png'
    }
  } ,
  
  {
    name: 'Tryndamere',
    description: 'o Rei Bárbaro',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Tryndamere.png'
    }
  } ,
  
  {
    name: 'TwistedFate',
    description: 'o Mestre das Cartas',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/TwistedFate.png'
    }
  } ,
  
  {
    name: 'Twitch',
    description: 'o Semeador da Peste',
    tags: [ 'Marksman', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Twitch.png'
    }
  } ,
  
  {
    name: 'Udyr',
    description: 'o Andarilho Espiritual',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Udyr.png'
    }
  } ,
  
  {
    name: 'Urgot',
    description: 'o Encouraçado',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Urgot.png'
    }
  } ,
  
  {
    name: 'Varus',
    description: 'a Flecha da Vingança',
    tags: [ 'Marksman', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Varus.png'
    }
  } ,
  
  {
    name: 'Vayne',
    description: 'a Caçadora Noturna',
    tags: [ 'Marksman', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Vayne.png'
    }
  } ,
  
  {
    name: 'Veigar',
    description: 'o Pequeno Mestre do Mal',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Veigar.png'
    }
  } ,
  
  {
    name: 'Velkoz',
    description: 'o Olho do Vazio',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Velkoz.png'
    }
  } ,
  
  {
    name: 'Vex',
    description: 'a Melancolista',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Vex.png'
    }
  } ,
  
  {
    name: 'Vi',
    description: 'a Defensora de Piltover',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Vi.png'
    }
  } ,
  
  {
    name: 'Viego',
    description: 'O Rei Destruído',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Viego.png'
    }
  } ,
  
  {
    name: 'Viktor',
    description: 'o Arauto das Máquinas',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Viktor.png'
    }
  } ,
  
  {
    name: 'Vladimir',
    description: 'o Sanguinário Escarlate',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Vladimir.png'
    }
  } ,
  
  {
    name: 'Volibear',
    description: 'a Tempestade Implacável',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Volibear.png'
    }
  } ,
  
  {
    name: 'Warwick',
    description: 'a Ira Desimpedida de Zaun',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Warwick.png'
    }
  } ,
  
  {
    name: 'Xayah',
    description: 'a Rebelde',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Xayah.png'
    }
  } ,
  
  {
    name: 'Xerath',
    description: 'o Mago Ascendente',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Xerath.png'
    }
  } ,
  
  {
    name: 'XinZhao',
    description: 'o Senescal de Demacia',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/XinZhao.png'
    }
  } ,
  
  {
    name: 'Yasuo',
    description: 'o Imperdoável',
    tags: [ 'Fighter', 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Yasuo.png'
    }
  } ,
  
  {
    name: 'Yone',
    description: 'o Inesquecido',
    tags: [ 'Assassin', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Yone.png'
    }
  } ,
  
  {
    name: 'Yorick',
    description: 'o Pastor de Almas',
    tags: [ 'Fighter', 'Tank' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Yorick.png'
    }
  } ,
  
  {
    name: 'Yuumi',
    description: 'a Gata Mágica',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Yuumi.png'
    }
  } ,
  
  {
    name: 'Zac',
    description: 'a Arma Secreta',
    tags: [ 'Tank', 'Fighter' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Zac.png'
    }
  } ,
  
  {
    name: 'Zed',
    description: 'o Mestre das Sombras',
    tags: [ 'Assassin' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Zed.png'
    }
  } ,
  
  {
    name: 'Zeri',
    description: 'A Faísca de Zaun',
    tags: [ 'Marksman' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Zeri.png'
    }
  } ,
  
  {
    name: 'Ziggs',
    description: 'o Especialista em Hexplosivos',
    tags: [ 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Ziggs.png'
    }
  } ,
  
  {
    name: 'Zilean',
    description: 'o Guardião do Tempo',
    tags: [ 'Support', 'Mage' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Zilean.png'
    }
  } ,
  
  {
    name: 'Zoe',
    description: 'o Aspecto do Crepúsculo',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Zoe.png'
    }
  } ,
  
  {
    name: 'Zyra',
    description: 'a Ascensão dos Espinhos',
    tags: [ 'Mage', 'Support' ],
    images: {
      splash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg',
      face: 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Zyra.png'
    }
  } ,
];

export default champions;