const SkyboxEnum = {
    STARS: 1,
    SUN: 2
};

const graphicsModule = {
    namespaced: true,

    state: { 
        floorMapActive: true,
        worldMapActive: true,
        mapLatitude: 38.870934,
        mapLongitude: -77.056101,
        skybox: SkyboxEnum.SUN,
        skytime: 11, // 24 hours
        bump: true,
        normal: true
    },

    mutations: {
        SET_FLOOR_MAP_ACTIVE: function(state, active=true) {
            if (CONFIG.DEBUG) {console.log("SET_FLOOR_MAP_ACTIVE")}
            state.floorMapActive = new Boolean(active);
        },
        SET_WORLD_MAP_ACTIVE: function(state, active=true) {
            if (CONFIG.DEBUG) {console.log("SET_WORLD_MAP_ACTIVE")}
            state.worldMapActive = new Boolean(active);
        },
        SET_MAP_LATITUDE: function(state, val) {
            if (CONFIG.DEBUG) {console.log("SET_MAP_LATITUDE")}
            var num = new Number(val);
            if (num < -90) {num = -90;}
            if (num > 90) {num = 90;}
            state.mapLatitude = num;
        },
        SET_MAP_LONGITUDE: function(state, val) {
            if (CONFIG.DEBUG) {console.log("SET_MAP_LONGITUDE")}
            var num = new Number(val);
            if (num < -180) {num = -180;}
            if (num > 180) {num = 180;}
            state.mapLongitude = num;
        },
        SET_SKYBOX: function(state, val) {
            if (CONFIG.DEBUG) {console.log("SET_SKYBOX");}
            if (SkyboxEnum.hasOwnProperty(val)) {
                state.skybox = SkyboxEnum[val];
            }
            else {
                console.log(`cannot set skybox, ${val} is not a SkyboxEnum`);
            }
        },
        SET_BUMP: function(state, active=true) {
            if (CONFIG.DEBUG) {console.log(`SET_BUMP: ${active}`)}
            state.bump = active ? true : false;//new Boolean(active);
        },
        SET_NORMAL: function(state, active=true) {
            if (CONFIG.DEBUG) {console.log(`SET_NORMAL: ${active}`)}
            state.normal = active ? true : false;//new Boolean(active);
        },
     }
  }


export { SkyboxEnum };
export default graphicsModule;