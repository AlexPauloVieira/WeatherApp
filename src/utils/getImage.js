const images = {
    Clear: require('../assets/clear.png'),
    Hail: require('../assets/hail.jpg'),
    'Heavy Cloud': require('../assets/heavy-cloud.jpg'),
    'Light Cloud': require('../assets/light-cloud.jpg'),
    'Heavy Rain': require('../assets/heavy-rain.jpg'),
    'Light Rain': require('../assets/rain.png'),
    Showers: require('../assets/rain.png'),
    Sleet: require('../assets/sleet.jpg'),
    Snow: require('../assets/snow.jpg'),
    Thunder: require('../assets/thunder.jpg'),
};

export default weather => images[weather];