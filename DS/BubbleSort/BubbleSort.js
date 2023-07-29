//A sorting ALgorithm where the largest values bubble up to the top!
//Pseudocode
/*
Start looping from with a variable called x the end of the array towards the biginning
 then start a inner loop als o with 0 to  x-1
if y is greater han y+1 then swao those twio  values 
return the sorted array

*/

function bubble(inpData){
	var length = inpData.length;
	for(var x =0;x<length ;x++){
		for(var y=0;y<length;y++){
			if(inpData[y]>inpData[y+1]){
				var swap = inpData[y]
				inpData[y] = inpData[y+1]
				inpData[y+1] = swap;
			}
		}
	}
	return inpData;
}


console.log(bubble([21,45,35,20,12,02]))

