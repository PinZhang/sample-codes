var mediaRecorder = null;

function log(msg) {
  // alert(msg);
  document.getElementById('logger').textContent = msg;
}

var count = 0;
function startRecording(stream) {
  var audioElem = document.getElementById('audio');
  mediaRecorder = new MediaRecorder(stream, {
    mimeType: '' // 'audio/3gpp' // need to be certified
  }); //audioElem.mozCaptureStreamUntilEnded());

  mediaRecorder.ondataavailable = function ondataavailable(e) {
    document.getElementById('playback').src =
      window.URL.createObjectURL(e.data);
    
    // document.getElementById('download').href = window.URL.createObjectURL(e.data);
    document.getElementById('download').onclick = function() {
      console.log("### mimeType: " + mediaRecorder.mimeType + ", " + (typeof e.data));
      var sdcard = navigator.getDeviceStorage("sdcard");
      var request = sdcard.addNamed(e.data, "recorder-" + Math.floor(Math.random() * 100) + ".ogg");
      request.onsuccess = function() {
        console.log("#### File " + this.result + " successfully saved.");
      };
      
      request.onerror = function() {
        console.log("#### Failed to save file: " + this.error.name + ", " + this.error.message);
      };
    };
  };

  mediaRecorder.onerror = function onerror(e) {
    log(e);
  };

  mediaRecorder.onwarning = function onwarning(e) {
    log('warning: ' + e);
  };

  mediaRecorder.onstop = function onstop(e) {
    log('recorder stopped');
  };

  console.log("### do start recording.");
  mediaRecorder.start();

  // window.setTimeout(function stopMediaRecorder() {
  //   log('stop recorder: ' + mediaRecorder.state);
  //   mediaRecorder.stop();
  // }, 5000);

  document.getElementById('stop').onclick = function() {
    mediaRecorder.stop();
  };
}

function getAudioInput() {
  navigator.mozGetUserMedia({
    audio: true,
    video: false
  }, function onGetMedia(localMediaStream) {
    console.log("### onGetMedia");
    startRecording(localMediaStream);
  }, function onError(err) {
    log('Error occurs when fetching media: ' + err);
  });
}

document.getElementById('start').onclick = getAudioInput;
