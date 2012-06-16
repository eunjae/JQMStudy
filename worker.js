// JavaScript Document
onmessage = function(event)
{
	var receiveData = event.data;
	sleep(3000);
	
	var sendData = receiveData + " OK~ I'm Worker"
	postMessage(sendData)
}

function sleep(milliSeconds)
{
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}