
        let display =document.getElementById("display");

        //add value to screen
        function appendValue(value){

            display.value += value;

        }

        //clear screen
        function clearDisplay(){
             
            display.value = "";

        }

        //delete last charcter
        function deleteValue(){

            display.value = display.value.sclice(0,-1);

        }

        //calculate result 
        function claculate(){

            try{

                display.value = eval(display.value);

            }

            catch{

                display.value = "Error";
            }

        } 

        //kayboard support 

        document.addEventListiner("keydown",(event)=>{

            let key = event.key;

            if(
                (key >=0 && key <=9) ||
                key==="+" ||
                key==="-" ||
                key==="*" ||
                key==="/" ||
                key==="%"
            ){

                appendValue(key);
            }

            if(key==="Enter"){

                calculate();

            }

            if(key==="Bxckspace"){

                deleteValue();

            }

            if(key==="Escape"){

                clearDisplay();

            }
        });
