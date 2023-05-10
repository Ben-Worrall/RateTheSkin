window.onload = (event) => {
    setTimeout(showgame, 1800);
  };
  function showgame(){
    document.getElementById('GameOpt').style.display = ''
  }
  



  document.getElementById('csgo').addEventListener('click', ()=>{
    document.getElementById('options').style.display = 'none'
    document.getElementById('GameOpt').style.display = 'none'
    document.getElementById('SkinOpt').style.display = ''
    
   setTimeout(showText, 10)
   
   setTimeout(showskin, 2100)
  })

  function showText(){
    document.getElementById('gunOPTS').style.display = ""
    document.getElementById('gunOPTS').classList.add("textAnimation") 
}


  function showskin(){
document.getElementById('OPTS').style.display = ''
  }


//preload backgroundimage
 var img=new Image();
 img.src='112264.jpg';



//var GameOpt = document.getElementById("GameOpt") //game option
//var SkinOpt = document.getElementById("SkinOpt") //skin options

var banner = document.getElementById("GameName")

document.getElementById('FinnaDone').style.display='none'
document.getElementById('rateboard').style.display = 'none'






const skinlistuse = [
    //"Any",
    "Ak-47",
    "AUG",
    "AWP",
    "CZ75-Auto",
    "Desert Eagle",
    "Dual Berettas",
    "FAMAS",
    "Five-SeveN",
    "G3SG1",
    "galil AR",
    "Glock-18",
    "M249",
    "M4A1-S",
    "M4A4",
    "MAC-10",
    "MAG-7",
    "MP5-SD",
    "MP7",
    "MP9",
    "Negev",
    "Nova",
    "P2000",
    "P250",
    "P90",
    "PP-Bizon",
    "R8 Revolver",
    "Sawed-Off",
    "SCAR-20",
    "SG 553",
    "SSG 08",
    "Tec-9",
    "UMP-45",
    "USP-s",
    "XM1014"
    


]

var LIST = [
    //any lol 
   // [],
//ak
[
    "csgo/ak/AK-47 (2).png",
    "csgo/ak/AK-47 (3).png",
    "csgo/ak/AK-47 (4).png",
    "csgo/ak/AK-47 (5).png",
    "csgo/ak/AK-47 (6).png",
    "csgo/ak/AK-47 (7).png",
    'csgo/ak/AK-47 (8).png',
    "csgo/ak/AK-47 (9).png",
    "csgo/ak/AK-47 (10).png",
    "csgo/ak/AK-47 (11).png",
    'csgo/ak/AK-47 (12).png',
    'csgo/ak/AK-47 (13).png',
    "csgo/ak/AK-47 (14).png",
    "csgo/ak/AK-47 (15).png",
    "csgo/ak/AK-47 (16).png",
    "csgo/ak/AK-47 (17).png",
    "csgo/ak/AK-47 (18).png",
    "csgo/ak/AK-47 (19).png",
    "csgo/ak/AK-47 (20).png",
    'csgo/ak/AK-47 (21).png',
    'csgo/ak/AK-47 (22).png',
    'csgo/ak/AK-47 (23).png',
    "csgo/ak/AK-47 (24).png",
    'csgo/ak/AK-47 (25).png',
    'csgo/ak/AK-47 (26).png',
    "csgo/ak/AK-47 (27).png",
    "csgo/ak/AK-47 (28).png",
    "csgo/ak/AK-47 (29).png",
    'csgo/ak/AK-47 (30).png',
    "csgo/ak/AK-47 (31).png",
    "csgo/ak/AK-47 (32).png",
    "csgo/ak/AK-47 (33).png",
    "csgo/ak/AK-47 (34).png",
    "csgo/ak/AK-47 (35).png",
    "csgo/ak/AK-47 (36).png",
    "csgo/ak/AK-47 (37).png",
    "csgo/ak/AK-47 (38).png",
    "csgo/ak/AK-47 (39).png",
    "csgo/ak/AK-47 (40).png",
    "csgo/ak/AK-47 (41).png",
    "csgo/ak/AK-47 (42).png",
    "csgo/ak/AK-47 (43).png",
    "csgo/ak/AK-47 (44).png",
    "csgo/ak/AK-47.png",
],

//aug
[
    "csgo/aug/aug.png",
    "csgo/aug/aug2.png",
    "csgo/aug/aug3.png",
    "csgo/aug/aug4.png",
    "csgo/aug/aug5.png",
    "csgo/aug/aug6.png",
    "csgo/aug/aug7.png",
    "csgo/aug/aug8.png",
    'csgo/aug/aug9.png',
    "csgo/aug/aug10.png",
    "csgo/aug/aug12.png",
    "csgo/aug/aug13.png",
    'csgo/aug/aug14.png',
    'csgo/aug/aug15.png',
    "csgo/aug/aug16.png",
    "csgo/aug/aug17.png",
    "csgo/aug/aug18.png",
    "csgo/aug/aug19.png",
    "csgo/aug/aug20.png",
    "csgo/aug/aug21.png",
    "csgo/aug/aug22.png",
    "csgo/aug/aug23.png",
    "csgo/aug/aug24.png",
    "csgo/aug/aug25.png",
    "csgo/aug/aug26.png",
    "csgo/aug/aug27.png",
    "csgo/aug/aug28.png",
    "csgo/aug/aug29.png",
    "csgo/aug/aug30.png",
    "csgo/aug/aug31.png",
    'csgo/aug/aug32.png',
    "csgo/aug/aug33.png",
    "csgo/aug/aug34.png",
    "csgo/aug/aug35.png",
    "csgo/aug/aug36.png",
    "csgo/aug/aug37.png",
    "csgo/aug/aug38.png",
],

//awp
 [
    "csgo/awp/awp.png",
    "csgo/awp/awp2.png",
    "csgo/awp/awp3.png",
    "csgo/awp/awp4.png",
    "csgo/awp/awp5.png",
    "csgo/awp/awp6.png",
    "csgo/awp/awp7.png",
    "csgo/awp/awp8.png",
    "csgo/awp/awp9.png",
    "csgo/awp/awp10.png",
    "csgo/awp/awp11.png",
    "csgo/awp/awp12.png",
    "csgo/awp/awp13.png",
    "csgo/awp/awp14.png",
    "csgo/awp/awp15.png",
    "csgo/awp/awp16.png",
    "csgo/awp/awp17.png",
    "csgo/awp/awp18.png",
    "csgo/awp/awp19.png",
    "csgo/awp/awp20.png",
    "csgo/awp/awp21.png",
    "csgo/awp/awp22.png",
    "csgo/awp/awp23.png",
    "csgo/awp/awp24.png",
    "csgo/awp/awp25.png",
    "csgo/awp/awp26.png",
    "csgo/awp/awp27.png",
    "csgo/awp/awp28.png",
    "csgo/awp/awp29.png",
    "csgo/awp/awp30.png",
    "csgo/awp/awp31.png",
    "csgo/awp/awp33.png",
    "csgo/awp/awp32.png",
    "csgo/awp/awp34.png",
    "csgo/awp/awp35.png",
    "csgo/awp/awp36.png",
    "csgo/awp/awp37.png",
    "csgo/awp/awp38.png",
    "csgo/awp/awp39.png",
],

//"CZ75-Auto",
[ 
    'csgo/cz/cz75-auto.png',
    'csgo/cz/weapon_cz75a_am_army_shine_light_large.26736d48ea09a5284aeb1cf11292bc3e87a56251.png',
    'csgo/cz/weapon_cz75a_am_crystallized_green_light_large.6ae192cbf47b2cb11ec47fcdcbad07a6a78fb3f7.png',
    'csgo/cz/weapon_cz75a_am_czv2_mf_light_large.e99dde293e56f61d77908b8326d2a89155389783.png',
    'csgo/cz/weapon_cz75a_am_diamond_plate_light_large.ef425c82bae5d971bd5e1e9c54b9cd2f992e4e16.png',
    'csgo/cz/weapon_cz75a_am_fuschia_light_large.9ca4218835426c791482a3d7cc3b00d00c958d40.png',
    'csgo/cz/weapon_cz75a_am_gyrate_light_large.90f97369a79695a7fdcb633a9c9a9e56f29a05d5.png',
    'csgo/cz/weapon_cz75a_am_nitrogen_light_large.ea1d17f7e0ba9fa71126a46b3ba99bf258dffe25.png',
    'csgo/cz/weapon_cz75a_am_royal_light_large.f9f7bd8e5321fa0572adc2b77050608e5570cdaf.png',
    'csgo/cz/weapon_cz75a_an_emerald_light_large.5c4734111477a884851cae6998871cbf7c870cc6.png',
    'csgo/cz/weapon_cz75a_an_silver_light_large.d966656a4fc5b18b33ad34bcd8a5f8cc50b1f88e.png',
    'csgo/cz/weapon_cz75a_aq_etched_cz75_light_large.5fa7e4f56600efeaceb99a948c6fa5dc3648a3b9.png',
    'csgo/cz/weapon_cz75a_cu_c75a-tiger_light_large.b754b5a73c8f2b207942eb046efdbd4cade04513.png',
    'csgo/cz/weapon_cz75a_cu_cz75_cerakote_light_large.2f8286a9ca2313c23c6d9ad8d1c94650ef856c37.png',
    'csgo/cz/weapon_cz75a_cu_cz75_eco_light_large.19aa7b914ac71968e73ac48b112b9f4c8116c767.png',
    'csgo/cz/weapon_cz75a_cu_cz75_precision_light_large.a0d0ea9d92ff9c535cbdaa9c07a1a95a5181a82b.png',
    'csgo/cz/weapon_cz75a_cu_cz75_whirlwind_light_large.86609770746655c350bb7b087a8c0f1f1b55d01f.png',
    'csgo/cz/weapon_cz75a_cu_cz75a_chastizer_light_large.d3234c712c3c068adbbfd5718c468c778f2351dd.png',
    'csgo/cz/weapon_cz75a_gs_cz_snakes_purple_light_large.a06599fab1d73352fd970fc0356c215c50ca7e9a.png',
    'csgo/cz/weapon_cz75a_gs_cz75_tacticat_light_large.ed9ba2f6cb8fd5e2a2b6cfb1b9a0ba4c87c93ec3.png',
    'csgo/cz/weapon_cz75a_gs_cz75_tread_light_large.8c276db730bb33477aaa52f7a23825f295e14364.png',
    'csgo/cz/weapon_cz75a_gs_cz75_vendetta_light_large.0c3e295e82d8131b10e8daa2a1568e578fe01541.png',
    'csgo/cz/weapon_cz75a_gs_cz75a_redastor_light_large.e00e688986c50877a103fe66d70fdf1fc13bbe8b.png',
    'csgo/cz/weapon_cz75a_gs_train_cz75_light_large.d0178b0f2c40cd44a38d5c0215a7152214cb1ce8.png',
    'csgo/cz/weapon_cz75a_hy_bluehex_light_large.032e4b0999830a45d7439d07faef66b8299a105f.png',
    'csgo/cz/weapon_cz75a_hy_plaid2_light_large.82e391ba61c092ece265e3bde16237ab5a510130.png',
    'csgo/cz/weapon_cz75a_hy_vertigoillusion_light_large.1e2ff66fbdd2d5aea56659a7ede1cc3fd570f00d.png',
    'csgo/cz/weapon_cz75a_hy_webs_light_large.2093b43aefa82ee6713c472384ea283fdd44f023.png',
    'csgo/cz/weapon_cz75a_so_indigo_and_grey_light_large.2d4d90e760b199522064e9635d1efdb11cdab34f.png',
    'csgo/cz/weapon_cz75a_so_orange_accents2_light_large.844bd6d01ce7c69486327ceb44b65b8c7cc49f2d.png',
    'csgo/cz/weapon_cz75a_so_orca_light_large.8490865eba36c09ccd75a9b1f93445ff2e9f2b8f.png',
    'csgo/cz/weapon_cz75a_sp_palm_night_light_large.9fd0e13c6cfbb14efbdd81732ca52f64f337e8e7.png',
    'csgo/cz/weapon_cz75a_sp_tape_short_jungle_light_large.501137d165eddaa23fc4d2a5eedf51fbcfe1bcb2.png',
],
  //  "Desert Eagle"
    [
'csgo/deagle/desert_eagle.png',
'csgo/deagle/weapon_deagle_aa_flames_light_large.dd140c3b359c16ccd8e918ca6ad0b2628151fe1c.png',
'csgo/deagle/weapon_deagle_aa_vertigo_light_large.85a16e4bfb8b1cc6393ca5d0c6d3a1e6e6023323.png',
'csgo/deagle/weapon_deagle_am_bronze_sparkle_light_large.42dc1d2bae9e586f75d6425f94a195014891533b.png',
'csgo/deagle/weapon_deagle_am_crystallized_dark_light_large.2d7d753a893ec3f0a470af9690aa64dcecd7146f.png',
'csgo/deagle/weapon_deagle_am_ddpatdense_peacock_light_large.a486db3160bcdcf6bc5a1d8179c450b02f620151.png',
'csgo/deagle/weapon_deagle_am_heist_plans_purple_light_large.737fb624218d14185e259e9f0af20ae1626a0e0b.png',
'csgo/deagle/weapon_deagle_am_jorm_green_light_large.db1045fee0af23f28bb4affd164d07e3aadd42ec.png',
'csgo/deagle/weapon_deagle_am_numbers_bronze_light_large.9860461c5a6ef52868d2dadd2b9dbd5c842b7bb0.png',
'csgo/deagle/weapon_deagle_am_scales_bravo_light_large.6cba46695e74a8bee932ea90cea24e146cbef5e7.png',
'csgo/deagle/weapon_deagle_am_seastorm_blood_light_large.1e92a7e19fde014e5a70832a93b440e0c036d596.png',
'csgo/deagle/weapon_deagle_am_seastorm_light_large.aef21efecda37237d24debe3f409f42954dadddd.png',
'csgo/deagle/weapon_deagle_am_seastorm_shojo_light_large.7df4fe386dac18ae2a8c3e50df7dfb9165dece83.png',
'csgo/deagle/weapon_deagle_aq_deagle_corinthian_light_large.1a694892a1953a131775451d0542508b4b3d9e77.png',
'csgo/deagle/weapon_deagle_aq_deagle_naga_light_large.b410ad835b1894a448676ae0590586298af2cb33.png',
'csgo/deagle/weapon_deagle_aq_desert_eagle_constable_light_large.fb2f2673dd3997a21bff9129e0d2e294c03095e8.png',
'csgo/deagle/weapon_deagle_aq_deserteagle_kumichodragon_light_large.19874e9a20cfac49efbe1f1557b995e453633ffe.png',
'csgo/deagle/weapon_deagle_aq_engraved_deagle_light_large.804a1a01a29bf80673b739f3eb220272a6838193.png',
'csgo/deagle/weapon_deagle_aq_handcannon_light_large.e6e87ceb2337a423d225dc177342af3df4069585.png',
'csgo/deagle/weapon_deagle_aq_pilot_deagle_light_large.60b0e755ef14311a82f5f35928ad18dbb6ae2a86.png',
'csgo/deagle/weapon_deagle_cu_deag_printstream_light_large.b468e56607da39fb2c88e493456290fd5db174c8.png',
'csgo/deagle/weapon_deagle_cu_deag_trigger_discipline_light_large.9d8615945f079e3f7ea84c572fd34408fee6341c.png',
'csgo/deagle/weapon_deagle_cu_deagle_aureus_light_large.7fa76057cb05f2cab829be448f120ae540715d0e.png',
'csgo/deagle/weapon_deagle_cu_deagle_kitch_light_large.0df9b5246d27786b413642f5fc959f37d8892c3a.png',
'csgo/deagle/weapon_deagle_cu_deagle_replica_light_large.900a30787dd7f4f32435cc55e56dc345d780baae.png',
'csgo/deagle/weapon_deagle_cu_desert_eagle_corroden_light_large.5fde2cc1c9b82b0e9823445c7fb2be334bc286af.png',
'csgo/deagle/weapon_deagle_gs_deagle_aggressor_light_large.51ffb87f03ae0d3c467d4412f3c246067748e61d.png',
'csgo/deagle/weapon_deagle_gs_deagle_exo_light_large.8bdc93f1b45efba187748065deff967eef8f2f2d.png',
'csgo/deagle/weapon_deagle_gs_deagle_fennec_light_large.92dbda73edcc6eb6022f1f0248cb19063d7107aa.png',
'csgo/deagle/weapon_deagle_gs_deagle_mecha_light_large.e08c1fd8709f6b368956c41c68b17c15ff635635.png',
'csgo/deagle/weapon_deagle_hy_ddpat_urb_light_large.06af0cb0e08490f1fba17acd1b9c98978745c213.png',
'csgo/deagle/weapon_deagle_hy_mottled_sand_light_large.615be084d4bc9db8c98451f13351cae1fa0ec69c.png',
'csgo/deagle/weapon_deagle_hy_varicamo_urban_light_large.a9791d0046206f88085f2d0850ec577c6f535a47.png',
'csgo/deagle/weapon_deagle_hy_webs_darker_light_large.7b9cb19bac52ebe7c49e3abdfb0c400ea252fef8.png',
'csgo/deagle/weapon_deagle_so_night_light_large.64e315553578f3c8bd08c96622fc2c34d5a789ba.png',
'csgo/deagle/weapon_deagle_sp_spacerace_blue_light_large.e93e99eadcae13e4ff2cbe9f958d720a34007a6d.png',
    ],
    //"Dual berettas"
    [
'csgo/dual/dual_berettas.png',
'csgo/dual/weapon_elite_am_crystallized_blue_light_large.5756d02f9908e1c4d70e6f1d9dae53b3731fc0fd.png',
'csgo/dual/weapon_elite_am_heist_plans_green_light_large.a4c7acda57bfceac6b4e25708bfd4881e9bed5e2.png',
'csgo/dual/weapon_elite_am_ossify_red_light_large.9da21d3dc7b64952d853818075f524a9e4c1dfd3.png',
'csgo/dual/weapon_elite_an_emerald_light_large.242c719bcbe22fa3eb64b7ba15f48989cc9200d8.png',
'csgo/dual/weapon_elite_an_navy_light_large.87999cce45a03f8e83c28db98874810a5c990c10.png',
'csgo/dual/weapon_elite_aq_dualberettas_cartel_light_large.52ed24116db8a7254a366ea9f4f49b3ceff9eed3.png',
'csgo/dual/weapon_elite_aq_forced_light_large.c654256613e0893b16be27a7621ec469a63a9955.png',
'csgo/dual/weapon_elite_cu_dual_elites_evil_flora_light_large.3afd7e8e7cf008e4b38a206b79adae3b9d0d7757.png',
'csgo/dual/weapon_elite_cu_dual_elites_rally_light_large.5b3cf9c54a4e7927724560a210955a77887ecb2e.png',
'csgo/dual/weapon_elite_cu_dualberretta_dragons_light_large.2742674cbf237d1ba5fb6ed9f0d90e00a03570f9.png',
'csgo/dual/weapon_elite_cu_elites_beware_light_large.3a4517010e237136f9cca5c593beedd94a2a0a15.png',
'csgo/dual/weapon_elite_cu_elites_urbanstorm_light_large.d33c9dd65434d8b9f4e7b5092fcc2e07a874e625.png',
'csgo/dual/weapon_elite_cu_retribution_light_large.8527b45e34039b45dea9d304bb5892a1d0de5268.png',
'csgo/dual/weapon_elite_cu_season_elites_bravo_light_large.03b5f4afcbffb80f73ce009da240f4aa1455c15f.png',
'csgo/dual/weapon_elite_gs_dual_berettas_golden_venice_light_large.23d73db6cf2b2a7af26414d26373171dd3be06b1.png',
'csgo/dual/weapon_elite_gs_dual_berettas_tread_light_large.c48f5d783dd8f91dabffcd64cd2d95690b309ce5.png',
'csgo/dual/weapon_elite_gs_dual_elites_classic_light_large.a899ad9f2e1bb8522fdeb022c99c64c2456826d1.png',
'csgo/dual/weapon_elite_gs_dual_elites_dezastre_light_large.9b7aa9accd1e31a202b0f2ab66d0cf8d3039ee7d.png',
'csgo/dual/weapon_elite_gs_dual_elites_rose_light_large.8df8980203b198879875be44656361ccbb41791e.png',
'csgo/dual/weapon_elite_gs_dualberettas_cobra_light_large.0c2576234d95cb12089d9fdad47d1f7eed7f56c8.png',
'csgo/dual/weapon_elite_gs_dualberettas_ventilators_light_large.45cb1ffd25de1ed5b90ba104b1f8e0a8eb2eb255.png',
'csgo/dual/weapon_elite_gs_mother_of_pearl_elite_light_large.2023e44b16f064c32962b691bcdb5d45051744bc.png',
'csgo/dual/weapon_elite_hy_gelpen_dark_light_large.064bcecab3cc87140e4a6e6f0f34cc3e00675d77.png',
'csgo/dual/weapon_elite_hy_marina_sunrise_light_large.bcdf31f5af4a5b9bef2bb0d5336715a3a0407b92.png',
'csgo/dual/weapon_elite_hy_numbers_green_light_large.e970f5a91033a85fc8a380b1c621ea633afb258b.png',
'csgo/dual/weapon_elite_hy_vines_light_large.bb506f02418403c8a48f7829bdc065a71c3a77d0.png',
'csgo/dual/weapon_elite_hy_zodiac1_light_large.cedfe5166a361ccc3c32a28847addcdc66ad25d7.png',
'csgo/dual/weapon_elite_so_panther_light_large.019431b3fca18b027d07fe29d0ee7bf88df75576.png',
'csgo/dual/weapon_elite_so_pmc_light_large.eb0b65f961c27f233d8846c80301666925712e93.png',
'csgo/dual/weapon_elite_so_space_marine_light_large.101c6b29315d37db050a4c7817a4c11517baa167.png',
'csgo/dual/weapon_elite_so_tangerine_light_large.3fd8ec1b63079a11e24d78228ad989b51a30b0ca.png',
'csgo/dual/weapon_elite_sp_dry_wood_light_large.89fee2f97c3722747a19dcc269397d71fd7fddc1.png',
'csgo/dual/weapon_elite_sp_elites_winter_raider_light_large.eddc2e91d0081e57588b745589209094a6b3e9b6.png',
'csgo/dual/weapon_elite_sp_engine_dirty_light_large.0e7876df94dfe920abf273e75ea62e041100de4a.png',
    ],
    //"FAMAS"
    [
'csgo/famas/famas.png',
'csgo/famas/weapon_famas_aa_wiring_yellow_light_large.c232a36fb8d6a691893132a0baf126d250d8d35e.png',
'csgo/famas/weapon_famas_am_famas_dots_light_large.dc6f19278bac52ea06b8e3576fa324624f2f82b4.png',
'csgo/famas/weapon_famas_am_nuclear_pattern4_famas_light_large.7e147f135728d6abd62f871088d69c1b2bd38076.png',
'csgo/famas/weapon_famas_am_nuclear_skulls2_famas_light_large.ec9774f3b2a03f5411321dba792b05f19096547c.png',
'csgo/famas/weapon_famas_am_numbers_magenta_light_large.c3b086e3407aeb1bca1fb497bc2aee6dc7602a4f.png',
'csgo/famas/weapon_famas_am_zebra_dark_light_large.52703268beafba0b11ccfe86f32a332cdf69f9ef.png',
'csgo/famas/weapon_famas_an_famas_sgt_light_large.5a9241d41a3c35a3fbb20aebcd22253a6a85f72f.png',
'csgo/famas/weapon_famas_aq_famas_contour_light_large.65d515ab34a6f50c8a5296b562a81da42663b819.png',
'csgo/famas/weapon_famas_aq_famas_jinn_light_large.a0e1b8e2a572c5e3d6472181d4a0d6ce7f51139f.png',
'csgo/famas/weapon_famas_cu_broken_path_famas_light_large.5d45539735d838ffefd26467a8c767b71807c785.png',
'csgo/famas/weapon_famas_cu_famas_lenta_light_large.7ab508a407e56ab541dae127ef5fc64f09f6ae08.png',
'csgo/famas/weapon_famas_cu_famas_nuke_tension_light_large.0cf9412e22f626e675b76506cf2f240a64a05b22.png',
'csgo/famas/weapon_famas_cu_famas_owl_orange_light_large.7cb3a86d36317530964f40d66b755789de7ca88a.png',
'csgo/famas/weapon_famas_cu_famas_pulse_light_large.fad5dfcd7b0ccfe655c7c3903d091140904959ec.png',
'csgo/famas/weapon_famas_cu_famas_spectron_light_large.5212ab188ec7d54b55d4280c3b508b11b1f567ed.png',
'csgo/famas/weapon_famas_gs_famas_corp_meow_light_large.7e27ced9616b1a4808cad37e8c0c653b9c866f07.png',
'csgo/famas/weapon_famas_gs_famas_legacy_gold_light_large.34013884c12276d1c83ceb4ea9fb83428df02920.png',
'csgo/famas/weapon_famas_gs_famas_mecha_light_large.c26d3fccc156fe26ba3325ed73b29092b3e18093.png',
'csgo/famas/weapon_famas_gs_famas_rally_light_large.538baee44eb772de95029e4267ea9c41101bbc94.png',
'csgo/famas/weapon_famas_gs_famas_rapid_eyes_light_large.8a166e6d36121b16dddc11b9aca94d5c541b0b56.png',
'csgo/famas/weapon_famas_hy_bluehex_light_large.fe87763b33ea8963cf87e9b8fd7b9bfc9014d747.png',
'csgo/famas/weapon_famas_hy_doomkitty_light_large.c9dd7b8fb1a44d5691684aae406d360433550468.png',
'csgo/famas/weapon_famas_hy_reef_light_large.d3138f4491b5413241bf64a82e0545ddc4c9e80d.png',
'csgo/famas/weapon_famas_hy_varicamo_desert_light_large.b650a2a051a809d716d4298d2387729456a404ce.png',
'csgo/famas/weapon_famas_so_space_marine_light_large.bc0a11080c9b3b50c13ddbe4afa3f6f96311fec4.png',
'csgo/famas/weapon_famas_sp_famas_ghost_insects_light_large.727c7db3f6df4aae8b692f6966dba460acafb07f.png',
'csgo/famas/weapon_famas_sp_famas_macabre_light_large.7582150e24a69922b814d6b56004327e2219890d.png',
'csgo/famas/weapon_famas_sp_knots_blue_light_large.1a6a2c6fe90198a053410d364dd48441b51fb1a7.png',
'csgo/famas/weapon_famas_sp_mesh_hot_and_cold_light_large.c93a700bb3cf4d14241d3c837569b571685b0b29.png',
'csgo/famas/weapon_famas_sp_palm_sunset_light_large.924bca1ce6c9034d6963c81c59fa72a2a4b45a07.png',
'csgo/famas/weapon_famas_sp_spitfire_famas_bravo_light_large.ac455b0749733b0bdce019c0e0c74270d689eb95.png',
'csgo/famas/weapon_famas_sp_spray_light_large.fe886d820746c0f4333c0e0ea6d308473e241c4b.png',
    ],
    //"Five-SeveN"
    [
'csgo/fiveseven/five-seven.png',
'csgo/fiveseven/weapon_fiveseven_aa_fade_red_blue_light_large.ad6d70f142cc5c31e577880088475e9f079a97a1.png',
'csgo/fiveseven/weapon_fiveseven_am_copper_flecks_light_large.d2af814b76763880470bc7039d5569eb74b26978.png',
'csgo/fiveseven/weapon_fiveseven_am_crystallized_silver_light_large.1c5e2fb5a3541523f1ff3a28f4138d83eed3a67f.png',
'csgo/fiveseven/weapon_fiveseven_an_gunmetal_bravo_light_large.6aaf03603a7ef748f5395af2a738f899f423522b.png',
'csgo/fiveseven/weapon_fiveseven_aq_57_feathers_light_large.aa942f28d5fd868643b54ba0c317703d8b615754.png',
'csgo/fiveseven/weapon_fiveseven_aq_five_seven_scumbria_light_large.bc05fc6435b84525a0ab140bc72e032a98dab710.png',
'csgo/fiveseven/weapon_fiveseven_aq_oiled_light_large.fdaa095453965b2be93f8aa90ae469d926fac4e7.png',
'csgo/fiveseven/weapon_fiveseven_cu_five_seven_angry_light_large.54986e86178e0462d34fe78b6b726292813541f5.png',
'csgo/fiveseven/weapon_fiveseven_cu_five_seven_daimyo_light_large.d394398cae1977546887145dcf6a4892d2ed29aa.png',
'csgo/fiveseven/weapon_fiveseven_cu_five_seven_diary_light_large.e09a26df236581e02db30cdbb9c55adb2a4d2292.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_alpha_omega_light_large.698d00d53621c1b2358655aaff4f729bc0ed6300.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_augmented_light_large.eb79857bc2e4b80f4edf61a0c5a72fbae80f3a20.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_banana_light_large.2d78a6614cb329ada893c8d028eb5c2b485f26f0.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_gsg9_light_large.870dec48f951d3a6420bdb332f0acd25ee1254b1.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_hyperbeast_light_large.d2ef18b57b0b821624e42830ee4c47e241ed4476.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_retrobution_light_large.7ef4b20b8c9aed4d6461861c9d93b81630f6ac71.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_urban_hazard_light_large.456966d23faf1034c51b8130b7a70294af087026.png',
'csgo/fiveseven/weapon_fiveseven_cu_fiveseven_vein_light_large.464ec691b3c3c9c828aa1a8d4e2b076daa4b7a4f.png',
'csgo/fiveseven/weapon_fiveseven_cu_vertigo_fiveseven_light_large.8d09586ce7da49599697204b4b7fc32930b47836.png',
'csgo/fiveseven/weapon_fiveseven_gs_five_seven_efusion_light_large.78c44b69ab40456b90279ad0252463e9de816e78.png',
'csgo/fiveseven/weapon_fiveseven_gs_fiveseven_hot_rod_violet_light_large.66cb3d6336f4ea07a7f4ebbd3192c59f0afca3fc.png',
'csgo/fiveseven/weapon_fiveseven_hy_bud_red_light_large.d149fac98ea236499e2fa159b82420a8eedefad4.png',
'csgo/fiveseven/weapon_fiveseven_hy_ducts_green_light_large.687c4ada7a094872eeb5b48cbff3ebac68a8d7ed.png',
'csgo/fiveseven/weapon_fiveseven_hy_flowers_light_large.4f94edf6ac032c15fedafa6ba1f2425a4ca8bded.png',
'csgo/fiveseven/weapon_fiveseven_hy_forest_night_light_large.fc245886bed9e789350127f844afe63f34f64936.png',
'csgo/fiveseven/weapon_fiveseven_hy_kami_light_large.ce4939fe41b30c6143f487879a57e4f5f227e811.png',
'csgo/fiveseven/weapon_fiveseven_hy_kimono_diamonds_light_large.c82060a31b7e4b17c73eb76fd87c09037a3eba42.png',
'csgo/fiveseven/weapon_fiveseven_so_grey_nuclear_orange_five_seven_light_large.1f99a49ba11741a36385ef0934d8066624d4d257.png',
'csgo/fiveseven/weapon_fiveseven_so_jungle_light_large.d98e255283a8cfd09aacb25405a26e580e3d129f.png',
'csgo/fiveseven/weapon_fiveseven_so_orange_accents_light_large.b5ab3af11de68b90ca8b18e359ac0338d1a2d7f4.png',
'csgo/fiveseven/weapon_fiveseven_so_pmc_light_large.eb6a08d487f3423d956898bae7b84433b1f46d25.png',
'csgo/fiveseven/weapon_fiveseven_so_red_light_large.29ae7b2264bd2a390ecf51a51293d2c2202fdea9.png',
'csgo/fiveseven/weapon_fiveseven_sp_moro_textile_purple_yellow_light_large.47cc81847e4fd47b359bf0cfea09910d03a32bd7.png',
'csgo/fiveseven/weapon_fiveseven_sp_tape_orange_light_large.d784ec0c92136e9f3f33ca09444ff4fe6a1f5300.png',
    ],
    //"G3SG1"
    [
'csgo/g3s/g3sg1.png',
'csgo/g3s/weapon_g3sg1_am_ancient_wine_light_large.dfea71dc9fa6d9ee7aa528f0086e216336057c7e.png',
'csgo/g3s/weapon_g3sg1_am_g3sg1_murky_light_large.bc4e8d0e70d2952576d5c9653da71f21bc02b810.png',
'csgo/g3s/weapon_g3sg1_am_murano_violet_light_large.7a4ee0fb0e265881283e9282f5d79e8cea2635c8.png',
'csgo/g3s/weapon_g3sg1_cu_chronos_g3sg1_light_large.5db791048981cda0babe949ac443f09ba8aa9eb3.png',
'csgo/g3s/weapon_g3sg1_cu_g3sg1_blacksand_light_large.8a9b364779493ae19a87eb4e73aa47f4432d3f41.png',
'csgo/g3s/weapon_g3sg1_cu_g3sg1_executioner_light_large.36071be17a266f28d8631b0fd73a9be6767ce399.png',
'csgo/g3s/weapon_g3sg1_cu_g3sg1_glade_light_large.93e176857183136f472c81b75331929d7b51d3ad.png',
'csgo/g3s/weapon_g3sg1_cu_g3sg1_tacticalmap_light_large.c1340d04161c17f48cf0091a52f649c1e9bd8d41.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_buccaneer_light_large.68c69e9856fd43f17a4165d1f27116496657fd00.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_disrupt_light_large.393db5c1a143ad7fc9e3c42a7d17ca860ce490ab.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_flux_purple_light_large.6ed40e104625c9607e7df5ee60373a19d3dae634.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_savage_light_large.e452574f580f51b1da6312c0f80a0dc07e073d8b.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_ventilator_light_large.5cd3643d4d9cd0599e25a1302e788611bd9a0023.png',
'csgo/g3s/weapon_g3sg1_gs_g3sg1_viper_yellow_light_large.5a77c59b8c295d2e10f27b8372a146e973ddfb25.png',
'csgo/g3s/weapon_g3sg1_hy_arctic_contrast_light_large.d1444467ee9975d1b4d5287a280e8684e7338493.png',
'csgo/g3s/weapon_g3sg1_hy_arctic_light_large.0eb54eebce1517513ecdb3788459c09358971f77.png',
'csgo/g3s/weapon_g3sg1_hy_bluepolygon_bravo_light_large.6638623a4979512bb048fa22f9ec06a5c1172c7e.png',
'csgo/g3s/weapon_g3sg1_hy_desert_light_large.4e5561884f1cd7f8d6965b9c7991f89a702b72b4.png',
'csgo/g3s/weapon_g3sg1_hy_kimono_diamonds_orange_light_large.bdab5d4f92f5733ed056bbe276761c377b5c3401.png',
'csgo/g3s/weapon_g3sg1_hy_varicamo_light_large.6c944e82080f68d87881cdab86852e9375af9bb9.png',
'csgo/g3s/weapon_g3sg1_so_green_light_large.28c4e72757be64775c1111ac0e7142a147cacb9c.png',
'csgo/g3s/weapon_g3sg1_so_pmc_light_large.563d94315a5a6f57039ccdf5b672bf65d608c819.png',
'csgo/g3s/weapon_g3sg1_sp_g3sg1_militiaorange_light_large.215d54d5c86185e61d65694899bf029f6e070cab.png',
'csgo/g3s/weapon_g3sg1_sp_mesh_tan_light_large.19acce2a10000a2c03f8f89dc39ff1af3e8ca195.png',
'csgo/g3s/weapon_g3sg1_sp_moro_carving_lightblue_light_large.4d260ef80213690b0d967f94874fbed4c4a73484.png',
'csgo/g3s/weapon_g3sg1_sp_tape_short_jungle_light_large.02fd06db8f950789b6c4bff265df06439382c585.png',
'csgo/g3s/weapon_g3sg1_sp_zebracam_blue_light_large.42199f9c4c0bd1ff9f569d6e7348c5cedf4630f5.png',
    ],
    //"galil AR"
    [
'csgo/galil/galil_ar.png',
'csgo/galil/weapon_galilar_aa_fade_metallic_light_large.6910731d5c0d857052afbba2d24416156a6a96ba.png',
'csgo/galil/weapon_galilar_am_geometric_steps_light_large.fd64d3b26b97da3c03ab009e91d3f53c95e86cc0.png',
'csgo/galil/weapon_galilar_an_titanium30v_light_large.4264e8ec1cedb3bce31a89c934c630bd56d480c1.png',
'csgo/galil/weapon_galilar_cu_cerbrus_galil_light_large.761250f955c66cbb100400e2fc1459ce74320282.png',
'csgo/galil/weapon_galilar_cu_galil_abrasion_light_large.8398e4836a0c26add3514a6af2262704d85fec07.png',
'csgo/galil/weapon_galilar_cu_galil_ar-camo_light_large.63272b54e93d40433f8ceec41efec2004d51941d.png',
'csgo/galil/weapon_galilar_cu_galil_candychaos_light_large.70c1dba6c2de996ec666a260b604c760e01bb20d.png',
'csgo/galil/weapon_galilar_cu_galil_chroma_pink_light_large.e29cb838de1fc6318d36ed2d7263b7fcef10a4d8.png',
'csgo/galil/weapon_galilar_cu_galil_destroyer_light_large.00308096b32ca8c6252ed241878ca1ec5e743c36.png',
'csgo/galil/weapon_galilar_cu_galil_eco_light_large.7f64e2d77423b3c4263a74caeda18383c2e487d5.png',
'csgo/galil/weapon_galilar_cu_galilar_particles_light_large.8732f64d53dbc9b0c732641655d4f99124d8cacc.png',
'csgo/galil/weapon_galilar_cu_sandstorm_light_large.008937727e75bf840d2b511d3d8493a12b5ed2ac.png',
'csgo/galil/weapon_galilar_gs_galil_nightwing_light_large.bc71fb0b9102f22348f39015b7de5affd60829e0.png',
'csgo/galil/weapon_galilar_gs_galil_phoenix_light_large.62909a6e708a56e8679b9aa9225ba438b1539511.png',
'csgo/galil/weapon_galilar_gs_galil_vandal_light_large.5144c3d7d0d1789bc5a25d3a62f15ccd876c9855.png',
'csgo/galil/weapon_galilar_gs_galilar_incenerator_light_large.669901b842361b46108ced0a555f5575839d093e.png',
'csgo/galil/weapon_galilar_hy_crumple_bravo_light_large.fcf25827c0ef88bac7e5b0567ecd5a7dbee01791.png',
'csgo/galil/weapon_galilar_hy_ddpat_orange_light_large.8499a023e61f6d3f7d03012521422bedaedd6c2b.png',
'csgo/galil/weapon_galilar_hy_forest_winter_light_large.2a0bc5c784fc6782304eb3ef68e4f07c6c92d3bf.png',
'csgo/galil/weapon_galilar_hy_galil_kami_light_large.f1783721b5318ea51bcb7890bf9cd0084afcd3e3.png',
'csgo/galil/weapon_galilar_hy_galil_signal_red_light_large.d7c26f54fd72ec451094ea7791e921346e013197.png',
'csgo/galil/weapon_galilar_hy_nuclear_skulls_aqua_light_large.7a9f8497a5e17485c2dcd09ec23da307bc3c06c3.png',
'csgo/galil/weapon_galilar_hy_ruins_red_light_large.560982e001f4ba6ec42ad09f913e33c1fda8108f.png',
'csgo/galil/weapon_galilar_hy_varicamo_light_large.4893edef6838528fadcc0a790a0ed132cdf2f1b9.png',
'csgo/galil/weapon_galilar_hy_varicamo_urban_light_large.04b4d709f1a3de109c7173d5ef55181138b247e0.png',
'csgo/galil/weapon_galilar_so_orca_light_large.5db78708464e031c686ae2e730e997e01526a7ea.png',
'csgo/galil/weapon_galilar_so_tornado_light_large.afda126687661b7907d69932f66a45d3e7c85573.png',
'csgo/galil/weapon_galilar_sp_galil_akoben_light_large.35a9e7a0fa943ac20d1b145d36bf3d4ccf33cc84.png',
'csgo/galil/weapon_galilar_sp_galil_caution_light_large.f70544059dd7c3ff5709c8a1493643d1ef2a5dde.png',
'csgo/galil/weapon_galilar_sp_galil_wave_light_large.0a4761ebb660428a77a622885054e1c44cf03959.png',
'csgo/galil/weapon_galilar_sp_mesh_slashes_light_large.f3c1ef94e52aa6cfe3c3ba2890e0d5ac0764900a.png',
'csgo/galil/weapon_galilar_sp_phoenix_tags_purple_light_large.6b71292ab21580860b1dd716c5ce956bc99132ec.png',
'csgo/galil/weapon_galilar_sp_spray_desert_sage_light_large.34f1268c2cf12e7794538b7140456d3716d81142.png',
    ],
    //"Glock-18"
    [
'csgo/glock/glock-18.png',
'csgo/glock/weapon_glock_aa_fade_light_large.61edcc69ff252d537a4dd14b016cbe826c26ae5b.png',
'csgo/glock/weapon_glock_aa_glock_18_urban_moon_fever_light_large.a0227f81e44dba68abbe595d427d62f9f90da99d.png',
'csgo/glock/weapon_glock_aa_vertigo_blue_light_large.0f4a3ec87faf17bb8557aa3b57a99606ac24c44e.png',
'csgo/glock/weapon_glock_am_aqua_flecks_light_large.e7d41ce4dbf0cd29f1eb3daa5ce0bb753abd1903.png',
'csgo/glock/weapon_glock_am_ddpatdense_silver_light_large.4d83c0a0b958bb15f694c7047996ece59f4be05a.png',
'csgo/glock/weapon_glock_am_dragon_glock_light_large.e42a72a19a2239c992573b88179897af37c7f849.png',
'csgo/glock/weapon_glock_am_gamma_doppler_phase4_glock_light_large.ed9c2de2ffe8852136002385cfcee149dd202575.png',
'csgo/glock/weapon_glock_am_nuclear_pattern1_glock_light_large.01e91d2930e04d43215becb90447b2ebec1cb8d9.png',
'csgo/glock/weapon_glock_am_nuclear_skulls_green_light_large.37c3765f928a0a002d283c0fa7f4f409f4fa9e82.png',
'csgo/glock/weapon_glock_aq_brass_light_large.c9fbb8483ca7b5859fafc3c8fe495b3d396205dd.png',
'csgo/glock/weapon_glock_aq_glock_coiled_light_large.d4dcbf0d27479b95a4ad43c36f3b3f3dc87bbd84.png',
'csgo/glock/weapon_glock_aq_glock_dark-fall_light_large.ac35c22bc50660c89ecfe7654ee93bb9f00bd6f4.png',
'csgo/glock/weapon_glock_aq_glock18_flames_blue_light_large.5fed23d5a32793c25914eeb99b45f1a2b0cb9d6c.png',
'csgo/glock/weapon_glock_cu_glock_deathtoll_light_large.cfcc6a17037a33bbb524ca1856c07cf76dda449d.png',
'csgo/glock/weapon_glock_cu_glock_eyecontact_light_large.fb7988d1d3d9ff159f81d3c0d9a2eacb976e2842.png',
'csgo/glock/weapon_glock_cu_glock_hero_light_large.7b0f5975c7e0ba3ce1694c4795520184fc56c367.png',
'csgo/glock/weapon_glock_cu_glock_indigo_light_large.3786c7c3be7d03ee053050af2f7a8427782742e1.png',
'csgo/glock/weapon_glock_cu_glock_moon_rabbit_light_large.9063b9745250446c657632eb13a6325f51d101f2.png',
'csgo/glock/weapon_glock_cu_glock_noir_light_large.c93d0cbfa767d1f822a53ebfca0d57f532088c48.png',
'csgo/glock/weapon_glock_cu_glock_snackattack_light_large.145d863714fb0fd6f766ef28f3639c0efded5018.png',
'csgo/glock/weapon_glock_cu_glock_wasteland_rebel_light_large.284899ab35e5a29c6edb64b2af194cee19a0ed89.png',
'csgo/glock/weapon_glock_cu_glock-liquescent_light_large.151e954ed4aef28ccc55d0ca4b43a7d9644f36ac.png',
'csgo/glock/weapon_glock_cu_glock18_corroden_light_large.68906a0523399b599555746b51db2ffac29c5db5.png',
'csgo/glock/weapon_glock_cu_glock18_warmaiden_light_large.d99a6fdb4c1469d164182a74edba8de055726aa5.png',
'csgo/glock/weapon_glock_cu_glock18_weasel_light_large.e02e6e5196ebdee47c595799ff011dd645147505.png',
'csgo/glock/weapon_glock_cu_money_glock_light_large.9866d8ea7d9b5c569377aef5fb19bbc74ea4058d.png',
'csgo/glock/weapon_glock_gs_glock_elite_camo_light_large.00d135c0b32cabd8b48692d11794c830a9a4de5c.png',
'csgo/glock/weapon_glock_gs_glock_polymer_light_large.9a56b15b2deea5847b0820c5ad982c1796cc8e0c.png',
'csgo/glock/weapon_glock_gs_glock_thunder_dust_light_large.0e26afdd95bac17ce01c6e097ca0b97db3cffee4.png',
'csgo/glock/weapon_glock_gs_glock18_award_light_large.198c0dc5630970b1f3bbcb307a1318745ca006e7.png',
'csgo/glock/weapon_glock_gs_glock18_wrathys_light_large.8cf4aba20d193a1646b378a3d04a6fee3f66724c.png',
'csgo/glock/weapon_glock_hy_craquelure_light_large.8e97eb17a01e73c47a8987685d740b344aeb2cb8.png',
'csgo/glock/weapon_glock_hy_ddpat_pink_light_large.ddbb46e05e19607b8fa366cdb8efef39048e50e4.png',
'csgo/glock/weapon_glock_hy_leaf_blue_light_large.1b017cc8d4594d924537f9928db4253ff628284c.png',
'csgo/glock/weapon_glock_hy_nerodia_light_large.540067f703bf7b020d8fedfcc6322523ab449d68.png',
'csgo/glock/weapon_glock_so_night_light_large.e56ea92b4b8c1914a7f5f4e789483313845a0b4a.png',
'csgo/glock/weapon_glock_so_olive_light_large.1af3a84683b1f123d0bc17319d14979bf7a12115.png',
'csgo/glock/weapon_glock_so_red_light_large.17b18a34a4d840905587e918a8500576e91b0cb9.png',
'csgo/glock/weapon_glock_so_sand_bravo_light_large.b505115b9e7a3e6480697f0262d76c9518c65e50.png',
'csgo/glock/weapon_glock_sp_tire_tread_red_light_large.bf06d5ba0f2b746eff6a66aa7020acd7a87eddc4.png',
    ],
    //"M249"
    [
        'csgo/m249/m249.png',
        'csgo/m249/weapon_m249_aq_m249_aztec_light_large.81173c5b61be806039e643a0c273e4dce33bd5ee.png',
        'csgo/m249/weapon_m249_aq_obsidian_light_large.c8a38c9354c2f4531f0802eaa49caa9878bbf9ed.png',
        'csgo/m249/weapon_m249_cu_m249_deep_relief_light_large.227a01518f45cbb6a43981e36b76f60785f9085b.png',
        'csgo/m249/weapon_m249_cu_m249_downvote_light_large.9d51d5d89b1df07b160580b5b929f66f06bb8310.png',
        'csgo/m249/weapon_m249_cu_m249_sektor_light_large.c957e70c656024b2c062f7af2031a76cb3c83f1c.png',
        'csgo/m249/weapon_m249_cu_m249_spectre_light_large.b0a23c44e56390b4bbdc2c389911f6cc2b42da3d.png',
        'csgo/m249/weapon_m249_gs_m249_combine_light_large.6f8724ef896506ede0925a425da05969f19aafdc.png',
        'csgo/m249/weapon_m249_gs_m249_nebula_crusader_light_large.60f60c9e8203575e3e3f5574db51132e2b2fe7c7.png',
        'csgo/m249/weapon_m249_gs_m249_warbird_veteran_light_large.29a2ee22222b037e6825fb0c230aa799718e4115.png',
        'csgo/m249/weapon_m249_hy_blizzard_light_large.d247530ad94ee2a0c164116b89fd3f38a43dbf30.png',
        'csgo/m249/weapon_m249_hy_ddpat_jungle_bravo_light_large.d93812236444afc67a0d994cd3f6faa421a57114.png',
        'csgo/m249/weapon_m249_hy_zodiac3_light_large.299cb04c12c20280930562504161309fbb9c1e45.png',
        'csgo/m249/weapon_m249_so_jungle_light_large.1e5297273a0d6f70737aec6bf8ce370de6b87fad.png',
        'csgo/m249/weapon_m249_so_keycolors_light_large.bf0fe2b5d5b5c65358519ebaeeed6da72032bf4b.png',
        'csgo/m249/weapon_m249_sp_m249_frog_original_light_large.7331eb3d676ebdf8df71adb58b43aea63660f785.png',
        'csgo/m249/weapon_m249_sp_mesh_python_light_large.39f20f5499a7d68e8b90a9e064c993e9a803d721.png',
        'csgo/m249/weapon_m249_sp_moro_carving_burnt_light_large.665c8aa42875f46a38e1fe38d3ee4ea7ea65b1bf.png',
        'csgo/m249/weapon_m249_sp_palm_night_light_large.8d8112a73e3c854dce2126fa766ae8a93532f1aa.png',
        'csgo/m249/weapon_m249_sp_spray_light_large.1954bdc0dc1e10eebeece7f34e2b9f8e51596d55.png',
        'csgo/m249/weapon_m249_sp_zebracam_light_large.d0d25a58f276d6a538eab874f1f4aa5724f37b6e.png',
    ],
    //"M4A1-S"
    [
'csgo/m4a1/m4a1-s.png',
'csgo/m4a1/weapon_m4a1_silencer_am_crystallized_dark_green_light_large.d9fbf93df4fb38d302a7dd8b2783ce738035a916.png',
'csgo/m4a1/weapon_m4a1_silencer_am_m4a1-s_alloy_orange_light_large.82bd272d0256f17eb86029a8d1411c4e5bf2bc9c.png',
'csgo/m4a1/weapon_m4a1_silencer_am_m4a1s_bluesmoke_light_large.20c39cd69587cfed699f1e1ebb05f4dc735e06d6.png',
'csgo/m4a1/weapon_m4a1_silencer_am_metals_light_large.1ef1155c712349b2aaee8172a3da7fb1e62e1362.png',
'csgo/m4a1/weapon_m4a1_silencer_am_zebra_dark_light_large.f484368a478f5e02d1b9d5e2816354fe705503f3.png',
'csgo/m4a1/weapon_m4a1_silencer_an_red_m4a1s_light_large.ec59e9b09e1e9f46af18dea65ee90e5bdfe9ebb1.png',
'csgo/m4a1/weapon_m4a1_silencer_aq_m4a1s_basilisk_light_large.18370d6557500376e137c7f6b07c7ed46c9dccf2.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1_flashback_light_large.5e6c2d582d33006425b61dc0e0e8c28ecda9f853.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1_hyper_beast_light_large.31850937661935a062d5f6faf5a1f02fdb90b861.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1_snake_light_large.fcdef378938398a506d3e173e766322579867e74.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1-s_elegant_light_large.1acbb0060648091ac532de68cfd720b7ad980564.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1-s_silence_light_large.e48d06783e5c6c99b2f65d6c82891ce9739f0181.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_csgo2048_light_large.6531225ca224416df4dc6aa12c6ecea582b1e110.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.144b4053eb73b4a47f8128ebb0e808d8e28f5b9c.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_feeding_frenzy_light_large.e1cb803e0e10ae4457e42d34ec8515b1500f4762.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_metritera_light_large.ec9c5f86d6788402519be7bd51b849355fbf93ee.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_nightmare_light_large.68e892eb4dedad809205a5fd06f175297d1be1cb.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png',
'csgo/m4a1/weapon_m4a1_silencer_cu_m4a1s_soultaker_light_large.4939d69bd691d421ca9c7d6558b46088c8ac5317.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1_decimator_light_large.5af82e99273fcc0a4ad35b2971b63787ee989d6a.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1_mecha_industries_light_large.2973cf5ca9d1592d6652bf14ac89bcd8593d4f0a.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1_shatter_light_large.f4d487cbf956eb13a505b8926c8f0f63cb3604b3.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1_vertigo_light_large.a144750a6903c3bdd9808e740d274648ae26c71e.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1s_insomnia_light_large.265e6eb866d751caf4bbe7f8c8b62e400c5f0175.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1s_operator_light_large.1e257113e58841ad0613b4e268d51d239df69a0e.png',
'csgo/m4a1/weapon_m4a1_silencer_gs_m4a1s_snakebite_gold_light_large.574ace77e1044dbf3a387f200b2867332e974f70.png',
'csgo/m4a1/weapon_m4a1_silencer_hy_forest_boreal_light_large.1a7f334b65d1ff1a4ca0bb4a1b164d643169f982.png',
'csgo/m4a1/weapon_m4a1_silencer_hy_icarus_light_large.4af0a9b1122471816242601013d478ade6a0697b.png',
'csgo/m4a1/weapon_m4a1_silencer_hy_ocean_bravo_light_large.7a942449926153575269af174733edc7bed5faeb.png',
'csgo/m4a1/weapon_m4a1_silencer_hy_redtiger_light_large.0b40a51b0020fa1781ddb7368e3b39c03263b2dd.png',
'csgo/m4a1/weapon_m4a1_silencer_hy_varicamo_light_large.794803daec1d6d6cd2c47d8e8520d9f5f0b1fc1b.png',
'csgo/m4a1/weapon_m4a1_silencer_so_orange_accents_light_large.625f58cdc5641f440ccf2fe866c3152b5803d1f2.png',
'csgo/m4a1/weapon_m4a1_silencer_sp_technowar_red_light_large.8b95f916513ef9d3ceab3f8b87acd23779aeef0a.png',
    ],
    //"M4A4"
    [
'csgo/m4a4/m4a4.png',
'csgo/m4a4/weapon_m4a1_am_circuitboard_silver_light_large.7a3b860966a77bcb8124a2c38cf4b0449fd542ba.png',
'csgo/m4a4/weapon_m4a1_am_kimono_sunrise_light_large.f4c4233632fed7004ab4666aeaceab53233cddd6.png',
'csgo/m4a4/weapon_m4a1_cu_bullet_rain_m4a1_light_large.4b359387b8abcdb0ae92134ba0f2106c405d9222.png',
'csgo/m4a4/weapon_m4a1_cu_csgo_camo_light_large.9e1a644f88ce7ab73f63d5b90070b9993fcb14ac.png',
'csgo/m4a4/weapon_m4a1_cu_m4_asimov_light_large.af03179f3d43ff55b0c3d114c537eac77abdb6cf.png',
'csgo/m4a4/weapon_m4a1_cu_m4a1_howling_light_large.c64a9fc9fa04b5d10d4b1e200135e59285c8a77c.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_ancestral_light_large.cbd9732689f42b7aec91bdb9166b1ee414974cb7.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_cyberpunk_light_large.8ed70290de88498fcfdc0c89f23ba2ad60bd13a5.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_desolate_space_light_large.1fcbd5e124ae7c54cf12e6f76c431e6671a73845.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_elite_tactical_light_large.015fd86aa32f4f0331aa1b7dc2571d89dbf38671.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_evil_daimyo_light_large.c208ba252c0d8902caa973a634cbfa945508a716.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_griffin_light_large.255bd83fd343ea8e8d84a1d5c94959d0b26cafae.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_hellfire_light_large.d3675840da1d60e19ba26fc11539e9351a0ec892.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_love_light_large.5f7f6a3085aedc1a878dd10881144e7898a2db3d.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_neo_noir_light_large.b03bd6902c1d714af0bd4795dce8e653dd12dcc9.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_queenfairy_light_large.e5fb022145442cf85ba485d8c3cfd4f6391938e0.png',
'csgo/m4a4/weapon_m4a1_cu_m4a4_temukau_light_large.a41eb80c70cbbee5d84e53b5cd1eaa10954c938d.png',
'csgo/m4a4/weapon_m4a1_cu_poseidon_light_large.3db5688a5b47bd5720e7384abf13c45231a3cc03.png',
'csgo/m4a4/weapon_m4a1_cu_titanstorm_light_large.a161ff6ea23af2d9bbdc0a757f5163fa1ad87a30.png',
'csgo/m4a4/weapon_m4a1_cu_xray_m4_light_large.e929bb3998df4902c2bd6f6fbb775cec071558ba.png',
'csgo/m4a4/weapon_m4a1_gs_m4_flowers_light_large.9953864326ad495e32b855ac45d96367b149be90.png',
'csgo/m4a4/weapon_m4a1_gs_m4a4_chopper_ghost_light_large.374913da49233223de4ca1ff09a20cc2a7a94288.png',
'csgo/m4a4/weapon_m4a1_gs_m4a4_coalition_light_large.313da3169bf32c427325ebc7f0aae1a0272e399a.png',
'csgo/m4a4/weapon_m4a1_gs_m4a4_emperor_light_large.61be48559b0a5d57e04108f876f5cf755ec8acc8.png',
'csgo/m4a4/weapon_m4a1_gs_m4a4_pioneer_light_large.2dcc4c93ad184179e34b9359090d7398718d36e4.png',
'csgo/m4a4/weapon_m4a1_gs_m4a4_royal_squire_light_large.f802ec3cf9c1c6837d841384f6d112367340880b.png',
'csgo/m4a4/weapon_m4a1_gs_m4a4_sector_light_large.43ec111ef558f74c49e31621d455f93ba414714e.png',
'csgo/m4a4/weapon_m4a1_hy_ddpat_urb_light_large.7ced16120d54bcdc2faa66d215ae81041ab23bc4.png',
'csgo/m4a4/weapon_m4a1_hy_ddpat_urban_red_light_large.ecde1360b79a9d925495a523ee95eb9f4b4b17eb.png',
'csgo/m4a4/weapon_m4a1_hy_desert_light_large.30d1e3dcc03baca8d4a3f222b3b851ad12c77799.png',
'csgo/m4a4/weapon_m4a1_hy_hunter_modern_light_large.9753bebcd2ed4bba8a432283f35c5d197912db9d.png',
'csgo/m4a4/weapon_m4a1_hy_red_hex_light_large.cd2153af94a302c0293620289716a29d9fbfbeca.png',
'csgo/m4a4/weapon_m4a1_hy_v_tiger_light_large.cdf3f8e434ea36842fa520cabec812eaba3f2fa5.png',
'csgo/m4a4/weapon_m4a1_so_tornado_light_large.5e852b0952af47cde9b8c60edf137f34b81fe812.png',
'csgo/m4a4/weapon_m4a1_sp_bud_blue_light_large.f31b88226c77480548a0c1e62581bea8f3946906.png',
'csgo/m4a4/weapon_m4a1_sp_nukestripe_orange_light_large.deb3995ec0bd7021cf33ca089f1d889fb92aba94.png',
'csgo/m4a4/weapon_m4a1_sp_star_bravo_light_large.d4a56abe885a1a03ea173a6aaeb4f10bcec6a0c2.png',
'csgo/m4a4/weapon_m4a1_sp_zebracam_bw_light_large.de08ef2a6d7524e682118cef5d12124c5156dfa8.png',
    ],
    //"MAC-10"
    [
'csgo/mac10/mac-10.png',
'csgo/mac10/weapon_mac10_aa_fade_light_large.69bd70b0bb129a5c671945090f56322c37b6bcf2.png',
'csgo/mac10/weapon_mac10_aa_fade_metallic_light_large.1af4a93ef5fee1f1510d364f54d1a730474860ef.png',
'csgo/mac10/weapon_mac10_aa_mac10_the_last_dive_light_large.d0039a83384acbe26f9337c8a83e81f6410b7dc9.png',
'csgo/mac10/weapon_mac10_am_gold_brick_light_large.3583c29af715c4700176149b3866c35dcc78d61e.png',
'csgo/mac10/weapon_mac10_am_knots_brown_light_large.c968468f0f9fc526f7a12dd8a7f5ebd7fcc24819.png',
'csgo/mac10/weapon_mac10_am_mac10_aloha_light_large.bde81a20851cfd9f788d66745f69a288e57ea319.png',
'csgo/mac10/weapon_mac10_am_mac10_electricity_light_large.88207515fce5ebad84df16d60ff2203a5d4a2702.png',
'csgo/mac10/weapon_mac10_am_mac10_malachite_light_large.65b0eff12e655fb94ec9de545348178f1a5d60e0.png',
'csgo/mac10/weapon_mac10_am_mac10_oceani_light_large.25e5d3d5e249e11fe32971fa7bcdc0e5a1c777bd.png',
'csgo/mac10/weapon_mac10_am_nuclear_skulls3_mac10_light_large.467b325065522e5248247cf125bec257cdb66902.png',
'csgo/mac10/weapon_mac10_am_ren_red_light_large.985e0a9b70dc43f90bfb6e9ce28398565396d633.png',
'csgo/mac10/weapon_mac10_an_silver_light_large.3082e91b9fddbddc9b72da44382fe1def00fa5fa.png',
'csgo/mac10/weapon_mac10_aq_etched_mac10_bravo_light_large.ec4cf2f7748ac5318292630c8c7e3c2d016723e3.png',
'csgo/mac10/weapon_mac10_aq_mac_10_alien_camo_light_large.10568510ec37ec8515546e5ac03455391bb9ec2d.png',
'csgo/mac10/weapon_mac10_aq_oiled_light_large.9d9de18ba0a4dc915e495c05b0d1419bd2cd7a02.png',
'csgo/mac10/weapon_mac10_cu_korupt_light_large.e1efdcab099278a147fe2f07405214218e74e705.png',
'csgo/mac10/weapon_mac10_cu_luggage_mac10_light_large.d05e658d3d11de252d21a82f6c26a7b6c47ac1df.png',
'csgo/mac10/weapon_mac10_cu_mac10_alekhya_duo_light_large.7173900a6b75cee250a55197483cba3c0204b955.png',
'csgo/mac10/weapon_mac10_cu_mac10_decay_light_large.eaddf6ddfa5975248fc134ccfc523ab11bf97070.png',
'csgo/mac10/weapon_mac10_cu_mac10_isoonna_light_large.004a4ddf7e9318cfbe98448b1c3b888fd4aff8dd.png',
'csgo/mac10/weapon_mac10_cu_mac10_monkeyflage_light_large.8f24ab7b33719d43a7d4e0886cb3f79d506e7068.png',
'csgo/mac10/weapon_mac10_cu_mac10_nacre_light_large.80fa2f0691e37e6e2a2755b8a7f6ccd6bfa83f3b.png',
'csgo/mac10/weapon_mac10_cu_mac10_neonrider_light_large.4ba82cf2ba2d9fdc694d707b563421bbcc20b174.png',
'csgo/mac10/weapon_mac10_cu_mac10_pixie_light_large.26950e30ef7e74e69920d67965c409b8b88902c8.png',
'csgo/mac10/weapon_mac10_cu_mac10_portable_light_large.d4e97127a92ecba12884e5af083aa84685486b39.png',
'csgo/mac10/weapon_mac10_cu_mac10_propaganda_light_large.d8a065b191f3df86a7e2e25d4349790ed56e0593.png',
'csgo/mac10/weapon_mac10_cu_mac10_redhot_light_large.d5e1e0b433e3340266635970ca45cbbf810216f2.png',
'csgo/mac10/weapon_mac10_cu_mac10_sakkaku_light_large.b590689d0ca099e8a759dd0a86da0710a58bca42.png',
'csgo/mac10/weapon_mac10_cu_mac10_toybox_light_large.0eaa520b37c7d53ed3ef541e59d2303714c7e21d.png',
'csgo/mac10/weapon_mac10_gs_mac10_checker_light_large.15e4936899fbfca7c5980be83993e57aca446422.png',
'csgo/mac10/weapon_mac10_gs_mac10_dust_crate_light_large.988816a75bc41f34cb18aff91ce6256299a9a52c.png',
'csgo/mac10/weapon_mac10_gs_mac10_exo_pipes_light_large.355aad3fa1602f8e682a5663f72b12feba0d4cf2.png',
'csgo/mac10/weapon_mac10_gs_mac10_fish_bait_light_large.31a855282029b915748b21c11521b5f111b05e67.png',
'csgo/mac10/weapon_mac10_gs_mac10_snake_light_large.0b91f21def06a39df43e93f6cd25cf13e4edfd19.png',
'csgo/mac10/weapon_mac10_gs_mac10_stalker_light_large.cb4d7a60a69978f1575526f979be8e1e1538a673.png',
'csgo/mac10/weapon_mac10_hy_ddpat_urb_light_large.0c29c0fcd256ee141fac956e954179504dfe0c74.png',
'csgo/mac10/weapon_mac10_hy_vertigospray_blue_light_large.834dc852bd8c722d0dd30a05b3f72e6401cd987b.png',
'csgo/mac10/weapon_mac10_so_indigo_and_grey_light_large.9900a7e2bc4fc67df08d3aff103526f666f1ef70.png',
'csgo/mac10/weapon_mac10_so_purple_light_large.c4e2252fe50aab42b6dcd871f33786f68e6261ea.png',
'csgo/mac10/weapon_mac10_so_red_light_large.00ffdb3b77314dae95b0683242cba794dbe5dd03.png',
'csgo/mac10/weapon_mac10_so_tornado_light_large.38973a9ca86e017389bed34a6b1c86a2b6585891.png',
'csgo/mac10/weapon_mac10_sp_mirage_flowers_tan_light_large.661511b89c0776fc024cf6b8e10390fa93e7aad6.png',
'csgo/mac10/weapon_mac10_sp_palm_light_large.22a3296d079e27cb7bb291e15eff10c29aa89b3e.png',
'csgo/mac10/weapon_mac10_sp_twigs_beach_light_large.82c99f7aa915b87043e167b42e25a5fbe2e8c1e2.png',
    ],
    //"MAG-7"
    [
'csgo/mag7/mag-7.png',
'csgo/mag7/weapon_mag7_am_carbon_fiber_light_large.226aab440e6e6041b5b4b09f907695aa854bcce0.png',
'csgo/mag7/weapon_mag7_am_chainmail_light_large.e6d6e648f7b590f64af2805f59271a364f1b2283.png',
'csgo/mag7/weapon_mag7_am_mag7_caustic_light_large.133bbfa9f3cf8220f8eb5556d4d54a766cf1c9e0.png',
'csgo/mag7/weapon_mag7_am_mag7_malform_light_large.8a87c99550a4f609e7357bb4f63facf86279afca.png',
'csgo/mag7/weapon_mag7_am_navy_shine_light_large.fd2f1241ce0bfa16bbbd8971f72846429cc874d0.png',
'csgo/mag7/weapon_mag7_am_urban_light_large.49c3b842a021265e8dd66f05ebe20fc76a6dfdba.png',
'csgo/mag7/weapon_mag7_an_silver_light_large.ffb14b93d930ff95920974edd78cf6b31b48fe43.png',
'csgo/mag7/weapon_mag7_aq_mag7_swag7_light_large.20341e396db88a5ecde84f8b803a500f4aec3b55.png',
'csgo/mag7/weapon_mag7_aq_steel_inferno_light_large.4313699bf1fb212a490703f11b20dab3479ebe9c.png',
'csgo/mag7/weapon_mag7_cu_mag7_heaven_light_large.ea002eaa1f984e278f59a934ca9016f038d06120.png',
'csgo/mag7/weapon_mag7_cu_mag7_insomnia_light_large.0d971fb17ca0bb1df7baed6a1caa902c56c1ea5b.png',
'csgo/mag7/weapon_mag7_cu_mag7_monster_call_light_large.8bd66022cda47ab85f73e765dc35526e6a2ce7f0.png',
'csgo/mag7/weapon_mag7_cu_mag7_myrcene_light_large.7cd0ed89db7accc44d3289f9f1529e0a75f4643e.png',
'csgo/mag7/weapon_mag7_cu_mag7_predictor_light_large.431734cae141d06a20fa3615d38e3b15c708602a.png',
'csgo/mag7/weapon_mag7_cu_mag7_redhot_light_large.76087a836e8c98fd10765a4b56dca946ba5acb4d.png',
'csgo/mag7/weapon_mag7_cu_mag7_tribal_light_large.c226728af447f07808ea5954eb9a24528092d972.png',
'csgo/mag7/weapon_mag7_gs_mag7_bismuth_light_large.f5df59b5024b23a1ca187985b7650e337adda4b4.png',
'csgo/mag7/weapon_mag7_gs_mag7_glass_light_large.beadef0a6bd24e7ba3ed051b2b092c27119ce075.png',
'csgo/mag7/weapon_mag7_gs_mag7_justice_light_large.fcdc73ab779ab093ee7d90d91c1e3c369bbc8d65.png',
'csgo/mag7/weapon_mag7_gs_mag7_popdog_light_large.3c45fd23cd1947bb9b1747e36823980a44feaed4.png',
'csgo/mag7/weapon_mag7_gs_mag7_praetorian_light_large.55d96fbd30315911a2397ef950887e8fda43a3ec.png',
'csgo/mag7/weapon_mag7_hy_geometric_steps_green_light_large.542348e3effe63aae75b070cb1ca7d193e8356cf.png',
'csgo/mag7/weapon_mag7_hy_icosahedron_light_large.f7ea8cca0b48a0463d0877af9c94e7f54d0f1d79.png',
'csgo/mag7/weapon_mag7_hy_nuclear_hotorange_light_large.35367773b8501fa045ad8c58387c6f48fc848045.png',
'csgo/mag7/weapon_mag7_so_aqua_light_large.fee69dfe94d0158d2e7d8d049accdb967b8a924a.png',
'csgo/mag7/weapon_mag7_so_sand_light_large.9dfc46fd60aa92768b02d39371d5aac04b892ff8.png',
'csgo/mag7/weapon_mag7_so_stormfront_light_large.40f72ef6782f32f64bd883923fedfe0d1512d582.png',
'csgo/mag7/weapon_mag7_so_yellow_light_large.bb2e6280c1d92a574c93123d79d5724276db69f3.png',
'csgo/mag7/weapon_mag7_sp_hazard_bravo_light_large.51f8430aea46a8f93e504fb9ea950cd772930d6d.png',
'csgo/mag7/weapon_mag7_sp_mag7_firebitten_light_large.640af2edb52a7f170620e175ddaa5f5cf763325b.png',
'csgo/mag7/weapon_mag7_sp_nukestripe_brown_light_large.e1d7540ba5131a2e2cf36a8f7c6edc98d0cd431a.png',
    ],
    //"MP5-SD"
    [
'csgo/mp5/mp5-sd.png',
'csgo/mp5/weapon_mp5sd_am_circuitboard_aqua_light_large.205e1ac1b5bfbbfa8f0449cc08b42daf3e4addd2.png',
'csgo/mp5/weapon_mp5sd_cu_mp5_desert_strike_light_large.44958e2a47446043d6c929d5f4b4e3bea10f41c9.png',
'csgo/mp5/weapon_mp5sd_cu_mp5sd_quick_liquidation_light_large.2b446c710928debe38469e33b3b9030bd218c0e3.png',
'csgo/mp5/weapon_mp5sd_gs_mp5_conditionzero_light_large.4ed0ebd4f909faf2e09b5e18ec08e0a093719f63.png',
'csgo/mp5/weapon_mp5sd_gs_mp5_etch_light_large.a86867a43e3607c1826b6d106870bf69642687b0.png',
'csgo/mp5/weapon_mp5sd_gs_mp5_fbi_light_large.98c397d31feb201fd3d754a2e0b1d1508d75b2b9.png',
'csgo/mp5/weapon_mp5sd_gs_mp5_festival_drip_light_large.c71af0a784e5ecd6e5d5f2f71961be155e283cde.png',
'csgo/mp5/weapon_mp5sd_gs_mp5_kid_necronomicon_light_large.87443871e29948cd2cea24c01bd241b3623e91dd.png',
'csgo/mp5/weapon_mp5sd_gs_mp5_neon_flektarn_light_large.d76e6385501ee98562f3a5ce5fe08f7c68e10046.png',
'csgo/mp5/weapon_mp5sd_gs_mp5sd_astromatic_light_large.d7acba118f13e4b7b0d9146dddd32cf71da9210d.png',
'csgo/mp5/weapon_mp5sd_gs_mp5sd_wasteland_legacy_light_large.95ba928dc2c910eb819194227aa9196fdf6d9eea.png',
'csgo/mp5/weapon_mp5sd_hy_bamboo_stmarc_light_large.1d07511b139360d0e973f8c7e316dc1792a2b812.png',
'csgo/mp5/weapon_mp5sd_hy_labrat_mp5_light_large.bbdd9b7e1445618106b9709261787f8d800f7391.png',
'csgo/mp5/weapon_mp5sd_hy_trainarchitect_light_large.9ba8cb9505f0b67e608050ce5aa307e32dabbe1e.png',
'csgo/mp5/weapon_mp5sd_so_orange_accents3_light_large.0a75359a9c3fb4cd3084067358141b875f285724.png',
'csgo/mp5/weapon_mp5sd_sp_tape_short_rally_light_large.2fdb10eba1dbf17030a2c0867fc385fe0449b974.png',
    ],
    //"MP7"
    [
'csgo/mp7/mp7.png',
'csgo/mp7/weapon_mp7_aa_fade_mp7_light_large.ed53795666c445f3b00a4968062514b3bb5dd166.png',
'csgo/mp7/weapon_mp7_am_circuitboard_green_light_large.0df678715d2256928d817c2e89575879f03ad68e.png',
'csgo/mp7/weapon_mp7_am_heist_plans_yellow_light_large.5d416001244a233cd2e9feabc4046b5788c3b051.png',
'csgo/mp7/weapon_mp7_am_ossify_blue_light_large.b2c077afc23ddb48381629155713816dbf09fb84.png',
'csgo/mp7/weapon_mp7_an_navy_light_large.7b705336c3ee472db933931597f0ab191217b3dc.png',
'csgo/mp7/weapon_mp7_aq_mp7_ultramodern_light_large.5351e1926e4a9599d149c4941a8603f4143ff999.png',
'csgo/mp7/weapon_mp7_cu_mp7_classified_light_large.231ba61751c2976258bf96b3d1db5ae6ecb03b95.png',
'csgo/mp7/weapon_mp7_cu_mp7_fear_light_large.17f608ce70f44af09c1a92c541430804429ae2d6.png',
'csgo/mp7/weapon_mp7_cu_mp7_khaki_light_large.c9fb92fece0f425328e2c5c8c536302ed2dbcf99.png',
'csgo/mp7/weapon_mp7_cu_mp7_nemsis_light_large.72074e71a27827f41dc5d6f511d2f003c1b60d8a.png',
'csgo/mp7/weapon_mp7_cu_mp7_racketeer_light_large.ba5b3641b7b309cdd16d9f54fc2bc2331e738929.png',
'csgo/mp7/weapon_mp7_cu_mp7_replica_light_large.f56c050cb5147918efb6872ce61fda358a684cf5.png',
'csgo/mp7/weapon_mp7_cu_mp7-commander_light_large.260d3f2765c83f75eadac5abd6ef4187ea2c2089.png',
'csgo/mp7/weapon_mp7_gs_final_pooldeadv2_light_large.30ea2c8c934b49fa0a5e2b8c50ec880c10e2f295.png',
'csgo/mp7/weapon_mp7_gs_mp7_bloodsport_light_large.ab5c304901ceb320482742b041815e7b5e3ccb95.png',
'csgo/mp7/weapon_mp7_gs_powercore_mp7_light_large.cff12134204aef1ddc67e142088a2b7cec911960.png',
'csgo/mp7/weapon_mp7_hy_ddpat_light_large.0207fb5fe0a1e21cdda28e005f7960f2dc4728b9.png',
'csgo/mp7/weapon_mp7_hy_drywood_green_light_large.a2a57b124a5e8a3ad61912649f472f2b477bdad9.png',
'csgo/mp7/weapon_mp7_hy_gelpen_light_large.e19dd688c21ae094ffc3649e80ee1c1f0959125a.png',
'csgo/mp7/weapon_mp7_hy_plaid1_light_large.56b2f9cbc6d9a7aae3c1eca41151a2067a1427e8.png',
'csgo/mp7/weapon_mp7_hy_skulls_light_large.3e38912bdbea8a2b03b149e619f9f141e54facfd.png',
'csgo/mp7/weapon_mp7_hy_varicamo_red_light_large.7110895d0ad1626929f361598b7f201a5ef3701a.png',
'csgo/mp7/weapon_mp7_so_olive_bravo_light_large.fd49ae0c11fa44fb6110f4ec9d34651d4e6f9185.png',
'csgo/mp7/weapon_mp7_so_whiteout_light_large.1f27273c189c19b42567bdd44ffc3e5be70ea3a4.png',
'csgo/mp7/weapon_mp7_sp_bud_green_light_large.9b06527d579a047b676e49001fa16b39208f9149.png',
'csgo/mp7/weapon_mp7_sp_dapple_light_large.d78eb500eb366b42a585762582f34009835dd946.png',
'csgo/mp7/weapon_mp7_sp_labyrinth_light_large.05382e4a98099c6747e1a3d636b47bd617b8866a.png',
'csgo/mp7/weapon_mp7_sp_mp7_impire_light_large.aee431bcc2114fbc9f5cf46ca9735c86ddb450ba.png',
'csgo/mp7/weapon_mp7_sp_mp7_tribal_yellow_light_large.1c05d27487feb5d82e8165721942ea3a67e6ba33.png',
'csgo/mp7/weapon_mp7_sp_spray_army_light_large.e879b8808f8c967e4f08fde194d6d58f64dfdb2d.png',
'csgo/mp7/weapon_mp7_sp_tape_orange_light_large.5870d3d214c5b4cd923d68c4a016b72596808db1.png',
'csgo/mp7/weapon_mp7_sp_zebracam_red_light_large.d55be83c6281f9d9bf4125173dcea870cf9ca0b1.png',
    ],
    //"MP9"
    [

       ' csgo/mp9/mp9.png',
'csgo/mp9/weapon_mp9_aa_hide-mp9_light_large.77be0c0ed8276383c6a2d42842df3108bbdd173b.png',
'csgo/mp9/weapon_mp9_aa_mp9_fuji_pink_light_large.5c7bf05ff05d82c34b6d71a3aa97537e55cec97e.png',
'csgo/mp9/weapon_mp9_aa_pandora_light_large.837ea28260252a1f654c272289007ae3c4c3e7ec.png',
'csgo/mp9/weapon_mp9_aa_vertigo_light_large.41a7195e0a6ba44c2fc64d64bee0635444b0c569.png',
'csgo/mp9/weapon_mp9_am_army_shine_light_large.59520d9221e58bdc6b6946943cca0823b7460509.png',
'csgo/mp9/weapon_mp9_am_metal_inlay_light_large.a49681fb3a39bd378051dd22ff9f988fd831d41f.png',
'csgo/mp9/weapon_mp9_am_mirage_flowers_metalic_light_large.19bdfea08b854122c4e7e71852bddda9a59ed3cd.png',
'csgo/mp9/weapon_mp9_am_mp9_bioleak_light_large.d9b0d0e9fea2104871e0510bd704bfa03cdd6056.png',
'csgo/mp9/weapon_mp9_am_mp9_nitrogen_light_large.3a0b5a7cd31a7cfd5f0d90b9a0a1dbfcdb642cca.png',
'csgo/mp9/weapon_mp9_am_stained_glass_light_large.24d1cb9e7a99e9b0e5663a245d65b56c42f36a0b.png',
'csgo/mp9/weapon_mp9_am_thorny_rose_mp9_light_large.a187f13404eba96de622f4c94e85078fb18d8d7c.png',
'csgo/mp9/weapon_mp9_an_red_light_large.051bb03c037d5218c15c2b9f9797b21b5d0744a8.png',
'csgo/mp9/weapon_mp9_cu_mp9_black_sand_light_large.37dce08f403ec73c1e16b3dc46068b22293e9514.png',
'csgo/mp9/weapon_mp9_cu_mp9_chevron_light_large.698ab583537e3ed4b7661d3fcf75be62f0cdfab9.png',
'csgo/mp9/weapon_mp9_cu_mp9_deadly_poison_light_large.0776976e709ec7b503dd7e47b8c962338615b5da.png',
'csgo/mp9/weapon_mp9_cu_mp9_food_chain_light_large.5895f4cc864387a61a3783470037e6ed1953f7df.png',
'csgo/mp9/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png',
'csgo/mp9/weapon_mp9_cu_mp9_hydra_light_large.b7763a811b3bc9d19d04502fba0edc6cbe355766.png',
'csgo/mp9/weapon_mp9_cu_mp9_island_floral_light_large.d8f6334a2905b146dd2107e592068bdb333f49cd.png',
'csgo/mp9/weapon_mp9_cu_mp9_narcis_light_large.c63eaf3fab8c65ec3ab22da8205cbe3c51366d7a.png',
'csgo/mp9/weapon_mp9_cu_mp9_superlight_light_large.81ad837f4c889f250fa03b227ef74555614de55d.png',
'csgo/mp9/weapon_mp9_cu_mp9_vein_light_large.d0189b21fba4603ff88d407d6af0e63093f22ba7.png',
'csgo/mp9/weapon_mp9_gs_mp9_colony01_light_large.f8d9792131b786025a960ddeda2eeb77f97c55e3.png',
'csgo/mp9/weapon_mp9_gs_mp9_starlight_light_large.79d29560c71c4ba592824c1a1e3a8172cc7269be.png',
'csgo/mp9/weapon_mp9_hy_nuclear_pattern2_mp9_light_large.d5f2b29c15286ea4c63cd60061d1073ec7e84087.png',
'csgo/mp9/weapon_mp9_hy_plaid2_light_large.05b87c77e5f3c91c317f92fad7078891f44a4538.png',
'csgo/mp9/weapon_mp9_hy_splatter3_light_large.e87822a5caeb6a7181e0e866612c755f78f66be1.png',
'csgo/mp9/weapon_mp9_so_stormfront_light_large.7ba67d4546c43cb6dfb9e46eb68d23d5b57471ae.png',
'csgo/mp9/weapon_mp9_so_yellow_light_large.dfa50bdf02bccb9002d09c891d41ba65b1ce2d9c.png',
'csgo/mp9/weapon_mp9_sp_moro_carving_yellow_light_large.c86dfd42974acb136ffd14f9b9a283fdb80ec135.png',
'csgo/mp9/weapon_mp9_sp_tape_dots_bravo_light_large.e6624212c506215295ff5bf1b4c9bd7523db3ab5.png',
'csgo/mp9/weapon_mp9_sp_tape_short_sand_light_large.893d0bacf03750448cef4be1f649591b9622907e.png',
    ],
    //"Negev"
    [
'csgo/negev/negev.png',
'csgo/negev/weapon_negev_am_army_shine_light_large.884085f4a13b786f0ac7234d616ff01a848f28d5.png',
'csgo/negev/weapon_negev_am_negev_glory_light_large.11ebbe525e92bd0a56dd4d3a7795a31a01823ba7.png',
'csgo/negev/weapon_negev_an_navy_light_large.5dafc320a35bc04e03bbe0c4e4b1b293398d1bda.png',
'csgo/negev/weapon_negev_cu_bratatat_negev_light_large.b7589c335fb7066d53b1897e000f031d316641e6.png',
'csgo/negev/weapon_negev_cu_negev_annihilator_light_large.421039357ccbbcb9ba1456caa1ed2ae4829b5495.png',
'csgo/negev/weapon_negev_cu_negev_clear_sky_light_large.fc6f06d0f44e71207660f44b9b56021ce42a7e46.png',
'csgo/negev/weapon_negev_cu_negev_devtexture_light_large.a0c6f2fcbac9d473d7b9d0452773843c284683e3.png',
'csgo/negev/weapon_negev_cu_negev_impact_light_large.3315f6272c9bb790f96731643232008b4b8c7296.png',
'csgo/negev/weapon_negev_cu_negev_prototype_light_large.d1e542d85756bfc96bb32e6d2f8b548fbb26b2ad.png',
'csgo/negev/weapon_negev_cu_negev_titanstorm_light_large.eb7badc75ecbb1b4cdf35bfb53088731bbe11cb0.png',
'csgo/negev/weapon_negev_cu_negev_ultralight_light_large.f47680cfcd5c2eb1594fd5ae51ed9caf1bb6d9cd.png',
'csgo/negev/weapon_negev_gs_negev_thor_light_large.5060a7a913b1716faf7e81e145d65e0b4081b20f.png',
'csgo/negev/weapon_negev_hy_ducts_yellow_light_large.9d9335325a4a696ec6c2ef704ec1d4b3112c8c87.png',
'csgo/negev/weapon_negev_hy_negev_dazzle_light_large.3558ece2a70252dcaa8ea9e324539ae1a4fc1bc0.png',
'csgo/negev/weapon_negev_hy_phoenix_tags_red_light_large.6d8ee0ad8e74ea1a6c6af60824445bd1450e34ac.png',
'csgo/negev/weapon_negev_hy_varicamo_desert_light_large.169bd7cc986fe8b3411c2f8dc484dad4ee9fff71.png',
'csgo/negev/weapon_negev_hy_veneto_tan_light_large.f8a6e484f7ebc5dbf1f52e0ef9b0c4d7c5054a0d.png',
'csgo/negev/weapon_negev_hy_vertigospray_light_large.1e6d69be2dc5ac7290ef815ae6a53bb2143103c3.png',
'csgo/negev/weapon_negev_sp_negev_lionfish_light_large.f8326a67617c5138ab8b6f6afc81375fbd091033.png',
'csgo/negev/weapon_negev_sp_negev_turq_terrain_light_large.9c6c678b0e6bc949c0688f3e1cf39ca73e0a44ae.png',
'csgo/negev/weapon_negev_sp_nuclear_pattern3_negev_light_large.2d4cd96f9a94367d4c22991250eb9350437d8be6.png',
'csgo/negev/weapon_negev_sp_palm_bravo_light_large.3271a8edfb42d163f18a957bc162ddf01f29d30a.png',
    ],
    //"Nova"
    [
'csgo/nova/nova.png',
'csgo/nova/weapon_nova_am_army_shine_light_large.cbdf89414f6dd35c2de30d0cda9a6d84fbd32289.png',
'csgo/nova/weapon_nova_am_crumple_light_large.e46bab0dc8f8fe10b83c18ed9f9d9945352781af.png',
'csgo/nova/weapon_nova_am_crystallized_light_large.a5390c1d1d4b0a879d739917bc3d9f576feb01f2.png',
'csgo/nova/weapon_nova_am_nova_sand_light_large.0dcb0fc065477e01afda8ecbc83208551a5f2e97.png',
'csgo/nova/weapon_nova_am_oval_hex_light_large.766118990b3726617ed6203e95abc71417dbd057.png',
'csgo/nova/weapon_nova_am_veneto2_light_large.51bfad5db3f49f28c0802f4696f6282e4781f4db.png',
'csgo/nova/weapon_nova_aq_nova_sci_fi_light_large.9cf268816cad5bdbe33bd4d1ddce1eb81f905164.png',
'csgo/nova/weapon_nova_aq_steel_light_large.01de004c646bf108c25c61e88af29720164da476.png',
'csgo/nova/weapon_nova_cu_nova_antique_light_large.3391e20bf69d1a630ab0551fd0c2fa196d028e44.png',
'csgo/nova/weapon_nova_cu_nova_featherswing_light_large.49e81792746dc7844ff18c45fb23030cd8b66d59.png',
'csgo/nova/weapon_nova_cu_nova_hyperbeast_light_large.ec64e1aa22dc78fa692a2269a99669842b91cc6f.png',
'csgo/nova/weapon_nova_cu_nova_koi_light_large.28c3fe03f736b48dee10e1e88e77ac02132dcba6.png',
'csgo/nova/weapon_nova_cu_nova_polymer_light_large.a45b7ef66f8e62eecf26687892e5c4a76966d7f6.png',
'csgo/nova/weapon_nova_cu_nova_ranger_light_large.e3e9d3d47d5707092223a268ef59adb53ce76278.png',
'csgo/nova/weapon_nova_cu_nova_toy_soldier_light_large.e35320d18405b77fb9dd5e495fe4f625b8ab6c82.png',
'csgo/nova/weapon_nova_cu_skull_nova_light_large.558d42424adda8cc3383b05d5388f75837b07efa.png',
'csgo/nova/weapon_nova_cu_spring_nova_light_large.0be95a01dd54b579186464d0533c5195ffb14a8f.png',
'csgo/nova/weapon_nova_cu_walnut_nova_light_large.38cd0f88162ed88eb81df71f5fb18139c3a36c77.png',
'csgo/nova/weapon_nova_gs_nova_anchorite_light_large.419b869b5316b67a6ed673edafd088a9d16c066c.png',
'csgo/nova/weapon_nova_gs_nova_hunter_brute_light_large.8e2520f25098056ccd03b679859458fdc006c0a7.png',
'csgo/nova/weapon_nova_hy_ducts_grey_light_large.5da9a312aedae8885ff2e4dec4387fe614ce4ee3.png',
'csgo/nova/weapon_nova_hy_hunter_blaze_orange_light_large.3aa81203583739ae361787f625976dee6b7a1f25.png',
'csgo/nova/weapon_nova_hy_hunter_modern_light_large.47b91ea74e82f6e041bcf2d03c117be62ae25909.png',
'csgo/nova/weapon_nova_hy_seaside_bravo_light_large.bad13bb67e67ee02b782a574376df5e7e4ff766d.png',
'csgo/nova/weapon_nova_hy_torn_camo_paints_light_large.d53ec6ccfa639f7263876a96b019d3b3946af751.png',
'csgo/nova/weapon_nova_hy_vertigoillusion_yellow_light_large.73fdfc85585fff74804a6f22179406a48ce74947.png',
'csgo/nova/weapon_nova_hy_zodiac1_light_large.b06536b160c1807d7aa4c8e906771d3c5c2f7c59.png',
'csgo/nova/weapon_nova_so_green_light_large.f6b21316c800bb19022612e4b965f7d312e8e4f5.png',
'csgo/nova/weapon_nova_so_red_light_large.f19886d0d01e730fc1e050416a6642488526a94c.png',
'csgo/nova/weapon_nova_so_sand_light_large.33854508338eb4801380c7d7d328f2285ad3a746.png',
'csgo/nova/weapon_nova_sp_camo_wood_blue_light_large.d63e06a38ef396a945defd7c1ad9da9ba79fe60d.png',
'csgo/nova/weapon_nova_sp_leaves_light_large.b75cb0c1b82c4c1a559f0b1de3113cf967029176.png',
'csgo/nova/weapon_nova_sp_mesh_arctic_contrast_light_large.b85fc46665b05c2a0eea955a7946e644a7618944.png',
'csgo/nova/weapon_nova_sp_nova_wind_dispersal_light_large.9156d5a206e0e4b47f814bee9b6b54ac0a16b159.png',
'csgo/nova/weapon_nova_sp_zebracam_light_large.4a13bdc4fa3b5cd7d89c8cc83700d3a13326a6c3.png',
    ],
    //"P2000"
    [
'csgo/p2k/p2000.png',
'csgo/p2k/weapon_hkp2000_aa_fade_metallic_light_large.8efd81c9cf483adb6bdf58508800f62d3fc72310.png',
'csgo/p2k/weapon_hkp2000_aa_spacerace_orange_light_large.611eae311e379d24b3014383c6270d45012099a0.png',
'csgo/p2k/weapon_hkp2000_am_black_panther_light_large.6b1ddf6071adab6685bff33fb5b586267ee0f907.png',
'csgo/p2k/weapon_hkp2000_am_chainmail_light_large.26e8d5e01b6af8dc85be34cf16830ef6280166fd.png',
'csgo/p2k/weapon_hkp2000_am_numbers_red_blue_light_large.03b8794b01dd0aa5e28f1f52b1a8a2bc0ecf179c.png',
'csgo/p2k/weapon_hkp2000_am_ossify_blue_p2000_bravo_light_large.91f225635f7e4a986b51e09bba106ca6a4bf7dbb.png',
'csgo/p2k/weapon_hkp2000_am_p2000_imperial_red_light_large.c47e207307725ed1f9e8cf6d1478dbfd3523c7a7.png',
'csgo/p2k/weapon_hkp2000_am_scorpion_p2000_light_large.86333a595bc6c6139a4e84734e6eb88cd33d3e14.png',
'csgo/p2k/weapon_hkp2000_an_silver_light_large.84bfd2f0bdc7ab614d9cd7103b7d071606118166.png',
'csgo/p2k/weapon_hkp2000_aq_p2000_acid_clover_light_large.9b6c7f2c0bd30dc66570c41101129e1a624ab7b8.png',
'csgo/p2k/weapon_hkp2000_aq_p2000_boom_light_large.39f01b0b86b795bea56300432fecfbf93415ee58.png',
'csgo/p2k/weapon_hkp2000_aq_p2000_lost_world_light_large.1d8b2a14b2b5b787ba450205bb3f133678dbe682.png',
'csgo/p2k/weapon_hkp2000_cu_favela_p2000_light_large.cc40db4d5048c7ddcfb52642d954e91400e59290.png',
'csgo/p2k/weapon_hkp2000_cu_luggage_p2000_light_large.6dfcea73af8a3cf42042fb75be69345cf5525347.png',
'csgo/p2k/weapon_hkp2000_cu_p2k_flying_dream_light_large.db13d5d635e72a5c6d5ab742a6fa3a1ec4129405.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_decline_light_large.7f57145674a5e41b3b8e7fe70be4ffbb57ec6f84.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_fire_elemental_light_large.1e57d4d9f1c51e613c1923377aa55fab4b0ab1bc.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_hunter_light_large.57f4ea5be4f9bece6a3b71521a370d9afb4abb1f.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_ivory_light_large.2a47b14b59ce796956958ce13cb60617148f7711.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_obsidian_light_large.0a6ad31fe8f70401ffdd377c289309d0256282c6.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_pulse_light_large.a79fcfcd59202495573abfddc1e7627be62b4e1c.png',
'csgo/p2k/weapon_hkp2000_cu_p2000_urban_hazard_light_large.17657c4e9c3379f634c78e4d02ca9e9facbe9edb.png',
'csgo/p2k/weapon_hkp2000_gs_p2000_imperial_dragon_light_large.cc82bc6353a0e8ce963f6b0b600905d4dc37bf4a.png',
'csgo/p2k/weapon_hkp2000_gs_p2000-sport_light_large.96ad9b76130cea95ec2f1bc61ee428e6a998a398.png',
'csgo/p2k/weapon_hkp2000_hy_granite_light_large.30d6a68c522ae5dd0cf7a67e07eccb66cf50b04c.png',
'csgo/p2k/weapon_hkp2000_hy_p2000_oceani_light_large.8f64654c5964975c85201b1dbbdf7b8ffab768be.png',
'csgo/p2k/weapon_hkp2000_hy_poly_camo_light_large.e4c6576e012974ba60e6dbc70fe5cd1cacc30011.png',
'csgo/p2k/weapon_hkp2000_so_grassland_light_large.c2c8cd99960f57e1e4eeb1261dfaf3006e672577.png',
'csgo/p2k/weapon_hkp2000_sp_labyrinth2_light_large.240b91eab5dc2e0f6806dfbd2fc5d33bdebe53bb.png',
'csgo/p2k/weapon_hkp2000_sp_leaves_grassland_light_large.a7885e449e09718b530a5f8e4b79a30931f104cb.png',
    ],
    //"P250"
    [
'csgo/p250/p250.png',
'csgo/p250/weapon_p90_gs_p90_container_light_large.ee8d779318fc1367b1c63bbfa202d6261a0171c1.png',
'csgo/p250/weapon_p90_sp_mesh_glacier_light_large.742539900d5186f68defb5fac7e6a82771c302dd.png',
'csgo/p250/weapon_p250_aa_p250_gravediggers_light_large.df680e4648f5e08ec6e92ed36a5b9c05ae8bc5f4.png',
'csgo/p250/weapon_p250_aa_vertigogeo_neon_light_large.e1e7730f0d6716a372cda4b973f71cdbb7a074cd.png',
'csgo/p250/weapon_p250_am_ddpatdense_silver_light_large.36220b384099ed61c2b9ba64af899b892e4a4c58.png',
'csgo/p250/weapon_p250_am_p250_beaded_paint_light_large.2ddd1d4b6dd6fa2082001802a60acfa9daba722d.png',
'csgo/p250/weapon_p250_am_p250_sputnik_light_large.38766530975aaa4006dda7a24533ac1b05a6b6a8.png',
'csgo/p250/weapon_p250_am_ren_dark_light_large.ce4d6a4807c1a3c78ed3853f0fb7900b181db0d3.png',
'csgo/p250/weapon_p250_am_urban_light_large.2f6ef478d97cb2887fc4106cf89768f6cccd8ed6.png',
'csgo/p250/weapon_p250_aq_p250_cartel_light_large.d63ea117934ac8f9a40afe027fa4a1438dbb1777.png',
'csgo/p250/weapon_p250_aq_p250_contour_light_large.faf5b305c68d8ea23814163b0a69dafa7318b818.png',
'csgo/p250/weapon_p250_aq_p250_verdigris_light_large.379d19af038211ca3bf7d20c4c75726e9be36856.png',
'csgo/p250/weapon_p250_cu_bittersweet_light_large.83cd48968d79412e0cf2233b8e18602ff2790ad4.png',
'csgo/p250/weapon_p250_cu_money_light_large.a8632edd5846b8c9de09c711ada47f7decc739b7.png',
'csgo/p250/weapon_p250_cu_p250_asiimov_light_large.7ccf465f7dc55d2d960465d404c10cbc8c442cee.png',
'csgo/p250/weapon_p250_cu_p250_axiom_light_large.a9b34e0a93dbaa8fa60dfdb080827b919938d9f6.png',
'csgo/p250/weapon_p250_cu_p250_cassette_light_large.8e62f8c18421bceb377e95aa6a806b5767fcf731.png',
'csgo/p250/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png',
'csgo/p250/weapon_p250_cu_p250_infect_light_large.235d9f1d0efc7fe74748085ecd87540a03a4551d.png',
'csgo/p250/weapon_p250_cu_p250_mandala_light_large.0acb51464cd72643c6a1fefaf8736288eb5d02f7.png',
'csgo/p250/weapon_p250_cu_p250_rebuilt_light_large.69d4fcb9a8151d09818d1c26cf4c7b03d046b5a1.png',
'csgo/p250/weapon_p250_cu_p250_refined_light_large.9da38bc561b6576555b1700e9e10ddbc52994c67.png',
'csgo/p250/weapon_p250_cu_xray_p250_light_large.4b9f603e1a1dd4de2d64e05bf21168bc8b070bf2.png',
'csgo/p250/weapon_p250_gs_p250_checker_light_large.ed544cb647f7bf4e4ccc103a0b687b562d2fb297.png',
'csgo/p250/weapon_p250_gs_p250_cybershell_light_large.9f0408cde898dd81609541a8e68ff1ffe81320fd.png',
'csgo/p250/weapon_p250_gs_p250_inferno_light_large.89b435cf4b1eab8a9fed8f7aa19228fe9421b4eb.png',
'csgo/p250/weapon_p250_gs_p250_metal_panels_light_large.a104ce12e50fa24711708782e5d7b23e1bcb7d1b.png',
'csgo/p250/weapon_p250_gs_p250_visions_light_large.a47ba6d191d3c734c3248667fb341a0e3f0c423e.png',
'csgo/p250/weapon_p250_hy_blueprint_red_light_large.aff5f9b0847413a1749e8636dfc9a92d1ed77f3e.png',
'csgo/p250/weapon_p250_hy_crumple_dark_bravo_light_large.159ee3e3e5c507d869c9089978a8ed82897fcfa4.png',
'csgo/p250/weapon_p250_hy_desert_multicam_light_large.5e9064075a3dd4cec98f1fbb19372212ef94ec8d.png',
'csgo/p250/weapon_p250_hy_ducts_blue_light_large.7e3036d2c146970842cfdd1e4b4529ee5480787c.png',
'csgo/p250/weapon_p250_hy_forest_boreal_light_large.d805b3c56f74420ea25e14db86e7cf8181d98134.png',
'csgo/p250/weapon_p250_hy_forest_night_light_large.f2ebb923126bf523ac2052755207d8c9d4dfa668.png',
'csgo/p250/weapon_p250_hy_gelpen_light_large.214a92b3bec9ab81ad0c13276fa4ac552530f31f.png',
'csgo/p250/weapon_p250_hy_hunter_modern_light_large.01e6755d9b42d1594837f60bad79e0f6295df8db.png',
'csgo/p250/weapon_p250_hy_kimono_diamonds_red_light_large.99ecb66f68d6bba4e17bc30cd72d5041e838371c.png',
'csgo/p250/weapon_p250_hy_nuclear_skulls4_p250_light_large.83b7c2eeff0d6fd0e6d780be0815111d199a46d6.png',
'csgo/p250/weapon_p250_hy_p250_crackshot_light_large.538a33bb8d7af894f965257c39f699168e125cdd.png',
'csgo/p250/weapon_p250_hy_p250_tiger_light_large.c9afe189e84a6df33578138afddab06252e2621b.png',
'csgo/p250/weapon_p250_hy_redhex_light_large.099092ccf56439b922b51569ce87f2f908abcc19.png',
'csgo/p250/weapon_p250_so_sand_light_large.c77b762093b4786e0c070317e6a2121c2e7b4c86.png',
'csgo/p250/weapon_p250_so_whiteout_light_large.ffd6e614b63d3af24a04a9f7710b55210a7d0296.png',
'csgo/p250/weapon_p250_sp_desert_skulls_dawn_light_large.0ef79663a917620d2ab91078115200bf2747269a.png',
'csgo/p250/weapon_p250_sp_kimono_diamonds_light_large.f8b2d66cdc64e8860b36ac2d08060d04e5ec6ae4.png',
'csgo/p250/weapon_p250_sp_nukestripe_green_light_large.099ce352cdcf83040aad712968d066f260439c22.png',
'csgo/p250/weapon_p250_sp_splash_p250_light_large.9270d8d14c39aef83407ea50e51f0eb89c17263d.png',
'csgo/p250/weapon_p250_sp_tape_light_large.8ece2047279c054325b0d2632559de145cef524a.png',
    ],
    //"P90"
    [
'csgo/p90/p90.png',
'csgo/p90/weapon_p90_aa_ancient_brown_light_large.69bcf9d19ae3f5b22e3382dbf07da0900f017967.png',
'csgo/p90/weapon_p90_am_jorm_blue_light_large.4d15121e1a295202b46b7452b0a927c009cebb37.png',
'csgo/p90/weapon_p90_am_slither_p90_light_large.583a90c66858cf0cc20253d2f4a0be1168eadbca.png',
'csgo/p90/weapon_p90_am_tigers_brown_light_large.853f8f5151285d07fa9e03527bf14dc40347c25e.png',
'csgo/p90/weapon_p90_am_veneto_red_light_large.3bfb2641e0b8e40c0c797a44bb448ec06eabe6b8.png',
'csgo/p90/weapon_p90_an_royalbleed_light_large.58dfb4851908d78c31e205477793a620923737db.png',
'csgo/p90/weapon_p90_cu_brown_leather_p90_light_large.6943b782f1c00dd933ca3ee3c19749ea2494899c.png',
'csgo/p90/weapon_p90_cu_catskulls_p90_light_large.0ff2c5c53a691e28de02cd7b40e395d53d8c6826.png',
'csgo/p90/weapon_p90_cu_dragon_p90_bravo_light_large.200ef513ae29ae7651ad3f31e68b5b186279572f.png',
'csgo/p90/weapon_p90_cu_jaguar_p90_light_large.7d9fe21106b83cbf10ea8cc7f8b4f6aea72af268.png',
'csgo/p90/weapon_p90_cu_p90_grimm_light_large.59514d7b54f637f314329bb3fef1c7ffd1b153ba.png',
'csgo/p90/weapon_p90_cu_p90_mastery_light_large.f58ff489c92ffa8c6e4c42814bad01c352df0ab6.png',
'csgo/p90/weapon_p90_cu_p90_nostalgia_light_large.8d1cfe3582915ab9702b57e1376eb0d0ffab2331.png',
'csgo/p90/weapon_p90_cu_p90_offworld_light_large.45f1db5b8b435574f46fffe77960d8ef29519eca.png',
'csgo/p90/weapon_p90_cu_p90_scorpius_light_large.8f1bc2f6afc4e7f9ffb7a451252461f5a1df07ad.png',
'csgo/p90/weapon_p90_cu_p90_shapewood_light_large.e7744840c89b1b83be82d2f64beb5a6719c47bd3.png',
'csgo/p90/weapon_p90_cu_p90_trigon_light_large.9f93f859fe1d03dfced62e52c4cab39ae2f8a9f3.png',
'csgo/p90/weapon_p90_cu_p90-asiimov_light_large.0ca7f7fc032c98c5cc506ccde92b33e5836a8a88.png',
'csgo/p90/weapon_p90_gs_p90_full_throttle_light_large.70ef68d70617eb318e2df05e09f780448a1baf0d.png',
'csgo/p90/weapon_p90_gs_p90_neoqueen_light_large.fa2a81f8c7906b2683b5eb4b562edd2529ad2cf0.png',
'csgo/p90/weapon_p90_gs_p90_shallow_grave_light_large.948019f5ffb76bcc24cfede19c992ffb34e3ecaf.png',
'csgo/p90/weapon_p90_gs_p90_tangled_light_large.d1c6b11dc6876f1cf546281df8b8fac68a037518.png',
'csgo/p90/weapon_p90_gs_p90_tread_light_large.0acb87de3db60e1c07aa159fd5b8238b11bb8f8f.png',
'csgo/p90/weapon_p90_hy_blueprint_aqua_light_large.35f86b3da01a31539d5a592958c96356f63d1675.png',
'csgo/p90/weapon_p90_hy_ddpat_desert_light_large.acbbe87329d4f77b28d2cc15ce2e89c5d50436a6.png',
'csgo/p90/weapon_p90_hy_modspots_light_large.a702b8feaf0e2568e60efb2ab722819b0521ea4b.png',
'csgo/p90/weapon_p90_hy_p90_barebones_blue_light_large.c908d6fc6d53cb2f4168a64b9a32e4b6b5479fc8.png',
'csgo/p90/weapon_p90_hy_p90_dino_rampage_light_large.2231742f05375d3370f5f8fbc7fd3f3f623af688.png',
'csgo/p90/weapon_p90_hy_vertigogeo_light_large.321d8068761b4b89e1e9f5916ba2cfca5068e080.png',
'csgo/p90/weapon_p90_hy_zombie_light_large.7f66b30e6902ae7722b7951fd7446ae7e9b3880e.png',
'csgo/p90/weapon_p90_so_stormfront_light_large.60d73691845ad5ad0e5d8a15b488807d9c25a57f.png',
'csgo/p90/weapon_p90_sp_bloom_orange_light_large.e3e14184d5d31c9484b7697d7f38aafa3a479e20.png',
'csgo/p90/weapon_p90_sp_dapple_light_large.6a715fc8b63ae569c2facb1607b5243c21a7280a.png',
'csgo/p90/weapon_p90_sp_mesh_hot_and_cold_light_large.b1e759ec76815883bf3e293215e3858eaa0763b1.png',
'csgo/p90/weapon_p90_sp_moro_textile_green_vine_light_large.47d80a883c184629d2049f8a5e2046150b35e69e.png',
'csgo/p90/weapon_p90_sp_nukestripe_maroon_light_large.c3915e723b821c0d03fcaf506129b23f16bdff0f.png',
'csgo/p90/weapon_p90_sp_spray_sand_light_large.18ac7e644639b8756fa3984055a493c5d7fc8249.png',
'csgo/p90/weapon_p90_sp_twigs_light_large.32f929b66cdf34997897a48260a53946e786a531.png',
    ],
    //"PP-Bizon"
    [
'csgo/pp/pp-bizon.png',
'csgo/pp/weapon_bizon_aa_wiring_light_large.5ec614e6c258dd17db3f7949292008a2f466f2db.png',
'csgo/pp/weapon_bizon_am_carbon_fiber_light_large.bc4fbdedf71b3b922a2596dac8df3c50306ecf51.png',
'csgo/pp/weapon_bizon_am_turqoise_halftone_light_large.e34dc4bab2f1da66b04bd2d3cadb51339ce81f4d.png',
'csgo/pp/weapon_bizon_aq_brass_light_large.afcbbd3e31fd3600ddb45b4a0c48b6350ab761f9.png',
'csgo/pp/weapon_bizon_aq_steel_bravo_light_large.ace529ee6d0eefe9159eaf040b364ad853ccf893.png',
'csgo/pp/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png',
'csgo/pp/weapon_bizon_cu_bizon_antique_light_large.06467175511976dae4219e9cb2fc8ab20df0e653.png',
'csgo/pp/weapon_bizon_cu_bizon_citizen_light_large.c33a99fe761fc52535224e73d2af91b92ac77637.png',
'csgo/pp/weapon_bizon_cu_bizon_curse_light_large.c19cf584d3e28db4914d1559cd387999457944d8.png',
'csgo/pp/weapon_bizon_cu_bizon_noxious_light_large.dc3af57fa024448b24e4ddb8838a0a339cee46ce.png',
'csgo/pp/weapon_bizon_cu_bizon_riot_light_large.2f0848b27a917287062306f49870cf9ec06bbbbe.png',
'csgo/pp/weapon_bizon_cu_bizon_road_warrior_light_large.92dd3aa0346010a6e3a625d01ae4f965195a05d2.png',
'csgo/pp/weapon_bizon_cu_bizon_spacecat_light_large.c2c9bbf949c4bdf2ce3173cd2447559177716dd3.png',
'csgo/pp/weapon_bizon_cu_bizon-osiris_light_large.269e03e1ad598b76adb884704c4f48d725beb5fc.png',
'csgo/pp/weapon_bizon_gs_bizon_flasher_light_large.a200d5213d5fe9f2e74b5ca5b9ce8eeb7eee4d5f.png',
'csgo/pp/weapon_bizon_gs_bizon_hellraider_light_large.c7aa487268b1e88b2e7fb1ff3c8c2eeeb24d4500.png',
'csgo/pp/weapon_bizon_gs_pp_bizon_harvester_light_large.654d26d43d7e4583a0ede5e0ea6bb697858698dc.png',
'csgo/pp/weapon_bizon_hy_bamboo_jungle_ink_light_large.0f9ee611e9b667e90923e9fc0da89430881ae7ae.png',
'csgo/pp/weapon_bizon_hy_bizon_torn_green_light_large.1aa076ede6a2511bf676ffb1c5a3eafca71c58a6.png',
'csgo/pp/weapon_bizon_hy_blueprint_white_light_large.5a8bb5711fec1758844f92beab8a1ecb054f91bd.png',
'csgo/pp/weapon_bizon_hy_hunter_modern_light_large.04891176bf0284ba4f8002c2c32445cbde50a8c6.png',
'csgo/pp/weapon_bizon_hy_lizard_skin_light_large.4731c7f1d21196c4971405a722c36911b1d23aae.png',
'csgo/pp/weapon_bizon_hy_nerodia_light_large.6bef659d5403a53618b7bf7f5448d537395114f9.png',
'csgo/pp/weapon_bizon_hy_splatter_light_large.7a7417d95485ceb2148bdd3d228219307082ea8a.png',
'csgo/pp/weapon_bizon_hy_varicamo_night_light_large.f0593c24d14333e68c7eb0e916385270d5612b46.png',
'csgo/pp/weapon_bizon_hy_water_crest_light_large.c4d0aad9cb87870f84f3709ff3b8ecc9fe489d89.png',
'csgo/pp/weapon_bizon_so_aqua_stmarc_light_large.19036e4aeafdaeaa9c22cd0b86af514562c1761c.png',
'csgo/pp/weapon_bizon_so_grey_nuclear_green_bizon_light_large.072e25b1fa34f50da3850310424b8b96983cf684.png',
'csgo/pp/weapon_bizon_so_red_light_large.0ee9cada135b87096b447521a05c0a2d437bf9ff.png',
'csgo/pp/weapon_bizon_sp_leaves_light_large.ce2a773d74c050c18f99daaa39d4b670878abd99.png',
'csgo/pp/weapon_bizon_sp_nukestripe_brown_light_large.993c1c6ed6bf4a239268651e4150bc4a615f2632.png',
'csgo/pp/weapon_bizon_sp_tape_short_sand_light_large.dcf913a3a4fcd421012482e8c1cb55d05d9828f9.png',
'csgo/pp/weapon_bizon_sp_tape_short_urban_light_large.141f3b1f24bc6c964a78ca58b38c01ad773fbc12.png',
    ],
    //"R8 Revolver"
    [
'csgo/revolver/r8_revolver.png',
'csgo/revolver/weapon_revolver_aa_fade_metallic_revolver_light_large.d56e81f58bb716ac6ca130bd41802bb8962dd0cf.png',
'csgo/revolver/weapon_revolver_aa_fade_revolver_light_large.af77aee9f82936e7510b89e7f0c1bbf6bfaaff45.png',
'csgo/revolver/weapon_revolver_aa_flames_light_large.190d9cb7b8aad31d105fe838664a7fd99ebf3535.png',
'csgo/revolver/weapon_revolver_am_phoenix_tags_blue_light_large.c98c31a965c8c89fe1c7ee5c5774daebef5a5c27.png',
'csgo/revolver/weapon_revolver_cu_r8_cybersport_light_large.d5eb827f99a401915b8377eda7b81a0bc9cae4bf.png',
'csgo/revolver/weapon_revolver_cu_r8_survivalist_light_large.cda482f11a63c89c574211b8d5ea9a60703e3cd2.png',
'csgo/revolver/weapon_revolver_cu_revolver_oppressor_light_large.59414a184bcf3310d43528701292ba4f68ba55a0.png',
'csgo/revolver/weapon_revolver_gs_r8_banana_light_large.50f0b729a36a405d48b41d58463234dbbd15b9cf.png',
'csgo/revolver/weapon_revolver_gs_r8_leviathan_light_large.656b77eecd4ef8f55f11866cce3da2778d6cc7d5.png',
'csgo/revolver/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png',
'csgo/revolver/weapon_revolver_gs_r8_memento_light_large.8ca600a94c72b5a3b33bb826a1a588f7e48d5e78.png',
'csgo/revolver/weapon_revolver_gs_r8_rustking_light_large.5245178cf84e1bf8d77eb7a3ec19d108a70131d3.png',
'csgo/revolver/weapon_revolver_gs_revolver_purple_elite_light_large.12a25ff5490bc9199a7ef870677455e42b9d8847.png',
'csgo/revolver/weapon_revolver_gs_revolver_tread_light_large.7c3bd1302f62853e5694aec2d70cf1c7140b3fc0.png',
'csgo/revolver/weapon_revolver_hy_brush_camo_tan_light_large.4af5232b57afac32a9eb2f056cf6fdf968a94966.png',
'csgo/revolver/weapon_revolver_hy_webs_light_large.2a0bbba44388502060a910b5a18f5b64b5be0b3d.png',
'csgo/revolver/weapon_revolver_so_night_light_large.02c1852bc16e1c3bcdb2daa681fdfe043d31293b.png',
'csgo/revolver/weapon_revolver_so_orange_accents3_light_large.00867f70c109a7934345f92aae1be055b6a98abb.png',
'csgo/revolver/weapon_revolver_sp_spray_water_light_large.0f7d074b7c53419d9475b0eb68e7215d7f9dcc66.png',
'csgo/revolver/weapon_revolver_sp_tape_light_large.c8f9124ff70ca2a6e8867920cd39e4fb7308ac87.png',
    ],
    //"Sawed-Off"
    [
'csgo/sawedoff/sawed-off.png',
'csgo/sawedoff/weapon_sawedoff_aa_fade_metallic_light_large.aa7418206953ed4b7707ddbc859bb1eb7bf6c9ab.png',
'csgo/sawedoff/weapon_sawedoff_aa_vertigo_red_light_large.999797e68b2d5df290b2e5771b6c4bfb0de1ec8c.png',
'csgo/sawedoff/weapon_sawedoff_aq_copper_light_large.a2d3d9236120109adf8df1bc53b7d02250f6a50a.png',
'csgo/sawedoff/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png',
'csgo/sawedoff/weapon_sawedoff_aq_sawedoff_blackgold_light_large.4a8c3a27c780c2a5ec3e4b6686498dce439d5a73.png',
'csgo/sawedoff/weapon_sawedoff_aq_sawedoff_zander2_light_large.514f7c6c606296838f56020877d7762c594dc4bd.png',
'csgo/sawedoff/weapon_sawedoff_aq_steel_light_large.b363c0f1eef83ac7291f8b64d338dcdd82183502.png',
'csgo/sawedoff/weapon_sawedoff_cu_green_leather_sawedoff_light_large.16c853410a5696858a4dc383f04c3d5e42b08631.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawed_off_lime_light_large.87fbbe1597ea04a51b56f3b0f7c3fc6a5ff6553c.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_apocalypto_light_large.fc0f69fec04cf4d6955ef4aa6629d083aa554af6.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_black_sand_light_large.7ed9ce5083489c0fdf92814f0ebf6945ec6f29d4.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_deva_light_large.9ffde04f2f082dce492b2fa6e250f69f538a50b5.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_devourer_light_large.d8365e13320f20eb532a2d5109e1fc35562bc376.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_kisslove_light_large.55dc07f073e8c5ce65f21e4fb5957625db7ba266.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_octopump_light_large.761df5911efc6a96061c7b34e41a2ff6ec61e58b.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_origami_light_large.5f1b3cef6d518cda69daafddd9b2c240a29cf0cc.png',
'csgo/sawedoff/weapon_sawedoff_cu_sawedoff_ouija_light_large.79ee13876374fa1fd2f04bea84124c265fb55407.png',
'csgo/sawedoff/weapon_sawedoff_cu_wp_sawedoff_light_large.5c3f71cb929e5d2922b25c7644d0ff1981d92fa0.png',
'csgo/sawedoff/weapon_sawedoff_gs_sawedoff_fubar_light_large.0673d87171fccc0fc98e77806da7259e283283ea.png',
'csgo/sawedoff/weapon_sawedoff_gs_sawedoff_necromancer_light_large.8cead257afdfaf5b852a61d2358aa3fb84def860.png',
'csgo/sawedoff/weapon_sawedoff_hy_ali_tile_bravo_light_large.979b575c05b90ab9ae836ff28396737323818e1b.png',
'csgo/sawedoff/weapon_sawedoff_hy_bamboo_jungle_black_light_large.8c345668f9d6ba961f72fd67c405a8ed2cfffd4c.png',
'csgo/sawedoff/weapon_sawedoff_hy_ddpat_light_large.e3f476b768693a046994a90e2aca045d329e6957.png',
'csgo/sawedoff/weapon_sawedoff_hy_ddpat_orange_light_large.04fe163870ad65e17d8e4dd9403180ed3c5a218d.png',
'csgo/sawedoff/weapon_sawedoff_hy_desert_bloom_light_large.6222132707bdc3c9e20b8eada269c2620bfc5013.png',
'csgo/sawedoff/weapon_sawedoff_hy_varicamo_red_light_large.8db408c4317e19bfdf8adc6c3183327866423445.png',
'csgo/sawedoff/weapon_sawedoff_sp_nukestripe_brown_light_large.6a39be9be23998f45a37a5f71c6467dacb728a03.png',
'csgo/sawedoff/weapon_sawedoff_sp_palm_green_light_large.f8f95ff757a290d96692f78c0cc80c9cbcd7a0fe.png',
'csgo/sawedoff/weapon_sawedoff_sp_snake_light_large.5e65a350f30aa592de234f631d5d2cd98838fb4e.png',
'csgo/sawedoff/weapon_sawedoff_sp_spray_desert_sage_light_large.e944ddb90e97199d1f274c481462a3a660b9fc5a.png',
    ],
    //"SCAR-20"
    [
'csgo/scar/scar-20.png',
'csgo/scar/weapon_scar20_am_army_shine_light_large.2d2f8b7c0d1a6f9541956d1bef018261ddd80542.png',
'csgo/scar/weapon_scar20_am_carbon_fiber_light_large.1e2b9188a7cffb26c7a912995de329bd70d0d1d9.png',
'csgo/scar/weapon_scar20_an_emerald_bravo_light_large.1fddac26d628445bdc9856e04b5e9c69f526120b.png',
'csgo/scar/weapon_scar20_aq_brass_light_large.4b497f1e4a42a5c645181a1534cc28320e3f6842.png',
'csgo/scar/weapon_scar20_aq_scar20_leak_light_large.06b9231638ba347e91c671ecf2c1364754794893.png',
'csgo/scar/weapon_scar20_cu_blueprint_scar_light_large.9a71e8191c2b2081f5fd3884f57f919663b26ee5.png',
'csgo/scar/weapon_scar20_cu_scar_assault_light_large.57aa89979dfaab334bb3e91c09f54269e98cf47a.png',
'csgo/scar/weapon_scar20_cu_scar_cyrex_light_large.ee4da13e2d74d0fd1fdbaa8f2ca49eb1c7f0acca.png',
'csgo/scar/weapon_scar20_cu_scar20_intervention_light_large.96d9a26cca617207208a836d424d676bcb2ce3b9.png',
'csgo/scar/weapon_scar20_gs_scar_fragments_black_light_large.d6bde287b06ba2380ba07621a0b06c36b13c4025.png',
'csgo/scar/weapon_scar20_gs_scar20_bloodsport_light_large.dd99feccb31d2ec296bcd620abd885e6fe50d44e.png',
'csgo/scar/weapon_scar20_gs_scar20_enforcer_light_large.20eba3a5a84f35019ceb7faae45a0b4246a72998.png',
'csgo/scar/weapon_scar20_gs_scar20_peacemaker03_light_large.061f9ac2ff0a040f6fcc296c451c09fe2e198f83.png',
'csgo/scar/weapon_scar20_gs_scar20_powercore_light_large.74bcd65b1a4a52dd397ede5aa59b860ca4c38939.png',
'csgo/scar/weapon_scar20_hy_authority_purple_light_large.6754afba66bb91862fb6fef583e1b1e399061518.png',
'csgo/scar/weapon_scar20_hy_canals_tile_light_large.75a40e82efbdfa0691e32eb98301f1b441a00f46.png',
'csgo/scar/weapon_scar20_hy_hunter_blaze_pink_light_large.b7af5eed6be0c7d95ec01e2ed916841da005ccfc.png',
'csgo/scar/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png',
'csgo/scar/weapon_scar20_hy_scar20_jungler_light_large.4f6402fac5ca041aae7db17b214e5cfd55149c44.png',
'csgo/scar/weapon_scar20_hy_webs_darker_light_large.8e06e878c22b82c6bb1045f26e1bbc1926faecf2.png',
'csgo/scar/weapon_scar20_so_pmc_light_large.c3e05baecc15229a989ddd093964e9c4e9fbe68a.png',
'csgo/scar/weapon_scar20_so_stormfront_light_large.3bebdbcd4ea2ae851cdd2a06d0663121d01ebd79.png',
'csgo/scar/weapon_scar20_sp_mesh_sand_light_large.880aed82e5ba9c8c9d4a7ebb88e5a51491ce2d59.png',
'csgo/scar/weapon_scar20_sp_palm_light_large.ed935d932711961605c3b03b896560f4ebfe8861.png',
'csgo/scar/weapon_scar20_sp_scar_chickenfight_light_large.b32fde27f0f45456b4c1e5f049be6f44bc8649b7.png',
'csgo/scar/weapon_scar20_sp_scar20_striker_dust_light_large.0842dbdf0fe714c92f634b376e15c2f8c21b6d56.png',
    ],
    //"SG 553"
    [
'csgo/sg/sg_553.png',
'csgo/sg/weapon_sg556_aa_desert_bloom_bright_light_large.082aa07ec9551391143d8b825ef9f1062ea54279.png',
'csgo/sg/weapon_sg556_aa_ruins_green_light_large.47e5a2fdd296f5dbdcf3e14ec2a09be699bab8b8.png',
'csgo/sg/weapon_sg556_aa_vertigo_light_large.56c7e1c30b3239dbaab4ffef7905c48d77a35a50.png',
'csgo/sg/weapon_sg556_am_army_shine_light_large.a07a97d5fba73aeecfc5cc9364e0d43d47892373.png',
'csgo/sg/weapon_sg556_an_navy_light_large.5c45c1c33100694fc010a39ba92e3afab1d7c5e7.png',
'csgo/sg/weapon_sg556_aq_damascus_sg553_light_large.543355687f0396ad10ed2f2705bc242ce5fdfbc5.png',
'csgo/sg/weapon_sg556_cu_luggage_sg553_light_large.374b9493843853afc913a1735b154fcbbdbb6f89.png',
'csgo/sg/weapon_sg556_cu_sg553_aerial_light_large.a123874095a96a92aaacd0f64a4fef54fa455e82.png',
'csgo/sg/weapon_sg556_cu_sg553_atlas_light_large.536218f8160485fa927e19fa06fedae43d9c04e6.png',
'csgo/sg/weapon_sg556_cu_sg553_caution_light_large.48fe10aaedc4fbba77afd76c31a5ab86da42461b.png',
'csgo/sg/weapon_sg556_cu_sg553_cyber_dragon_light_large.563b70babc5251fe5df218140582cd0aa576701e.png',
'csgo/sg/weapon_sg556_cu_sg553_cyberforce_light_large.63aa4e611195d801eb706ac65d38df68f98e2b76.png',
'csgo/sg/weapon_sg556_cu_sg553_cyrex_light_large.ef2fb1e4d88e8eb7c0efe12e231a773ca1792a4d.png',
'csgo/sg/weapon_sg556_cu_sg553_darkwing_light_large.f9c302279afebdd221344fa59f738f9317dc4122.png',
'csgo/sg/weapon_sg556_cu_sg553_pulse_light_large.d564900d05df0ee1da737cde6144eb55fa36684f.png',
'csgo/sg/weapon_sg556_cu_sg553_rally_light_large.904b6f70dc7c8fe107d2cdb5acbdd0be6f686a3f.png',
'csgo/sg/weapon_sg556_cu_sg553_reactor_light_large.af5c07d2528198641adf32cf3498aa7d2823b048.png',
'csgo/sg/weapon_sg556_cu_sg556_triarch_light_large.3ea74bea530adda100d25911372ca313ea99453a.png',
'csgo/sg/weapon_sg556_gs_sg553_deathmetal_light_large.c41041d1a69838d3b66f21032254066eaea8fe41.png',
'csgo/sg/weapon_sg556_gs_sg553_over_heated_light_large.aba3188360b2a87b8687d73af6c2e3034290402c.png',
'csgo/sg/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png',
'csgo/sg/weapon_sg556_gs_sg553_rusty_light_large.c5dd8204f44be6e68069633eb261b66641444ff6.png',
'csgo/sg/weapon_sg556_gs_sg553_tiger_moth_light_large.18de0e5e029741a67330038e646fab1596fcfe88.png',
'csgo/sg/weapon_sg556_so_purple_light_large.44483356b334466acb6e781057d8f96a73cb376f.png',
'csgo/sg/weapon_sg556_so_red_sg553_light_large.aa8a1ed5302193cf02c2814a772517ec2aec8115.png',
'csgo/sg/weapon_sg556_so_tornado_light_large.32d15282560b205fb387cf876fc19da381951986.png',
'csgo/sg/weapon_sg556_so_yellow_light_large.afbe04152bdb3090623992005c23d3a997ae0ca3.png',
'csgo/sg/weapon_sg556_sp_asgard_wall_light_large.4b11684f29f2153a5eaa7b3c162e7ed6665a045a.png',
'csgo/sg/weapon_sg556_sp_desert_skulls_light_large.3ac80055b461251992cea8183d77a9e2c4662e9d.png',
'csgo/sg/weapon_sg556_sp_mesh_python_light_large.ee7a2353f499fc228f88aaa99bd7ac4d9fac1257.png',
'csgo/sg/weapon_sg556_sp_nukestripe_maroon_sg553_light_large.95996aebdd6d4308d577f481e0c73250d2c82c74.png',
'csgo/sg/weapon_sg556_sp_sg533_aloha_light_large.03aa863680ab2223924ae9cbe8b7662a84fb162c.png',
'csgo/sg/weapon_sg556_sp_spray_waves_bravo_light_large.5d4e0e3977bf9f1fa8dd1576b5576b429546f98d.png',
'csgo/sg/weapon_sg556_sp_tape_dots_waves_light_large.6225b7ae003cefaab7deca7ea517576991055bbd.png',
    ],
    //"SSG 08"
    [
'csgo/ssg/ssg_08.png',
'csgo/ssg/weapon_ssg08_aa_fade_grassland_light_large.82950af31c177d14983665459ddee77f63379f4d.png',
'csgo/ssg/weapon_ssg08_am_carbon_fiber_light_large.90255a5b4940cc078005493430f0a73761b990e4.png',
'csgo/ssg/weapon_ssg08_am_zebra_dark_light_large.5636371696eee32d9a3e588ff3b42f6b33776d99.png',
'csgo/ssg/weapon_ssg08_aq_leviathan_light_large.0d0ce425b5374642d0d1fbfd0c0ec634eb8570fb.png',
'csgo/ssg/weapon_ssg08_cu_shark_light_large.00812c20a896847013b0a2913a166f6ba220a258.png',
'csgo/ssg/weapon_ssg08_cu_ssg_overtake_light_large.62261051818eb21f13e782cd49a33970360b4581.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_chromatic_light_large.66f506ebe947b68afa1d3a6cbbdd8916b054f84a.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_deathshead_light_large.78676bc5fce74af519abdccae4d119727c392faf.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_dragonfire_scope_light_large.482858c9d088454b42e53f02d927a8203c69dfc2.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_fever_dream_light_large.cec554a86204344d6476b9071158fd02963a1aac.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_immortal_light_large.294156dbab19f645942fe9cbafed88165aa70044.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_mainframe_light_large.7d7d861da80bfecbe5141f19fbd32b95fb4496cf.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_necropos_light_large.cd2f32aa0349edcad3aefae80b509fc5962a2b30.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_scorpion_light_large.4ef3abe29eb6c2f16a74dc404929e47ad05d297f.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_technicality_light_large.1a057a14ca191ce12629e06217cbe86097444b03.png',
'csgo/ssg/weapon_ssg08_cu_ssg08_tickler_light_large.b6a73afa62f8983211740a1570410df4864f45f6.png',
'csgo/ssg/weapon_ssg08_gs_ssg08_armacore_light_large.043342869c64e1a08107055a4e1b332ad9c763c0.png',
'csgo/ssg/weapon_ssg08_gs_ssg08_checker_light_large.26b2d6ca1e703c0427c31fa43bb1bf9fca58690e.png',
'csgo/ssg/weapon_ssg08_hy_flowers_stmarc_light_large.482eabb4a21633695ffaab7d63a77aee8b18a1ff.png',
'csgo/ssg/weapon_ssg08_hy_mayan_dreams_bravo_light_large.647a85eff07e6565e9e284968d9c11a1ec42da68.png',
'csgo/ssg/weapon_ssg08_hy_ren_orange_light_large.0de8202f23f893173f722278aca762d294371ad8.png',
'csgo/ssg/weapon_ssg08_hy_ssg08_marker_light_large.318454c8676dc6d72ad1b6e343e661d9831645fb.png',
'csgo/ssg/weapon_ssg08_hy_trainarchitect_green_light_large.99e4e0cef18a0f37f5f26caf431dde80f39f14e1.png',
'csgo/ssg/weapon_ssg08_so_moss_light_large.74753da395e67d490101269838df28e1b6313a25.png',
'csgo/ssg/weapon_ssg08_so_rune_stone_light_large.008cb3ddaf106a019bc45143d61bb2e520ca50f4.png',
'csgo/ssg/weapon_ssg08_so_sand_light_large.71cb57b99ee95a92310b4f55d7709bc5f5cc255e.png',
'csgo/ssg/weapon_ssg08_sp_palm_shadow_light_large.fb24b5ed2a03a35a12f5ee7166bc458ab4ae77e7.png',
'csgo/ssg/weapon_ssg08_sp_short_tape_light_large.f2f54766f72c881bc020b924be5ae026dcf065da.png',
'csgo/ssg/weapon_ssg08_sp_tape_short_jungle_light_large.4623c92c91eaa0ef45e9c09d828bbeb926dcb1c6.png',
'csgo/ssg/weapon_ssg08_sp_zebracam_red_light_large.9aefb18daa0955b6ac9b0d098132425b7991fc6e.png',
    ],
    //"Tec-9"
    [
'csgo/tec9/tec-9.png',
'csgo/tec9/weapon_tec9_am_crystallized_light_large.787b7ae299c33a003515537d5335b38d589e2e9f.png',
'csgo/tec9/weapon_tec9_am_fluted_tec9_light_large.bfb4506150a675b24d3178f457507db2903364d6.png',
'csgo/tec9/weapon_tec9_am_ossify_light_large.29b1e40ecb5781ee6f47b460d3372b5c6601d768.png',
'csgo/tec9/weapon_tec9_am_tec_9_sea_salt_light_large.726f78fd872aa2ccfcab9a051b4b79c314d50a4e.png',
'csgo/tec9/weapon_tec9_am_tec9_redblast_light_large.0f8de75737cc35ac1d14cf74924838da4d7ab849.png',
'csgo/tec9/weapon_tec9_an_titanium30v_light_large.76078065235a996df8184b684159dfee7efcd530.png',
'csgo/tec9/weapon_tec9_aq_brass_light_large.0e78665f494e390a064c8a838030b4458536d9ae.png',
'csgo/tec9/weapon_tec9_aq_tec9_chalk_pattern_light_large.e0425d0a56ca5a2240b71495a5ef2bc4af0e9331.png',
'csgo/tec9/weapon_tec9_cu_tec9_asiimov_light_large.9a4fb9bbf6f01209b8fd3effeda1eecfc1e5a9a3.png',
'csgo/tec9/weapon_tec9_cu_tec9_avalanche_light_large.eb6726a24084bf5f3c8c8c70cd8ea37425a708e3.png',
'csgo/tec9/weapon_tec9_cu_tec9_bamboo_light_large.24d8986c41f344d8c1e9167a935c7b904757f85e.png',
'csgo/tec9/weapon_tec9_cu_tec9_cracked_opal_light_large.d6e9cc1c31550faeac9c55341be170abf07245b7.png',
'csgo/tec9/weapon_tec9_cu_tec9_flash_light_large.977076b5fe7a2fdb9337de2a3ff7c4b867e9b674.png',
'csgo/tec9/weapon_tec9_cu_tec9_freedom_light_large.bb79585222a88d4dd3b154915c5527cac7e507d1.png',
'csgo/tec9/weapon_tec9_cu_tec9_sandstorm_light_large.e38b0daacb3aa5d8f692a5ee05ad4bc0885808cd.png',
'csgo/tec9/weapon_tec9_cu_tec9_snake_light_large.9065015e55daa4190b97a8bc033925ed0aeb1abd.png',
'csgo/tec9/weapon_tec9_gs_tec9_decimator_light_large.11236163667e1dd46c3d869d844e384a23544513.png',
'csgo/tec9/weapon_tec9_gs_tec9_envoy_light_large.068b8cb4ed0f4064624820bf2cf34ecc4c38d8b2.png',
'csgo/tec9/weapon_tec9_gs_tec9_fubar_light_large.00f64007983561f57c808b23e9260ebea6437bc7.png',
'csgo/tec9/weapon_tec9_gs_tec9_guerilla_light_large.796534c0914361eec796eccd5558930096f75f96.png',
'csgo/tec9/weapon_tec9_gs_tec9_jambiya_light_large.d1f42521bb774564f80a512c3990e768179cf111.png',
'csgo/tec9/weapon_tec9_gs_tec9_supercharged_light_large.e3ebc20f10eae02790fe95703b6099acca1d1809.png',
'csgo/tec9/weapon_tec9_hy_ancient_tiles_peach_light_large.9ad93bd41f7436005b4fd4d4bbf6815e4dae39c9.png',
'csgo/tec9/weapon_tec9_hy_bamboo_jungle_light_large.31268450fbb5b5c2221e6eaadbe7124cf85f3e1d.png',
'csgo/tec9/weapon_tec9_hy_ddpat_urb_light_large.bd44491d7de854c08e2951e14f9066afdb340dd6.png',
'csgo/tec9/weapon_tec9_hy_geometric_steps_yellow_light_large.4d50c678bf9eeb9f063a432aa9d5aec68e863f7d.png',
'csgo/tec9/weapon_tec9_hy_hades_light_large.9b5757d9034889f93b907b45dffe0a3802b2e4bc.png',
'csgo/tec9/weapon_tec9_hy_mesh_safetyorange_light_large.a2564044371c87bb1081753c71f6cfb93f0359c1.png',
'csgo/tec9/weapon_tec9_hy_murano_orange_light_large.cc6ae2c1c3aca79fe0f65be7f0f40f493eba55cf.png',
'csgo/tec9/weapon_tec9_hy_nuclear_skulls5_tec9_light_large.d83d7de4c10dbc5fae925a4cb531ca7a8deef3d1.png',
'csgo/tec9/weapon_tec9_hy_phoenix_tags_lilac_light_large.aea02b337e17a45482f1122047c756b9c8166249.png',
'csgo/tec9/weapon_tec9_hy_varicamo_light_large.8a863390cd0fc243c3697c3d551139d3553fde03.png',
'csgo/tec9/weapon_tec9_so_olive_light_large.6c35f2cb6ef0f893f02d70759c528fe4958adebc.png',
'csgo/tec9/weapon_tec9_so_tornado_bravo_light_large.b9bcae80fa19a0a2a147484427733172c2189cb9.png',
'csgo/tec9/weapon_tec9_sp_leaf_orange_light_large.9dea950fd04f689507adcb2acb3ff2540f19dffe.png',
'csgo/tec9/weapon_tec9_sp_mesh_army_light_large.b2404b6aa0c7e1584fe2691cfeba70d823aff562.png',
'csgo/tec9/weapon_tec9_sp_nukestripe_green_tec9_light_large.0067333625bf11ffa93d705dde553b4b2bf6f82c.png',
    ],
    //"UMP-45"
    [
'csgo/ump45/ump-45.png',
'csgo/ump45/weapon_ump45_aa_engine_performance_light_large.b4207d31aa53b7ed863535d77e9a7420f06c2681.png',
'csgo/ump45/weapon_ump45_aa_fade_ump_light_large.8f6cd56e5075505e9cbda97e72ba49837a17b8f7.png',
'csgo/ump45/weapon_ump45_aa_flames_light_large.03387f4a0a4ac6fe60437ec998e93de0b39e9b8b.png',
'csgo/ump45/weapon_ump45_aa_ump45_moonrise_sunset_light_large.63cf279a66d95757f4fefe498b89480966887083.png',
'csgo/ump45/weapon_ump45_am_carbon_fiber_light_large.b250b860bbe6f7a689448cc47b6ac25427e3d848.png',
'csgo/ump45/weapon_ump45_am_ump_racer_light_large.6d935bf0d33ca90994b1dd9aec78a8938dcd94a2.png',
'csgo/ump45/weapon_ump45_am_ump45_electrowave_light_large.98b6a5211b19bfeecb69d08cc7ebe6584cff353f.png',
'csgo/ump45/weapon_ump45_aq_ump45_flameflower_light_large.9c5aedb21ad6461f0761375c53b50f030fa0e10c.png',
'csgo/ump45/weapon_ump45_cu_labyrinth_light_large.62c8aa10ca8ad146809a21031194e450190f8485.png',
'csgo/ump45/weapon_ump45_cu_ump_arrows_light_large.83f1e692bdafa92f29ce15aebb02502c9e70f276.png',
'csgo/ump45/weapon_ump45_cu_ump_bomb_light_large.48162f997295cb72c35acb2eafbef620b60a1659.png',
'csgo/ump45/weapon_ump45_cu_ump_clutch_kick_light_large.b57e43c07b433517b1c3bdaa1e52ce44878af481.png',
'csgo/ump45/weapon_ump45_cu_ump_corporal_light_large.ae233b4fabc9ff5fef6d25a87175ce5ad8f2ee6e.png',
'csgo/ump45/weapon_ump45_cu_ump_crime_scene_light_large.db37d99efad4621d4b3232bfc0fa8d04b8a6b8e9.png',
'csgo/ump45/weapon_ump45_cu_ump45_metritera_light_large.46ac4388a9651c555ec6849358b85f60a87c328d.png',
'csgo/ump45/weapon_ump45_cu_ump45_primalsaber_light_large.67bef91a43734d654516f65c4288711b257d2049.png',
'csgo/ump45/weapon_ump45_cu_ump45_uproar_light_large.04cd84320c4370bced14a3989b0e141cff67ec88.png',
'csgo/ump45/weapon_ump45_cu_ump45_white_fang_light_large.f63a10d5ee18e3045adfdcf963b9067b3b0a6b48.png',
'csgo/ump45/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png',
'csgo/ump45/weapon_ump45_gs_ump_abyss_light_large.55910298a6be9b071156ef176a31d26007d92d0f.png',
'csgo/ump45/weapon_ump45_gs_ump_gold_bismuth_light_large.c09fa5b0617d1c486737c9beb39f79bec31621dc.png',
'csgo/ump45/weapon_ump45_gs_ump_roadblock_light_large.d6b1372a575db666a8a7f039a39c05597d6cb60b.png',
'csgo/ump45/weapon_ump45_hy_bloom_red_light_large.c2f9856966873a344ab366cbf13a6fc6bf0081fc.png',
'csgo/ump45/weapon_ump45_hy_blueprint_bluered_light_large.1f2e4c38f9f9e7e1d815aeb5af99c499c5ff4951.png',
'csgo/ump45/weapon_ump45_hy_ddpat_urb_light_large.2a86a32be1865ab7757d80bfbee44c80662ee4d9.png',
'csgo/ump45/weapon_ump45_hy_gelpen_light_large.79d22fa00d44408a719b7a840aa4497eebca68fb.png',
'csgo/ump45/weapon_ump45_hy_houndstooth_brown_light_large.f90a2f46ceb0de3a2de44d92004b3a42cfa95e75.png',
'csgo/ump45/weapon_ump45_hy_lines_orange_light_large.d004ea389236e6fa5da2f0555ab5b3723bdf36d1.png',
'csgo/ump45/weapon_ump45_hy_mottled_sand_light_large.14c5d59d597a00bdccaefe47a99de0e5b1f884d6.png',
'csgo/ump45/weapon_ump45_hy_varicamo_red_light_large.30426fbdd212e0961d917ffa214e11431326ee02.png',
'csgo/ump45/weapon_ump45_so_caramel_light_large.4883dbae989e9c61805aa53ca5a02983f74657b9.png',
'csgo/ump45/weapon_ump45_so_indigo_and_grey_light_large.7a4685c334bf103f25ba1865dc0492315bf0ca5c.png',
'csgo/ump45/weapon_ump45_sp_dapple_light_large.a25c92df26ac1c70c65741a07d9da8b0d0785022.png',
'csgo/ump45/weapon_ump45_sp_nukestripe_maroon_light_large.929675f44f0303f77fdd556348294178ecf23db1.png',
'csgo/ump45/weapon_ump45_sp_skull_diagram_bravo_light_large.f3bf563f6e0274f55377e4fe0422905586a3d19b.png',
'csgo/ump45/weapon_ump45_sp_ump45_d-visions_light_large.33ae7e9e8bf24ee97f4f3d3ee113e51782a756fa.png',
    ],
    //"USP-s"
    [
'csgo/usps/usp-s.png',
'csgo/usps/weapon_usp_silencer_am_ddpat_purple_light_large.993825dcdc1100cdaf92b119e82b2ba756a38bea.png',
'csgo/usps/weapon_usp_silencer_am_electric_red_light_large.ef8005beba74458fabbe8f664e0b210b2ef3a007.png',
'csgo/usps/weapon_usp_silencer_am_intelligence_magenta_light_large.5d8fbbd462701928467530e6c7ff81b8c7be65a1.png',
'csgo/usps/weapon_usp_silencer_am_lizard_red_light_large.8028fa8c551ef6e26b3fff892e8138b5294ad7fd.png',
'csgo/usps/weapon_usp_silencer_am_zebra_dark_light_large.add709b2eb683853f9508ddf9c22503d7efb9925.png',
'csgo/usps/weapon_usp_silencer_aq_usp_stainless_light_large.3f6edb8ebd4138742504859e0d3e7c51a23c39db.png',
'csgo/usps/weapon_usp_silencer_cu_kaiman_light_large.8ed168478e306bd382a90afb1b71ad9f7551b342.png',
'csgo/usps/weapon_usp_silencer_cu_luggage_usp-s_light_large.3adca3c85f5ae2b083489a1059e1254417ff73c8.png',
'csgo/usps/weapon_usp_silencer_cu_usp_black_lotus_light_large.d40de54b67e255871a2a31a15e871e8d185049ea.png',
'csgo/usps/weapon_usp_silencer_cu_usp_cut_light_large.573fc8c594667e378f3ed9890ce48bbb586e8de0.png',
'csgo/usps/weapon_usp_silencer_cu_usp_cyrex_light_large.caef5e9fa7e19c3a4fd6f135d7ae122459b348d0.png',
'csgo/usps/weapon_usp_silencer_cu_usp_elegant_light_large.416f607cc5faeb52be0f22e1b98450391f452ac2.png',
'csgo/usps/weapon_usp_silencer_cu_usp_flashback_light_large.47e10129af33303bac557560400c33e4fe555680.png',
'csgo/usps/weapon_usp_silencer_cu_usp_kill_confirmed_light_large.a3a7b8f19c9fb931b18c1edd7dd21d44e2c3c2e0.png',
'csgo/usps/weapon_usp_silencer_cu_usp_krokos_light_large.ef94a997db4a990e55bc44d4b07b25f0f420e59e.png',
'csgo/usps/weapon_usp_silencer_cu_usp_printstream_light_large.9f5bcd4f94db3d965b3b2e7c3aace470e9466380.png',
'csgo/usps/weapon_usp_silencer_cu_usp_progressiv_light_large.91cde781cd0c8502bbbb66f37cc7f1baf2a10c05.png',
'csgo/usps/weapon_usp_silencer_cu_usp_sandpapered_light_large.8de907fed2d0036e0c6c1f326c20915e846227a7.png',
'csgo/usps/weapon_usp_silencer_cu_usp_spitfire_light_large.883b877a8a57c9dd1128f2550ddd694d959f3150.png',
'csgo/usps/weapon_usp_silencer_cu_usp_to_hell_light_large.13912fa139f2055f7e3044a234ad111bbbce548f.png',
'csgo/usps/weapon_usp_silencer_cu_usps_blueprint_light_large.e4195098bb3a105e6545d32c4d72888f673bd761.png',
'csgo/usps/weapon_usp_silencer_cu_usps_noir_light_large.ed0f4245c1b9031c6d410300ce6de1f1efb75481.png',
'csgo/usps/weapon_usp_silencer_gs_usp_voltage_light_large.11e40b4d4fc09043d4fa513f3913ca65ffcfbb41.png',
'csgo/usps/weapon_usp_silencer_gs_usps_hangedman_light_large.a01890fdeb8335437df7af6641a7b4f6e2fcca34.png',
'csgo/usps/weapon_usp_silencer_hy_indigo_usp_light_large.aa460050dc0fd2d87522a869cefbf5d5ab442f27.png',
'csgo/usps/weapon_usp_silencer_hy_redtiger_light_large.5d778f6030de49296f349081781d84ef215a9b90.png',
'csgo/usps/weapon_usp_silencer_hy_siege_bravo_light_large.517b89e78bfe8bad7ca1aab7edf1d02a56b2da26.png',
'csgo/usps/weapon_usp_silencer_hy_varicamo_night_light_large.df1cac3f27ea81237acbc9d56137f5e3ddf072d5.png',
'csgo/usps/weapon_usp_silencer_so_khaki_green_light_large.546b3eb856bbf2aeece29e2852688ddae13531b7.png',
'csgo/usps/weapon_usp_silencer_so_whiteout_riptide_light_large.87d3b82c83ef28ff06955915907d062376be31ac.png',
'csgo/usps/weapon_usp_silencer_sp_ancient_bright_light_large.794efdc565345a758d9a6fd673db4a42e01d59c8.png',
'csgo/usps/weapon_usp_silencer_sp_labyrinth2_light_large.62697e5210fe32fc1b5bc3d525b197d53508950d.png',
'csgo/usps/weapon_usp_silencer_sp_leaves_light_large.a71c8dc482fea4aaa1c6b5c115e370a7e134ddfd.png',
'csgo/usps/weapon_usp_silencer_sp_mesh_safetyred_light_large.2236c5b787e251c103ddf44209b4b7731b3d9a43.png',
    ],
    //"XM1014"
    [
'csgo/xm/weapon_xm1014_am_ancient_warm_light_large.9a53c1b2db897b005c56b8f5e4a5b9f40730c85b.png',
'csgo/xm/weapon_xm1014_am_moro_textile_bright_light_large.90d9c102cff5e50e56b5d4bdc9c967ab7ae7efd8.png',
'csgo/xm/weapon_xm1014_am_xm_zombie_offensive_light_large.0e15d69fbf9b3d93b14f54f85fa84bcb45c8f49e.png',
'csgo/xm/weapon_xm1014_aq_xm_leaf_fade_light_large.f753b1b710a8023e299d1918ca150b42483ca1cd.png',
'csgo/xm/weapon_xm1014_aq_xm1014_hot_rod_light_large.f664b036e9b4ec638574f17a9b7ea0905e8c57e0.png',
'csgo/xm/weapon_xm1014_aq_xm1014_punk_light_large.8c6eb5bcf234179713a52b1a5e22c64c21c52007.png',
'csgo/xm/weapon_xm1014_aq_xm1014_sigla_light_large.71c180cd3b8bdea7d0b119ab2b9d54792c51b3aa.png',
'csgo/xm/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png',
'csgo/xm/weapon_xm1014_cu_xm1014_amulet_blue_light_large.1375467de64fba676253ac771bc9ce8f83b6a8f7.png',
'csgo/xm/weapon_xm1014_cu_xm1014_caritas_light_large.060e6378f5b5ab6fc53a2db451f3d68b8033f304.png',
'csgo/xm/weapon_xm1014_cu_xm1014_heaven_guard_light_large.c7f3f8815f9caa92daa5ffe4390880c1606f4a81.png',
'csgo/xm/weapon_xm1014_cu_xm1014_incinerator_light_large.7649f64bbfea49d6f0d951320e0bdd98d6bee088.png',
'csgo/xm/weapon_xm1014_cu_xm1014_oxide_blaze_light_large.691be80b706e1ea4faf9b5c9bec40b3611b1d440.png',
'csgo/xm/weapon_xm1014_cu_xm1014_spectrum_light_large.6318ee51c405fb5e8a40aedfc3d98d530f789a5b.png',
'csgo/xm/weapon_xm1014_gs_xm1014_watchdog_light_large.5443196414c00a57b26d9af50d4a75a35dd8dbd8.png',
'csgo/xm/weapon_xm1014_hy_xm1014_fractal_blue_light_large.e9720fb7b5928db8bcf79d62850af5bf475b9ec5.png',
'csgo/xm/xm1014.png',
    ]


]





var skinARR = [
 //'Any',
'AK-47',
'AUG',
'AWP',
'CZ75-Auto',
'Desert Eagle',
'Dual Berettas',
'FAMAS',
'Five-SeveN',
'G3SG1',
'galil AR',
'Glock-18',
'M249',
'M4A1-S',
'M4A4',
'MAC-10',
'MAG-7',
'MP5-SD',
'MP7',
'MP9',
'Negev',
'Nova',
'P2000',
'P250',
'P90',
'PP-Bizon',
'R8 Revolver',
'Sawed-Off',
'SCAR-20',
'SG 553',
'SSG 08',
'Tec-9',
'UMP-45',
'USP-S',
'XM1014']




//after page loaded, show optoin menu





//once user chooses what skin type they want then display those skins


var OPTS = document.getElementById('OPTS')


var curPicAr = []
var curIMG = []
var FinalAR = [] //final array with all images it's rating
var all = document.getElementsByTagName('*')


    let clickC2 = 0;
console.log(document.getElementById('OPTS'))
    document.getElementById('OPTS').addEventListener('click', ()=>{
        console.log('clicked')
       
    clickC2++
    if(clickC2==1){ document.getElementById('invis').remove()}
    if(clickC2 == 2){
        console.log('second clicked')

        //div popup for rating pics  
        document.getElementById('rateboard').style.display = "none"
        var all = document.getElementsByTagName("*");
        
        //document.getElementById('options').style.display = ""

        let curSType = OPTS.value
        var curPic = document.createElement('img');
        let indexNum = skinARR.indexOf(String(curSType))









        //function after choosing skin type; show loadup animation
function loadup(){
        //show the loading screen while loading images of the selected gun
        document.getElementById('loadingscreen').style.display = ""
        document.getElementById('options').style.display = "none"
        document.getElementById('SkinOpt').style.display = "none"
        document.getElementById('loading').innerText = 'Loading ' +  String(curSType) + ' skins'



//preload images while showing the loading screen
        for(let k = 0; k < LIST[indexNum].length; k++){
            console.log(LIST[indexNum][k])
            var img = new Image();
            img.src = LIST[indexNum][k];
        }


        setTimeout(displayRateBoard, 2000)
}      

//run loadup func
loadup()




//after loadup animation, show the rateboard with the skins
function displayRateBoard(){
    document.body.style.backgroundImage = "url('112264.jpg')"
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = "100% 100%"
//once prelaod images loaded
        document.getElementById('loadingscreen').style.display = "none"
        document.getElementById('rateboard').style.display = ""
//display picture
        
        curPic.classList.add('skinClass')
        
        let indexNum = skinARR.indexOf(String(curSType))
        for(let k = 0; k < LIST[indexNum].length; k++){
            curPicAr.push(LIST[indexNum][k])
        }
        curPic.src = curPicAr[0]
        rateboard.appendChild(curPic)




        
}
        
        //when click on button, change to next picture
        document.querySelectorAll('.bnt').forEach( button => {
            button.onclick = function () {

                
                //if nothing is in the picture array, then exit and go back to main screen adn display popup with the rateboar
                if(curPicAr.length == 1){
                    curPic.alt = button.innerText
                    FinalAR.push(curPic.src)
                FinalAR.push(curPic.alt)

                //show loadup animation then display the final popup with the all the ratings
                function Showanimation(){
                    document.getElementById('loadingscreen').style.display = ""
                    document.getElementById('rateboard').style.display = "none"
                    document.getElementById('loading').innerText = 'Loading Final Ratings'
                    document.body.style.backgroundImage = ""
                    document.body.style.backgroundColor = 'black'

                    setTimeout(goPage, 1500)
                }
                Showanimation()

                    //show popup with the rating
                    function goPage(){
                        document.getElementById('loadingscreen').style.display = "none"
                        
                        //display the final rating board
                        document.getElementById('FinnaDone').style.display = ""
                        for(let i = 0; i < document.getElementsByClassName('listRow').length; i++){
                            document.getElementsByClassName('listRow')[i].style.display=""
                        }
                        for(let i = 0; i < document.getElementsByClassName('sorted').length; i++){
                            document.getElementsByClassName('sorted')[i].style.display=""
                        }
                        for(let i = 0; i < document.getElementsByClassName('tier').length; i++){
                            document.getElementsByClassName('tier')[i].style.display=""
                        }
                        document.getElementById('DownloadResult').style.display=""
                        document.getElementById('de_result').style.display=""
                        document.getElementById('Back').style.display=""
                        //remove the image displayer
                        document.getElementById('rateboard').style.display = "none"
                        document.body.style.backgroundImage = ''
                        

                       //add all the images according to the rating compared tot eh number on the tier list
                       for(let j = 0; j < FinalAR.length; j++){
                        let k = j
                        let img = document.createElement('img')
                        //j is src, k+1 is alt
                        //console.log(FinalAR[j], FinalAR[k+1])
                        img.src = FinalAR[j]
                        img.alt = FinalAR[k+1]
                        img.classList = "img"
                        document.getElementById(img.alt).appendChild(img)

                        j++
                       }
                       


                      
        
                    }
                    
                    
                   

                }


               
      



                function first(){
                //console.log('current image pushed to finalAr')
                console.log(curPicAr[0])
                curPic.alt = button.innerText
                FinalAR.push(curPic.src)
                FinalAR.push(curPic.alt)
                //console.log(FinalAR[FinalAR.length-1])
                curPicAr.splice(0,1)
                setTimeout(second, 100)
                //console.log(LIST[indexNum])
                }
                
                 function second(){
                curPic.src = curPicAr[0]
               // console.log(FinalAR[FinalAR.length - 1])
                //console.log(FinalAR[FinalAR.length - 2])
                
                
                
                 }
            first()
                
                
                
                
                

                //if images run out
                
        }
        })



         //back button
      document.getElementById('Back').addEventListener('click', ()=>{


       
        document.getElementById('gunOPTS').classList.remove("textAnimation") 
        document.getElementById('SkinOpt').style.display = ""
        document.getElementById('options').style.display = "none"
        document.getElementById('rateboard').style.display = "none"
        document.getElementById('loadingscreen').style.display = "none"
        document.getElementById('FinnaDone').style.display = "none"
        document.body.style.backgroundImage = ""
        document.body.style.backgroundColor = 'black'
        const removeSkin = document.querySelectorAll('.skinClass');
        removeSkin.forEach(box => {
            box.remove();
        });
    
    
        indexNum = 0
        curIMG = []
        curPic = []
        curPicAr = []
        FinalAR = []
        //remove skins from the final ratings board
        let myNode = document.querySelectorAll('.sorted')
        for(let i = 0; i < myNode.length; i ++){
            myNode[i].innerHTML = '';
        }
       
       

      })





    //exit roatboard function
    document.getElementById('exit').addEventListener("click", function(){
    
        for (var i=0; i < all.length; i++) {
            if(all[i].id !== 'rateboard'  && all[i].className !== 'bnt' && all[i].id!== 'exit'&& all[i].id !== 'FinnaDone'&& all[i].id !== 'showskin'&&all[i].className !== 'listRow' &&all[i].className !== 'sorted' &&all[i].className !== 'tier' ){
                all[i].style.display = ""
            }
        }
    
        document.getElementById('options').style.display == ""
        document.getElementById('rateboard').style.display = "none"
        document.getElementById('GameName').style.display = "none"
        document.getElementById('loadingscreen').style.display = "none"
        document.body.style.backgroundImage = ""
        document.body.style.backgroundColor = 'black'
        const removeSkin = document.querySelectorAll('.skinClass');
        removeSkin.forEach(box => {
            box.remove();
        });
    
    
        indexNum = 0
        curIMG = []
        curPic = []
        curPicAr = []
        FinalAR = []
      });
    
    
    
        
        clickC2=0
    }
    

    })









//download the final result


document.getElementById("DownloadResult").addEventListener('click', function () {
    
    let useWidth = document.getElementById("de_result").scrollWidth
    let useHeight =  document.getElementById("de_result").scrollHeight;
    let Element = document.getElementById("de_result")
    
    html2canvas(Element, {
        width: useWidth,
        height: useHeight,
        
    }).then( function(canvas) {
        
            // you should get a canvas that includes the entire element -- not just the visible portion
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            document.getElementById("previewImg").appendChild(canvas);			
            anchorTag.download = "filename.jpg";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click();
            document.getElementById("previewImg").removeChild(canvas);


            console.log(canvas.width, canvas.height)
            console.log(useWidth, useHeight)
        })
    




});





 



 /*
        html2canvas(document.getElementById("FinnaDone"),		{
        allowTaint: true,
        useCORS: true
    }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg").appendChild(canvas);			
        anchorTag.download = "filename.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });

    */


/*


    //preload all images so quick on website
    for (let i = 0; i < LIST.length; ++i) {
        for(let k=0; k<LIST[i].length; k++){
            //console.log(LIST[i][k])
            var img = new Image();
            img.src = LIST[i][k];
        }
      }


      */


      
