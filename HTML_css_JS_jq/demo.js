			function ExternalAlert(){
				alert("External Alert.");
			}
			function ExternalConfirm(){
				if(confirm("Are you sure..??")){
					alert("YESSS");
				}
				else{
					alert("NOOOO");
				}
			}
			function ExternalPrompt(){
				var fName=prompt("Enter Firstname Here..");
				var lName=prompt("Enter Lastname Here..");
				alert(fName+" "+lName);
			}