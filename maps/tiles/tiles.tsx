<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.9" tiledversion="1.9.2" name="bots" tilewidth="8" tileheight="8" tilecount="12" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0" probability="0.9">
  <image width="8" height="8" source="road.png"/>
 </tile>
 <tile id="1" probability="0.35">
  <image width="8" height="8" source="ground.png"/>
 </tile>
 <tile id="2">
  <image width="8" height="8" source="wall.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="8" height="8"/>
  </objectgroup>
 </tile>
 <tile id="3" probability="0.004">
  <image width="8" height="8" source="anomaly.png"/>
 </tile>
 <tile id="4" probability="0.01">
  <image width="8" height="8" source="glass.png"/>
 </tile>
 <tile id="5" probability="0.65">
  <image width="8" height="8" source="grass.png"/>
 </tile>
 <tile id="6" probability="0.05">
  <image width="8" height="8" source="radiation_weak.png"/>
 </tile>
 <tile id="7" probability="0.9">
  <image width="8" height="8" source="swamp.png"/>
 </tile>
 <tile id="9" probability="0.001">
  <image width="8" height="8" source="search.png"/>
 </tile>
 <tile id="10" probability="0.15">
  <image width="8" height="8" source="radiation_middle.png"/>
 </tile>
 <tile id="11" probability="0.05">
  <image width="8" height="8" source="radiation_strong.png"/>
 </tile>
 <tile id="8">
  <image width="8" height="8" source="water.png"/>
 </tile>
 <wangsets>
  <wangset name="Random Ground" type="corner" tile="1">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="1" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="3" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="4" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="5" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Water" type="corner" tile="8">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="3" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="7" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="8" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Anomaly" type="corner" tile="3">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="3" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="10" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="11" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Random Radiation" type="corner" tile="6">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="10" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="11" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Stable mixed ground" type="corner" tile="5">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="1" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="3" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="5" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="9" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="10" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="11" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
 </wangsets>
</tileset>
