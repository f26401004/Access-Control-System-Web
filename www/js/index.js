const isAndroid = () => {
    if( window.device.platform.match( /android/i ) ) {    
        return true
    }
    return false
}

let app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents()
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready')
        // modify the body zoom to fit the device.
        if( isAndroid() ) {
            document.body.style.zoom = 2 / window.devicePixelRatio
        }
        
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id)
    },
};

// initialize the app.
app.initialize();

