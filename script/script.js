function init() {
      //基本設定
        //マップ
        var map = L.map('map',{
          zoomControl:false,
        });
        map.setView([30, -30], 2);
        //マップ画像
        L.tileLayer('img/map/{z}/{x}/{y}.png', {
          minZoom:0,maxZoom:3,
          noWrap:true,
          tms:false,
          attribution: "Made by <a href='https://twitter.com/myo108_' target='_blank'>myo</a> | <a href='https://jp.finalfantasyxiv.com' target='_blank'>Final Fantasy XIV </a>(C) SQUARE ENIX CO., LTD. All Rights Reserved."
        }).addTo(map);
        //コントローラーを左下に
          L.control.zoom({position:'bottomleft'}).addTo(map);
        //geojson設定
          //リンゴ
          var apple = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/apple.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/apple.json", function(data) {
            apple.addData(data);
          });
          //パーム
          var palm = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/palmLeaf.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/palm.json", function(data) {
            palm.addData(data);
          });
          //トワランツリー
          var tualang = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/twig.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/tualang.json", function(data) {
            tualang.addData(data);
          });
          //マホガニー
          var mahogany = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/resin.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/resin.json", function(data) {
            mahogany.addData(data);
          });
          
          //アサ
          var hemp = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/hemp.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/hemp.json", function(data) {
            hemp.addData(data);
          });

          //サトウキビ
          var sugarcane = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/sugarcane.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/sugarcane.json", function(data) {
            sugarcane.addData(data);
          });
          //綿花
          var cotton = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/cotton.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/cotton.json", function(data) {
            cotton.addData(data);
          });
          //粘土
          var clay = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/clay.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/clay.json", function(data) {
            clay.addData(data);
          });
          //砂錫
          var tinsand = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/tinsand.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/tinsand.json", function(data) {
            tinsand.addData(data);
          });                    
          //石灰岩
          var limestone = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/Limestone.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/limestone.json", function(data) {
            limestone.addData(data);
          });
          //銅
          var copper = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/copper.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/copper.json", function(data) {
            copper.addData(data);
          });
          //花崗岩
          var granite = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/Granite.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/granite.json", function(data) {
            granite.addData(data);
          }); 
          //鉄
          var iron = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/iron.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/iron.json", function(data) {
            iron.addData(data);
          });
          //クォーツ
          var quatz = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/quatz.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/quatz.json", function(data) {
            quatz.addData(data);
          });                             
          //岩塩
          var rocksalt = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/rocksalt.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/rocksalt.json", function(data) {
            rocksalt.addData(data);
          });          
          //二枚貝
          var bivalvia = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/Bivalvia.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/bivalvia.json", function(data) {
            bivalvia.addData(data);
          });
          //玉藻
          var seaweed = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/seaweed.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/seaweed.json", function(data) {
            seaweed.addData(data);
          });
          //珊瑚
          var coral = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/coral.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/coral.json", function(data) {
            coral.addData(data);
          });
          //かぼちゃ
          var pumpkin = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/pumpkin.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/pumpkin.json", function(data) {
            pumpkin.addData(data);
          });
          //キャベツ
          var cabbege = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/cabbege.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/cabbege.json", function(data) {
            cabbege.addData(data);
          });
          //パースニップ
          var parsnip = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/Parsnip.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/parsnip.json", function(data) {
            parsnip.addData(data);
          });
          //popoto
          var popoto = L.geoJson(null, {
            pointToLayer: function(feature, latlng) {
              var icn = L.icon({
                iconUrl: 'img/icon/popoto.png',
                iconSize: [24, 24],
              });
              var marker = L.marker(latlng, {
                icon: icn
              });
              return marker;
            }
          })
          $.getJSON("geojson/popoto.json", function(data) {
            popoto.addData(data);
          });          
        //オーバーレイフィルター設定
        var overlayMaps = {
            "<img src='img/icon/palmLeaf.png'align='center'width='36' height='36' style='margin:2px' /><img src='img/icon/palmLog.png'align='center'width='36' height='36'style='margin:2px' /> パームツリー":palm,
            "<img src='img/icon/twig.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/log.png'align='center'width='36' height='36'style='margin:2px' /> トワランツリー":tualang,
            "<img src='img/icon/resin.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/log.png'align='center'width='36' height='36'style='margin:2px' /> マホガニーツリー":mahogany,
            "<img src='img/icon/apple.png'align='center'width='36' height='36' style='margin:2px' /><img src='img/icon/vine.png'align='center'width='36' height='36'style='margin:2px' /> アイルアップルツリー": apple,
            "<img src='img/icon/sugarcane.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/vine.png'align='center'width='36' height='36'style='margin:2px' /> サトウキビ":sugarcane,
            "<img src='img/icon/cotton.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/grass.png'align='center'width='36' height='36'style='margin:2px' /> 綿花":cotton,
            "<img src='img/icon/hemp.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/grass.png'align='center'width='36' height='36'style='margin:2px' /> サイザルアサ":hemp,
            "<img src='img/icon/clay.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/sand.png'align='center'width='36' height='36'style='margin:2px' /> 土山":clay,
            "<img src='img/icon/tinsand.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/sand.png'align='center'width='36' height='36'style='margin:2px' /> 川底の砂":tinsand,
            "<img src='img/icon/limestone.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/stone.png'align='center'width='36' height='36'style='margin:2px' /> 白いなめらかな岩":limestone,
            "<img src='img/icon/copper.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/stone.png'align='center'width='36' height='36'style='margin:2px' /> 青みを帯びた岩":copper,
            "<img src='img/icon/granite.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/stone.png'align='center'width='36' height='36'style='margin:2px' /> まだら模様の岩":granite,
            "<img src='img/icon/iron.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/stone.png'align='center'width='36' height='36'style='margin:2px' /> 深い黒色の岩":iron,
            "<img src='img/icon/quatz.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/stone.png'align='center'width='36' height='36'style='margin:2px' /> 水晶塊":quatz,
            "<img src='img/icon/rocksalt.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/stone.png'align='center'width='36' height='36'style='margin:2px' /> 結晶を帯びた岩":rocksalt,
            "<img src='img/icon/bivalvia.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/saltwaterFish.png'align='center'width='36' height='36'style='margin:2px' /> 大きな貝":bivalvia,
            "<img src='img/icon/seaweed.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/squid.png'align='center'width='36' height='36'style='margin:2px' /> 海藻の茂み":seaweed,
            "<img src='img/icon/coral.png'align='center'width='36' height='36'style='margin:2px' /><img src='img/icon/jellyfish.png'align='center'width='36' height='36'style='margin:2px' /> 珊瑚礁":coral,
            "<img src='img/icon/pumpkin.png'align='center'width='36' height='36'style='margin:2px' />食い荒らされたパンプキン":pumpkin,
            "<img src='img/icon/cabbege.png'align='center'width='36' height='36'style='margin:2px' />食い荒らされたキャベツ":cabbege,
            "<img src='img/icon/parsnip.png'align='center'width='36' height='36'style='margin:2px' />成熟しきったパースニップ":parsnip,
            "<img src='img/icon/popoto.png'align='center'width='36' height='36'style='margin:2px' />成熟しきったポポト":popoto,
        };
        var layerControl = L.control.layers(null,overlayMaps,{collapsed: false}).addTo(map);

}