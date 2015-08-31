document.write('
<div>game
	<div>name</div>
    <div>location
		<div>zipcode</div>
		<div>store
			<div>.store_id</div>
			<div>store_name</div>
		</div>
	 </div>
	<div>price
		<div>promotional_price</div>
	</div>
</div>
');


var div_elements = document.body.getElementsByTagName('div');


var div_location_elements = document.body.getElementsByTagName('div')[2].children;


for(i=0;i<div_location_elements.length;i++){div_location_elements[i].style.backgroundColor = 'lightgrey';};


div_location_elements[i].style.backgroundColor = 'lightgrey';


for(i=0;i<div_location.length;i++){div_location[i].textContent = 'game_data_goes_here';}


document.body.getElementsByTagName('div')[2].children

//HOW TO REMOVE AN ELEMENT FROM THE DOCUMENT
/*
Use the REMOVE Function for removing a DOM element
*/
div_elements[8].remove(div_elements[8]);











