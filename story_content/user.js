function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hOWiK9Znch":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="bgmlimfung.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

