// TODO: add code here
window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
	.then(function(response) {
	    return response.json();
	}).then(function(response) {
	    // push astronaut to the screen
		
		let sortedAstronuats = response.sort(function(a, b) { return a.hoursInSpace - b.hoursInSpace });
		
		let myContainer = document.getElementById('container');
		
		//let allMyHtml = '';
		
		let astronautCount = `<h3>Astronaut Count: ${sortedAstronuats.length}</h3>`;
		// allMyHtml += astronautCount;
		
		//for (let i = 0; i < response.length; i++) {
		    //let myHtml = `
			
			//<div class="astronaut">
				     //<div class="bio">
					     //<h3>${response[i].firstName} ${response[i].lastName}</h3>
						     //<ul>
							     //<li>Hours in space: ${response[i].hoursInSpace}</li>
								 //<li>Active: ${response[i].active}</li>
								 //<li>Skills: ${response[i].skills.join(', ')}</li>
							 //</ul>
					//</div>
					//<img class="avatar" src="${response[i].picture}">
			//</div>`;
				// allMyHtml += myHtml;	
		//})
		
		//myContainer.innerHTML = allMyHtml
		//myContainer.innerHTML += myHtml;
		
		sortedAstronuats.forEach(astronaut) {
		    let myHtml = `
			
			<div class="astronaut">
				     <div class="bio">
					     <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
						     <ul>
							     <li>Hours in space: ${astronaut.hoursInSpace}</li>
								 <li ${astronaut.active ? 'style="color:green;"' : ''}>Active: ${astronaut.active}</li>
								 <li>Skills: ${astronaut.skills.join(', ')}</li>
							 </ul>
					</div>
					<img class="avatar" src="${astronaut.picture}">
			</div>`;
				// allMyHtml += myHtml;	
		};
		
		//myContainer.innerHTML = allMyHtml
		myContainer.innerHTML += myHtml;
	});
});