TOPOJSON=node_modules/.bin/topojson

data/zip/towns.zip:
	mkdir -p $(dir $@)
	wget -O $@ http://wsgw.mass.gov/data/gispub/shape/state/towns.zip

data/shp/raw/TOWNS_POLYM.shp: data/zip/towns.zip
	mkdir -p $(dir $@)
	unzip -d $(dir $@) $<

data/shp/TOWNS_POLYM.shp: data/shp/raw/TOWNS_POLYM.shp
	mkdir -p $(dir $@)
	ogr2ogr -f "ESRI Shapefile" -t_srs EPSG:4326 $@ $<

data/towns.json: data/shp/TOWNS_POLYM.shp
	mkdir -p $(dir $@)
	TOPOJSON -o $@ -p -- $<