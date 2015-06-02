    $('#fbPhotoStream').fbPhotoStream({
    	album: '449475298558996',
    	count: 25,
    	format:'ul',
    	linked: true
    });


	var hiddenImages = true,
		revealText = 'Reveal More Images',
		hideText = 'Hide More Images'

    $('#moreImages').on('click', function() {    	
    	// Console current hiddenImages boolean
    	console.log('Starting out our variable is ' + hiddenImages);

    	if(hiddenImages == true) {
    		$('#fbPhotoStream ul').css({
		    		'height':'500px', 
		    		'overflow-y':'scroll'
	    	});	    	
	    	$('#moreImages').text(hideText);	    	
	    	// Change hiddenImages from true to false
	    	hiddenImages = false;
	    	// Console current hiddenImages boolean
	    	console.log('If true and button clicked we change our variable to ' + hiddenImages);
	    	
    	} else if(hiddenImages == false) {
    		$('#fbPhotoStream ul').css({
		    		'height':'250px', 
		    		'overflow':'hidden'
	    	});
	    	$('#moreImages').text(revealText);
	    	// Change hiddenImages from false to true
	    	hiddenImages = true;
	    	// Console current hiddenImages boolean
	    	console.log('If false and button clicked we change our variable to ' + hiddenImages);
	    }	
    });
    	
