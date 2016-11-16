$( document ).ready(function() {
	document.getElementById("paymentDetails").className = "";
    console.log( "ready!" );
});


var price = 10;
var paymentType = 0;
var cardNum;
function creditChosen(){
	if(document.getElementById("CreditCard").className == "hide"){
		document.getElementById("CreditCard").className = "";
		paymentType = 1;
	}else{
		document.getElementById("CreditCard").className = "hide";
		paymentType = 0;
	}
	document.getElementById("PayPal").className = "hide";
	document.getElementById("Cash").className = "hide";
	console.log(paymentType);
}

function payPalChosen(){
	document.getElementById("CreditCard").className = "hide";
	if(document.getElementById("PayPal").className == "hide"){
		document.getElementById("PayPal").className = "";
		paymentType = 2;
	}else{
		document.getElementById("PayPal").className = "hide";
		paymentType = 0;
	}
	document.getElementById("Cash").className = "hide";
	console.log(paymentType);
}

function cashChosen(){
	document.getElementById("CreditCard").className = "hide";
	document.getElementById("PayPal").className = "hide";
	if(document.getElementById("Cash").className == "hide"){
		document.getElementById("Cash").className = "";
		paymentType = 3;
	}else{
		document.getElementById("Cash").className = "hide";
		paymentType = 0;
	}
	console.log(paymentType);
}

function submitClicked(){
	switch(paymentType){
		case 0:
			alert("Please enter payment details");
			break;
		case 1:
			document.getElementById("paymentDetails").className = "hide";
			document.getElementById("receipt").className = "";
			cardNum = document.getElementById("Number").value;
			document.getElementById("ReceiptInfo").innerHTML = "$"+ price + " has been charged to your credit card with number " + cardNum;
			break;
		case 2:
			document.getElementById("paymentDetails").className = "hide";
			document.getElementById("receipt").className = "";
			cardNum = document.getElementById("Number").value;
			document.getElementById("ReceiptInfo").innerHTML = "$"+ price + " has been charged to your PayPal account";
			break;
		case 3:
			document.getElementById("paymentDetails").className = "hide";
			document.getElementById("cashDetails").className = "";
			var fortnightAway = new Date(+new Date + 12096e5);;
			document.getElementById("CashInfo").innerHTML = "Please pay your balance of $" + price + " before " + fortnightAway.getFullYear()+"-"+ (fortnightAway.getMonth()+1) +"-"+fortnightAway.getDate() +". <br>If you do not, your locker may be sold to someone who pays on time. ";
			break;
	}
	console.log("poop");
}